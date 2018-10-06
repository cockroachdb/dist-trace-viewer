import Papa from "papaparse";

export function parseTrace(csvText) {
  const parsedCSV = parseCSV(csvText);
  return rowsToTree(parsedCSV)
}

const SPAN_START = "=== SPAN START: ";
const SPAN_END = " ===";

function rowsToTree(allRows) {
  function recur(rows, idx, id) {
    const message = rows[0][2];
    if (!message.startsWith(SPAN_START)) {
      throw new Error(`expected SPAN START; found ${message}`);
    }

    const spanName = message.slice(SPAN_START.length, message.length - SPAN_END.length);

    return {
      id: 0,
      name: spanName,
      startTS: 0,
      duration: 10,
      props: {},
      children: [],
    };
  }

  return recur(allRows, 0, 0);
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

  // throw out heading
  if (parseRes.data[0][0] === "timestamp") {
    return parseRes.data.slice(1);
  }

  return parseRes.data;
}
