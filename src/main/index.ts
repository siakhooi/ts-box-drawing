import {BoxStyle} from './BoxStyle';
import {Console} from './Console';
import {
  THIN,
  THICK,
  DOUBLE,
  THINCURVE,
  HORIZONTAL_THIN_VERTICAL_THICK,
  HORIZONTAL_THICK_VERTICAL_THIN,
  HORIZONTAL_THIN_VERTICAL_DOUBLE,
  HORIZONTAL_DOUBLE_VERTICAL_THIN,
  INNER_DOUBLE_OUTER_THIN,
  INNER_THIN_OUTER_DOUBLE,
  INNER_THIN_OUTER_THICK,
  INNER_THICK_OUTER_THIN,
  INNER_DOUBLE_OUTER_THIN_CURVE,
  INNER_THICK_OUTER_THIN_CURVE,
} from './BoxStyleConstants';

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
    lineTop += boxStyle.HORIZONTAL_OUTER.repeat(columnWidths[i]);
    lineMiddle += boxStyle.HORIZONTAL_INNER.repeat(columnWidths[i]);
    lineBottom += boxStyle.HORIZONTAL_OUTER.repeat(columnWidths[i]);

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
function getColumnWidths(
  rowCount: number,
  columnCount: number,
  data: string[][]
): number[] {
  const columnWidths: number[] = [];
  for (let i = 0; i < columnCount; i++) {
    columnWidths[i] = 0;
    for (let j = 0; j < rowCount; j++) {
      if (data[j][i] !== undefined) {
        columnWidths[i] = Math.max(columnWidths[i], data[j][i].length);
      }
    }
  }
  return columnWidths;
}
function getDataLine(
  boxStyle: BoxStyle,
  columnCount: number,
  columnWidths: number[],
  rowData: string[]
): string {
  let s = boxStyle.VERTICAL_OUTER;
  for (let i = 0; i < columnCount; i++) {
    const cellData = rowData[i] === undefined ? '' : rowData[i];
    s += cellData.padEnd(columnWidths[i], ' ');
    if (i < columnCount - 1) s += boxStyle.VERTICAL_INNER;
  }
  s += boxStyle.VERTICAL_OUTER;

  return s;
}
function convertDataToArray(data: string | string[][]): string[][] {
  if (data === '' || data === null) return [];
  return typeof data === 'string' ? [[data]] : data;
}
function drawBox(boxStyle: BoxStyle, text: string | string[][]) {
  const data: string[][] = convertDataToArray(text);
  const rowCount = data.length;
  const columnCount = data.reduce((r, n) => Math.max(r, n.length), 0);

  const columnWidths: number[] = getColumnWidths(rowCount, columnCount, data);

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
    Console.println(getDataLine(boxStyle, columnCount, columnWidths, data[j]));
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
export function drawBoxHorizontalThinVerticalThick(text: string | string[][]) {
  drawBox(HORIZONTAL_THIN_VERTICAL_THICK, text);
}
export function drawBoxHorizontalThickVerticalThin(text: string | string[][]) {
  drawBox(HORIZONTAL_THICK_VERTICAL_THIN, text);
}
export function drawBoxHorizontalThinVerticalDouble(text: string | string[][]) {
  drawBox(HORIZONTAL_THIN_VERTICAL_DOUBLE, text);
}
export function drawBoxHorizontalDoubleVerticalThin(text: string | string[][]) {
  drawBox(HORIZONTAL_DOUBLE_VERTICAL_THIN, text);
}
export function drawBoxInnerDoubleOuterThin(text: string | string[][]) {
  drawBox(INNER_DOUBLE_OUTER_THIN, text);
}
export function drawBoxInnerThinOuterDouble(text: string | string[][]) {
  drawBox(INNER_THIN_OUTER_DOUBLE, text);
}
export function drawBoxInnerThinOuterThick(text: string | string[][]) {
  drawBox(INNER_THIN_OUTER_THICK, text);
}
export function drawBoxInnerThickOuterThin(text: string | string[][]) {
  drawBox(INNER_THICK_OUTER_THIN, text);
}
export function drawBoxInnerDoubleOuterThinCurve(text: string | string[][]) {
  drawBox(INNER_DOUBLE_OUTER_THIN_CURVE, text);
}
export function drawBoxInnerThickOuterThinCurve(text: string | string[][]) {
  drawBox(INNER_THICK_OUTER_THIN_CURVE, text);
}
