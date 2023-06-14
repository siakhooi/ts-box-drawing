import {Console} from '../Console';
import {BoardStyle} from './BoardStyle';

const ROW_PRINT_FORMAT = '%s'.repeat(19);

let boardStyle: BoardStyle;

function drawValueLine(values: string[]) {
  Console.printf(
    ROW_PRINT_FORMAT,
    boardStyle.VERTICAL_THICK,
    values[0],
    boardStyle.VERTICAL_THIN,
    values[1],
    boardStyle.VERTICAL_THIN,
    values[2],
    boardStyle.VERTICAL_THICK,
    values[3],
    boardStyle.VERTICAL_THIN,
    values[4],
    boardStyle.VERTICAL_THIN,
    values[5],
    boardStyle.VERTICAL_THICK,
    values[6],
    boardStyle.VERTICAL_THIN,
    values[7],
    boardStyle.VERTICAL_THIN,
    values[8],
    boardStyle.VERTICAL_THICK
  );
}
function drawLine(
  thickLeft: string,
  thickMiddle: string,
  thickRight: string,
  thinMiddle: string,
  horizontal: string
) {
  Console.printf(
    ROW_PRINT_FORMAT,
    thickLeft,
    horizontal,
    thinMiddle,
    horizontal,
    thinMiddle,
    horizontal,
    thickMiddle,
    horizontal,
    thinMiddle,
    horizontal,
    thinMiddle,
    horizontal,
    thickMiddle,
    horizontal,
    thinMiddle,
    horizontal,
    thinMiddle,
    horizontal,
    thickRight
  );
}

function drawTopLine() {
  drawLine(
    boardStyle.TOP_LEFT,
    boardStyle.TOP_MIDDLE_THICK,
    boardStyle.TOP_RIGHT,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK
  );
}
function drawThinLine() {
  drawLine(
    boardStyle.MIDDLE_LEFT_THIN,
    boardStyle.CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    boardStyle.MIDDLE_RIGHT_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN
  );
}
function drawThickLine() {
  drawLine(
    boardStyle.MIDDLE_LEFT_THICK,
    boardStyle.CROSS_THICK,
    boardStyle.MIDDLE_RIGHT_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK
  );
}
function drawBottomLine() {
  drawLine(
    boardStyle.BOTTOM_LEFT,
    boardStyle.BOTTOM_MIDDLE_THICK,
    boardStyle.BOTTOM_RIGHT,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK
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
export function drawBoard(values: string[][], boardStyle1: BoardStyle) {
  boardStyle = boardStyle1;
  const data = updateData(values);

  drawTopLine();

  drawValueLine(data[0]);
  drawThinLine();
  drawValueLine(data[1]);
  drawThinLine();
  drawValueLine(data[2]);

  drawThickLine();

  drawValueLine(data[3]);
  drawThinLine();
  drawValueLine(data[4]);
  drawThinLine();
  drawValueLine(data[5]);

  drawThickLine();

  drawValueLine(data[6]);
  drawThinLine();
  drawValueLine(data[7]);
  drawThinLine();
  drawValueLine(data[8]);

  drawBottomLine();
}
