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

function rowsToTree(allRows) {
  function recur(rows, idx, id) {
    const message = rows[idx][MESSAGE_COL];
    if (!message.startsWith(SPAN_START)) {
      throw new Error(`expected SPAN START; found ${message}`);
    }

    const spanName = message.slice(SPAN_START.length, message.length - SPAN_END.length);

    const spanIdx = rows[idx][SPAN_IDX_COL];
    const logMessages = [];
    for (let i = idx + 1; i < rows.length; i++) {
      const row = rows[i];
      if (row[SPAN_IDX_COL] === spanIdx) {
        logMessages.push({
          age: row[AGE_COL],
          message: row[MESSAGE_COL],
        })
      }
    }

    return {
      id: 0,
      name: spanName,
      startTS: 0,
      duration: 10,
      props: {},
      children: [],
      logMessages,
    };
  }

  return recur(allRows, 1, 0);
}

function parseCSV(csvText) {
  const parseRes = Papa.parse(csvText);
  console.log(parseRes);

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
