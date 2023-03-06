import {Console} from '../Console';
import {BoardStyles} from './BoardStyles';

const ROW_PRINT_FORMAT = '%s'.repeat(19);

const boxStyle = BoardStyles.THICK;

function drawTopLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boxStyle.TOP_LEFT,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.TOP_RIGHT
  );
}
function drawValueLine(values: string[]) {
  if (values === undefined) values = [];
  for (let i = 0; i < 9; i++) {
    if (values[i] === undefined) values[i] = '   ';
    else if (values[i].length === 0) values[i] = '   ';
    else if (values[i].length === 1) values[i] = ' ' + values[i] + ' ';
    else if (values[i].length > 1)
      values[i] = ' ' + values[i].substring(0, 1) + ' ';
  }
  Console.printf(
    ROW_PRINT_FORMAT,
    boxStyle.VERTICAL_THICK,
    values[0],
    boxStyle.VERTICAL_THIN,
    values[1],
    boxStyle.VERTICAL_THIN,
    values[2],
    boxStyle.VERTICAL_THICK,
    values[3],
    boxStyle.VERTICAL_THIN,
    values[4],
    boxStyle.VERTICAL_THIN,
    values[5],
    boxStyle.VERTICAL_THICK,
    values[6],
    boxStyle.VERTICAL_THIN,
    values[7],
    boxStyle.VERTICAL_THIN,
    values[8],
    boxStyle.VERTICAL_THICK
  );
}

function drawThinLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boxStyle.MIDDLE_LEFT_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.CROSS_THIN,
    boxStyle.HORIZONTAL_THIN,
    boxStyle.MIDDLE_RIGHT_THIN
  );
}
function drawThickLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boxStyle.MIDDLE_LEFT_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.MIDDLE_RIGHT_THICK
  );
}
function drawBottomLine() {
  Console.printf(
    ROW_PRINT_FORMAT,
    boxStyle.BOTTOM_LEFT,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THICK,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_MIDDLE_THIN,
    boxStyle.HORIZONTAL_THICK,
    boxStyle.BOTTOM_RIGHT
  );
}
export function drawBoard(values: string[][]) {
  drawTopLine();

  drawValueLine(values[0]);
  drawThinLine();
  drawValueLine(values[1]);
  drawThinLine();
  drawValueLine(values[2]);

  drawThickLine();

  drawValueLine(values[3]);
  drawThinLine();
  drawValueLine(values[4]);
  drawThinLine();
  drawValueLine(values[5]);

  drawThickLine();

  drawValueLine(values[6]);
  drawThinLine();
  drawValueLine(values[7]);
  drawThinLine();
  drawValueLine(values[8]);

  drawBottomLine();
}
