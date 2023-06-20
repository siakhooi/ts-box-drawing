import {Console} from '../Console';
import {Line, BoardStyle} from './BoardStyle';

const ROW_PRINT_FORMAT = '%s'.repeat(19);

function drawValueLine(line: Line, values: string[]) {
  Console.printf(
    ROW_PRINT_FORMAT,
    line.thickLeft,
    values[0],
    line.thinMiddle,
    values[1],
    line.thinMiddle,
    values[2],
    line.thickMiddle,
    values[3],
    line.thinMiddle,
    values[4],
    line.thinMiddle,
    values[5],
    line.thickMiddle,
    values[6],
    line.thinMiddle,
    values[7],
    line.thinMiddle,
    values[8],
    line.thickRight
  );
}
function drawLine(line: Line) {
  Console.printf(
    ROW_PRINT_FORMAT,
    line.thickLeft,
    line.value,
    line.thinMiddle,
    line.value,
    line.thinMiddle,
    line.value,
    line.thickMiddle,
    line.value,
    line.thinMiddle,
    line.value,
    line.thinMiddle,
    line.value,
    line.thickMiddle,
    line.value,
    line.thinMiddle,
    line.value,
    line.thinMiddle,
    line.value,
    line.thickRight
  );
}

function isNoData(values: string[][], i: number, j: number): boolean {
  return (
    values[i] === undefined ||
    values[i][j] === undefined ||
    values[i][j].length === 0
  );
}
function calcCell(values: string[][], row: number, col: number): string {
  return isNoData(values, row, col)
    ? '   '
    : ' ' + values[row][col].substring(0, 1) + ' ';
}
function updateData(values: string[][]): string[][] {
  const data: string[][] = [];

  for (let i = 0; i < 9; i++) {
    data[i] = [];
    for (let j = 0; j < 9; j++) {
      data[i][j] = calcCell(values, i, j);
    }
  }
  return data;
}
export function drawBoard(values: string[][], boardStyle: BoardStyle) {
  const data = updateData(values);

  drawLine(boardStyle.Top);

  drawValueLine(boardStyle.Value, data[0]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[1]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[2]);

  drawLine(boardStyle.Thick);

  drawValueLine(boardStyle.Value, data[3]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[4]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[5]);

  drawLine(boardStyle.Thick);

  drawValueLine(boardStyle.Value, data[6]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[7]);
  drawLine(boardStyle.Thin);
  drawValueLine(boardStyle.Value, data[8]);

  drawLine(boardStyle.Bottom);
}
