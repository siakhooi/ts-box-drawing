import {BoxStyle} from './BoxStyle';
import {THIN} from './BoxStyles';
import {Console} from './Console';

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
function convertDataToArray(data: null | string | string[][]): string[][] {
  if (data === '' || data === null) return [];
  return typeof data === 'string' ? [[data]] : data;
}

export class BoxDrawingBuilder {
  private data: null | string | string[][];
  private style: BoxStyle;
  constructor() {
    this.data = [];
    this.style = THIN;
  }

  setData(data: null | string | string[][]): BoxDrawingBuilder {
    this.data = data;
    return this;
  }
  setStyle(style: BoxStyle): BoxDrawingBuilder {
    this.style = style;
    return this;
  }
  drawBox() {
    const data: string[][] = convertDataToArray(this.data);
    const rowCount = data.length;
    const columnCount = data.reduce((r, n) => Math.max(r, n.length), 0);

    const columnWidths: number[] = getColumnWidths(rowCount, columnCount, data);

    let lineTop = '',
      lineMiddle = '',
      lineBottom = '';
    [lineTop, lineMiddle, lineBottom] = getHorizontalLines(
      this.style,
      columnCount,
      columnWidths
    );

    Console.println(lineTop);

    for (let j = 0; j < rowCount; j++) {
      Console.println(
        getDataLine(this.style, columnCount, columnWidths, data[j])
      );
      if (j < rowCount - 1) Console.println(lineMiddle);
    }

    Console.println(lineBottom);
  }
}
