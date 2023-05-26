import {Console} from '../Console';
import {BoardStyle} from './BoardStyle';

const ROW_PRINT_FORMAT = '%s'.repeat(19);

let boardStyle: BoardStyle;

function drawTopLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boardStyle.TOP_LEFT,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.TOP_RIGHT
  );
}
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

function drawThinLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boardStyle.MIDDLE_LEFT_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.CROSS_THIN,
    boardStyle.HORIZONTAL_THIN,
    boardStyle.MIDDLE_RIGHT_THIN
  );
}
function drawThickLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boardStyle.MIDDLE_LEFT_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.MIDDLE_RIGHT_THICK
  );
}
function drawBottomLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boardStyle.BOTTOM_LEFT,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THICK,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_MIDDLE_THIN,
    boardStyle.HORIZONTAL_THICK,
    boardStyle.BOTTOM_RIGHT
  );
}
function updateData(values: string[][]): string[][] {
  const data: string[][] = [];

  for (let i = 0; i < 9; i++) {
    data[i] = [];
    for (let j = 0; j < 9; j++) {
      if (values[i] === undefined) data[i][j] = '   ';
      else if (values[i][j] === undefined) data[i][j] = '   ';
      else if (values[i][j].length === 0) data[i][j] = '   ';
      else if (values[i][j].length === 1) data[i][j] = ' ' + values[i][j] + ' ';
      else if (values[i][j].length > 1)
        data[i][j] = ' ' + values[i][j].substring(0, 1) + ' ';
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
