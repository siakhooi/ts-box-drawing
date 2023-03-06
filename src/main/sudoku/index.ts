import {Console} from '../Console';

const HORIZONTAL_THIN = '\u2500\u2500\u2500';
const HORIZONTAL_THICK = '\u2501\u2501\u2501';
const VERTICAL_THIN = '\u2502';
const VERTICAL_THICK = '\u2503';

const TOP_LEFT = '\u250f';
const TOP_RIGHT = '\u2513';
const BOTTOM_LEFT = '\u2517';
const BOTTOM_RIGHT = '\u251b';

const CROSS_THIN = '\u253c';
const CROSS_THICK = '\u254b';
const CROSS_HORIZONTAL_THIN_VERTICAL_THICK = '\u2542';
const CROSS_HORIZONTAL_THICK_VERTICAL_THIN = '\u253f';

const TOP_MIDDLE_THIN = '\u252f';
const TOP_MIDDLE_THICK = '\u2533';

const BOTTOM_MIDDLE_THIN = '\u2537';
const BOTTOM_MIDDLE_THICK = '\u253b';

const MIDDLE_LEFT_THIN = '\u2520';
const MIDDLE_LEFT_THICK = '\u2523';

const MIDDLE_RIGHT_THIN = '\u2528';
const MIDDLE_RIGHT_THICK = '\u252b';

function drawTopLine() {
  Console.printf(
    '%s'.repeat(19),
    TOP_LEFT,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THICK,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THICK,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_MIDDLE_THIN,
    HORIZONTAL_THICK,
    TOP_RIGHT
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
    '%s'.repeat(19),
    VERTICAL_THICK,
    values[0],
    VERTICAL_THIN,
    values[1],
    VERTICAL_THIN,
    values[2],
    VERTICAL_THICK,
    values[3],
    VERTICAL_THIN,
    values[4],
    VERTICAL_THIN,
    values[5],
    VERTICAL_THICK,
    values[6],
    VERTICAL_THIN,
    values[7],
    VERTICAL_THIN,
    values[8],
    VERTICAL_THICK
  );
}

function drawThinLine() {
  Console.printf(
    '%s'.repeat(19),
    MIDDLE_LEFT_THIN,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    CROSS_HORIZONTAL_THIN_VERTICAL_THICK,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    CROSS_THIN,
    HORIZONTAL_THIN,
    MIDDLE_RIGHT_THIN
  );
}
function drawThickLine() {
  Console.printf(
    '%s'.repeat(19),
    MIDDLE_LEFT_THICK,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    CROSS_THICK,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    CROSS_THICK,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    CROSS_HORIZONTAL_THICK_VERTICAL_THIN,
    HORIZONTAL_THICK,
    MIDDLE_RIGHT_THICK
  );
}
function drawBottomLine() {
  Console.printf(
    '%s'.repeat(19),
    BOTTOM_LEFT,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THICK,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THICK,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_MIDDLE_THIN,
    HORIZONTAL_THICK,
    BOTTOM_RIGHT
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
