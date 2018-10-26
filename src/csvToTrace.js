import _ from "lodash";
import Papa from "papaparse";
import DateTime from 'luxon/src/datetime.js'
import Duration from "luxon/src/duration";

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
    const tree = rows[0];
    let stack = [rows[0]];
    rows.slice(1).forEach(row => {
        let cur = _.last(stack);
        if (row.spanID > cur.spanID) {
            cur.children.push(row);
            stack.push(row);
        } else {
            while (cur.spanID !== row.spanID) {
                stack.pop()
                cur = _.last(stack);
            }
            cur.messages.push(...row.messages);
        }
    });
    return tree;
}



const durationRegex = /(?:(\d*)h)?(?:(\d*)m)?(?:(\d*)s)?(?:(\d*)ms)?(?:(\d*)μs)?(?:(\d*)ns)?/

// returns nanoseconds
function parseDuration(dur) {
    const matches = dur.match(durationRegex);
    const hours = matches[1] ? parseInt(matches[1]) : 0;
    const minutes = 60 * hours + (matches[2] ? parseInt(matches[2]) : 0);
    const seconds = 60 * minutes + (matches[3] ? parseInt(matches[3]) : 0);
    const milliseconds = 1000 * seconds + (matches[4] ? parseInt(matches[4]) : 0);
    const microseconds = 1000 * milliseconds + (matches[5] ? parseInt(matches[5]) : 0);
    const nanoseconds = 1000 * microseconds + (matches[6] ? parseInt(matches[6]) : 0);
    return nanoseconds;
}

function parseRow(columns) {
    if (columns.length !== EXPECTED_HEADING.length) {}
    return {
        spanID: parseInt(columns[0]),
        timestamp: DateTime.fromSQL(columns[2], { zone: 'utc' }),
        duration: parseDuration(columns[3]),
        operation: columns[4],
        location: columns[5],
        tag: columns[6],
        messages: [{
            id: parseInt(columns[1]),
            message: columns[7],
            age: parseDuration(columns[8]),
        }],
        children: [],
    }
}

function compressRows(originalRows) {
    let updatedRows = [originalRows[0]]
    originalRows.slice(1).forEach(row => {
        const last = _.last(updatedRows)
        if (row.spanID === last.spanID) {
            last.messages.push(...row.messages);
        } else {
            updatedRows.push(row);
        }
    })
    return updatedRows;
}

function parseCSV(csvText) {
    const parseRes = Papa.parse(csvText);
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
    const compRows = compressRows(parsedRows);
    const tree = rowsToTree(compRows);
    debugger

    return tree;
}