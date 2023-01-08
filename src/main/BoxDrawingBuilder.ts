import {BoxStyle} from './BoxStyle';
import {THIN} from './BoxStyles';
import {Console} from './Console';

type BoxDataType = null | string | string[][];

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

function convertDataToArray(data: BoxDataType): string[][] {
  if (data === '' || data === null) return [];
  return typeof data === 'string' ? [[data]] : data;
}

export class BoxDrawingBuilder {
  private data: BoxDataType;
  private style: BoxStyle;
  private padLeftData: number[];
  private padRightData: number[];
  private defaultPadLeft = 0;
  private defaultPadRight = 0;

  constructor() {
    this.data = [];
    this.style = THIN;
    this.padLeftData = [];
    this.padRightData = [];
  }

  setData(data: BoxDataType): BoxDrawingBuilder {
    this.data = data;
    return this;
  }
  setStyle(style: BoxStyle): BoxDrawingBuilder {
    this.style = style;
    return this;
  }
  setDefaultPadLeft(number_of_spaces: number): BoxDrawingBuilder {
    this.defaultPadLeft = number_of_spaces;
    return this;
  }
  setDefaultPadRight(number_of_spaces: number): BoxDrawingBuilder {
    this.defaultPadRight = number_of_spaces;
    return this;
  }
  padLeft(column: number, number_of_spaces: number): BoxDrawingBuilder {
    this.padLeftData[column] = number_of_spaces;
    return this;
  }
  padRight(column: number, number_of_spaces: number): BoxDrawingBuilder {
    this.padRightData[column] = number_of_spaces;
    return this;
  }

  private getPadLeft(column: number): number {
    return this.padLeftData[column] === undefined
      ? this.defaultPadLeft
      : this.padLeftData[column];
  }
  private getPadRight(column: number): number {
    return this.padRightData[column] === undefined
      ? this.defaultPadRight
      : this.padRightData[column];
  }
  private getHorizontalLines(
    columnCount: number,
    columnWidths: number[]
  ): string[] {
    let lineTop = '',
      lineMiddle = '',
      lineBottom = '';
    const boxStyle = this.style;

    lineTop = boxStyle.TOP_LEFT;
    lineMiddle = boxStyle.MIDDLE_LEFT;
    lineBottom = boxStyle.BOTTOM_LEFT;

    for (let i = 0; i < columnCount; i++) {
      const padLeft = this.getPadLeft(i);
      const padRight = this.getPadRight(i);
      const columnWidth = columnWidths[i] + padLeft + padRight;
      lineTop += boxStyle.HORIZONTAL_OUTER.repeat(columnWidth);
      lineMiddle += boxStyle.HORIZONTAL_INNER.repeat(columnWidth);
      lineBottom += boxStyle.HORIZONTAL_OUTER.repeat(columnWidth);

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
  private getDataLine(
    columnCount: number,
    columnWidths: number[],
    rowData: string[]
  ): string {
    const boxStyle = this.style;
    let s = boxStyle.VERTICAL_OUTER;
    for (let i = 0; i < columnCount; i++) {
      const padLeft = this.getPadLeft(i);
      const padRight = this.getPadRight(i);
      const cellData = rowData[i] === undefined ? '' : rowData[i];
      s += ' '.repeat(padLeft);
      s += cellData.padEnd(columnWidths[i], ' ');
      s += ' '.repeat(padRight);
      if (i < columnCount - 1) s += boxStyle.VERTICAL_INNER;
    }
    s += boxStyle.VERTICAL_OUTER;

    return s;
  }
  drawBox() {
    const data: string[][] = convertDataToArray(this.data);
    const rowCount = data.length;
    const columnCount = data.reduce((r, n) => Math.max(r, n.length), 0);

    const columnWidths: number[] = getColumnWidths(rowCount, columnCount, data);

    let lineTop = '',
      lineMiddle = '',
      lineBottom = '';
    [lineTop, lineMiddle, lineBottom] = this.getHorizontalLines(
      columnCount,
      columnWidths
    );

    Console.println(lineTop);

    for (let j = 0; j < rowCount; j++) {
      Console.println(this.getDataLine(columnCount, columnWidths, data[j]));
      if (j < rowCount - 1) Console.println(lineMiddle);
    }

    Console.println(lineBottom);
  }
}
