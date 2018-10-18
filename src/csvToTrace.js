import _ from "lodash";
import Papa from "papaparse";

export function parseTrace(csvText) {
  const parsedCSV = parseCSV(csvText);
  return rowsToTree(parsedCSV)
}

const SPAN_START = "=== SPAN START: ";
const SPAN_END = " ===";
const EXPECTED_HEADING = ["span_idx", "message_idx", "timestamp", "duration", "operation", "loc", "tag", "message", "age"];
const SPAN_IDX_COL = 0;
const AGE_COL = 8;
const MESSAGE_COL = 7;

function rowsToTree(rows) {
  function recur(startIdx) {
    const startRow = rows[startIdx];
    const startRowMessage = startRow[MESSAGE_COL];
    const spanIdx = startRow[SPAN_IDX_COL];
    const logMessages = [];
    const children = [];
    let i = startIdx + 1;
    while (i < rows.length) {
      const row = rows[i];
      const rowMessage = row[MESSAGE_COL];
      if (row[SPAN_IDX_COL] === spanIdx) {
        logMessages.push({
          age: row[AGE_COL],
          message: rowMessage,
        });
      } else if (rowMessage.startsWith(SPAN_START)) {
        const { node, endIdx } = recur(i);
        children.push(node);
        i = endIdx;
      }
      i++;
    }

    return {
      node: {
        id: rows[startIdx],
        name: startRowMessage.slice(SPAN_START.length, startRowMessage.length - SPAN_END.length),
        startTS: 0,
        duration: 10,
        props: {},
        children,
        logMessages,
      },
      endIdx: i,
    };
  }

  const message = rows[1][MESSAGE_COL];
  if (!message.startsWith(SPAN_START)) {
    throw new Error(`expected SPAN START; found ${message}`);
  }

  return recur(1).node; // skip header
}

function parseCSV(csvText) {
  const parseRes = Papa.parse(csvText);

  if (parseRes.errors.length > 0) {
    throw new Error(`parse errors: ${parseRes.errors.join(", ")}`);
  }

  if (parseRes.data.length === 0) {
    throw new Error(`parse error: 0 rows`);
  }

  const rows = parseRes.data;
  const header = rows[0];

  if (!_.isEqual(header, EXPECTED_HEADING)) {
    throw new Error(`expected first row ${EXPECTED_HEADING.join(',')}; got ${header.join(',')}`);
  }

  return rows;
}
