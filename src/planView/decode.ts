import { QueryPlan } from "./model";
import * as pako from "pako";

// decode decodes a QueryPlan from the base64-encoded JSON that
// is emitted from EXPLAIN ANALYZE.
export function decode(compressed: string): QueryPlan {
  // Decode base64 (convert ascii to binary).
  const asStr = atob(compressed.replace(/-/g, "+").replace(/_/g, "/"));
  // Convert binary string to character-number array
  const charData = asStr.split("").map((x) => x.charCodeAt(0));

  // Turn number array into byte-array
  const binData = new Uint8Array(charData);

  // Pako magic
  const data = pako.inflate(binData);

  const strData = new TextDecoder("utf-8").decode(data)

  return JSON.parse(strData);
}
