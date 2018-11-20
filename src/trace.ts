import _ from "lodash";
import Papa from "papaparse";
import { DateTime } from "luxon";

export interface LogMessage {
  idx: number;
  age: number; // ns
  message: string;
}

export interface TraceNode {
  spanID: number;
  operation: string;
  location: string;
  tag: string;
  timestamp: DateTime;
  duration: number; // ns
  messages: LogMessage[];
  children: TraceNode[];
}

const EXPECTED_HEADING = ["span_idx", "message_idx", "timestamp", "duration", "operation", "loc", "tag", "message", "age"];

function rowsToTree(rows: TraceNode[]): TraceNode {
  const tree = rows[0];
  let stack = [rows[0]];
  rows.slice(1).forEach(row => {
    let cur = _.last(stack);
    if (row.spanID == cur.spanID) {
      cur.messages.push(...row.messages);
      if ((cur.tag.length == 0) && (row.tag.length > 0)) {
        cur.tag = row.tag;
      }
    } else if (row.spanID > cur.spanID) {
      // Normally, this span should be a child of the cur span, but there are
      // cases in which this new span was actually created on a higher span so
      // if needed, we walk back up the tree until we find a suitable home for
      // this new span based on age. This only occurs if a new span is created
      // from a parent span, but the parent didn't leave a message in the span
      // between children.
      const rowFirstMessage = _.first(row.messages)
      while ((rowFirstMessage.age < _.last(cur.messages).age) && (stack.length > 1)) {
        stack.pop();
        cur = _.last(stack);
      }
      cur.children.push(row);
      stack.push(row);
    } else {
      while (cur.spanID !== row.spanID) {
        stack.pop();
        cur = _.last(stack);
      }
      cur.messages.push(...row.messages);
    }
  });
  return tree;
}

const durationRegex = /(?:(\d*)s)?(?:(\d*)ms)?(?:(\d*)μs)?(?:(\d*)ns)?/;

// returns nanoseconds
function parseDuration(unsanitizedDur: string): number {
  const dur = unsanitizedDur.replace("\\\\", "\\").replace("\\302\\265", "μ");
  const matches = dur.match(durationRegex);
  if (!matches) {
    return 0; // have to null check to make TS happy in this configuration...
  }
  const seconds = (matches[1] ? parseInt(matches[1]) : 0);
  const milliseconds = 1000 * seconds + (matches[2] ? parseInt(matches[2]) : 0);
  const microseconds = 1000 * milliseconds + (matches[3] ? parseInt(matches[3]) : 0);
  const nanoseconds = 1000 * microseconds + (matches[4] ? parseInt(matches[4]) : 0);
  return nanoseconds;
}

function parseRow(columns: string[]): TraceNode {
  if (columns.length !== EXPECTED_HEADING.length) {
    throw new Error(`expected ${EXPECTED_HEADING.length} columns; got ${columns.length}: ${columns}`)
  }
  return {
    spanID: parseInt(columns[0]),
    timestamp: DateTime.fromSQL(columns[2], { zone: 'utc' }),
    duration: parseDuration(columns[3]),
    operation: columns[4],
    location: columns[5],
    tag: columns[6],
    messages: [
      {
        idx: parseInt(columns[1]),
        message: columns[7],
        age: parseDuration(columns[8]),
      },
    ],
    children: [],
  }
}

export function parseCSV(csvText: string): TraceNode {
  const parseRes = Papa.parse(csvText.trim());
  if (parseRes.errors.length > 0) {
    throw new Error(`parse errors: ${parseRes.errors.join(", ")}`);
  }
  if (parseRes.data.length === 0) {
    throw new Error(`parse error: 0 rows`);
  }
  let rows = parseRes.data;
  const header = rows[0];
  if (!_.isEqual(header, EXPECTED_HEADING)) {
    throw new Error(`expected first row ${EXPECTED_HEADING.join(',')}; got ${header.join(',')}`);
  }

  const parsedRows = _.map(rows.slice(1), row => parseRow(row));
  return rowsToTree(parsedRows);
}
