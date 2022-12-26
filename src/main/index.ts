import {BoxStyle} from './BoxStyle';
import {Console} from './Console';
import {THIN, THICK, DOUBLE, THINCURVE} from './BoxStyleConstants';

function getHorizontalLines(
  boxStyle: BoxStyle,
  columnCount: number,
  columnWidths: number[]
): string[] {
  let lineTop = '',
    lineMiddle = '',
    lineBottom = '';

  lineTop = boxStyle.TOP_LEFT;
  lineMiddle = boxStyle.MIDDLE_LEFT;
  lineBottom = boxStyle.BOTTOM_LEFT;

  for (let i = 0; i < columnCount; i++) {
    const s = boxStyle.HORIZONTAL.repeat(columnWidths[i]);
    lineTop += s;
    lineMiddle += s;
    lineBottom += s;

    if (i < columnCount - 1) {
      lineTop += boxStyle.TOP_MIDDLE;
      lineMiddle += boxStyle.CROSS;
      lineBottom += boxStyle.BOTTOM_MIDDLE;
    }
  }
  lineTop += boxStyle.TOP_RIGHT;
  lineMiddle += boxStyle.MIDDLE_RIGHT;
  lineBottom += boxStyle.BOTTOM_RIGHT;

  return [lineTop, lineMiddle, lineBottom];
}
function drawBox(boxStyle: BoxStyle, text: string | string[][]) {
  const data: string[][] = typeof text === 'string' ? [[text]] : text;
  const rowCount = data.length;
  const columnCount = data.reduce((r, n) => Math.max(r, n.length), 0);
  const columnWidths: number[] = [];
  for (let i = 0; i < columnCount; i++) {
    columnWidths[i] = 0;
    for (let j = 0; j < rowCount; j++) {
      if (data[j][i] !== undefined) {
        columnWidths[i] = Math.max(columnWidths[i], data[j][i].length);
      }
    }
  }
  let lineTop = '',
    lineMiddle = '',
    lineBottom = '';
  [lineTop, lineMiddle, lineBottom] = getHorizontalLines(
    boxStyle,
    columnCount,
    columnWidths
  );

  Console.println(lineTop);

  for (let j = 0; j < rowCount; j++) {
    let s = boxStyle.VERTICAL;
    for (let i = 0; i < columnCount; i++) {
      const cellData = data[j][i] === undefined ? '' : data[j][i];
      s += cellData.padEnd(columnWidths[i], ' ');
      if (i < columnCount - 1) s += boxStyle.VERTICAL;
    }
    s += boxStyle.VERTICAL;
    Console.println(s);
    if (j < rowCount - 1) Console.println(lineMiddle);
  }

  Console.println(lineBottom);
}
export function drawBoxThin(text: string | string[][]) {
  drawBox(THIN, text);
}
export function drawBoxThick(text: string | string[][]) {
  drawBox(THICK, text);
}
export function drawBoxDouble(text: string | string[][]) {
  drawBox(DOUBLE, text);
}
export function drawBoxThinCurve(text: string | string[][]) {
  drawBox(THINCURVE, text);
}
