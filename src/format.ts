export function formatNanos(nanos: number): string {
  const justNS = Math.round(nanos % 1000);
  const us = nanos / 1000;
  const justUS = Math.round(us % 1000);
  const ms = us / 1000;
  const justMS = Math.round(ms % 1000);
  const sec = ms / 1000;
  const justSec = Math.round(sec % 1000);
  return `${justSec}s${justMS}ms${justUS}us${justNS}ns`;
}
