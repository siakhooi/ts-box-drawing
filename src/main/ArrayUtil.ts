export function isNoData(values: string[][], i: number, j: number): boolean {
  const cell = values[i]?.[j];
  return cell === undefined || cell === null || cell.length === 0;
}
