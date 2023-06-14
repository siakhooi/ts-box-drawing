import {BoxStyle} from './Box/BoxStyle';
import {BoxStyles} from './Box/BoxStyles';
import {Console} from './Console';
import {HorizontalAlignment} from './HorizontalAlignment';
import {HorizontalAlignmentEnum} from './HorizontalAlignmentEnum';
import {Padding} from './Padding';

type BoxDataType = null | string | string[][];

function calcColumnWidths(currentColumnWidth: number, newData: string): number {
  return newData === undefined
    ? currentColumnWidth
    : Math.max(currentColumnWidth, newData.length);
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
      columnWidths[i] = calcColumnWidths(columnWidths[i], data[j][i]);
    }
  }
  return columnWidths;
}

function convertDataToArray(data: BoxDataType): string[][] {
  if (data === '' || data === null) return [];
  return typeof data === 'string' ? [[data]] : data;
}

export class BoxDrawingBuilder {
  private data: BoxDataType = [];
  private style = BoxStyles.THIN;

  private paddingLeft = new Padding();
  private paddingRight = new Padding();
  private horizontalAlignment = new HorizontalAlignment();

  setData(data: BoxDataType): this {
    this.data = data;
    return this;
  }
  setStyle(style: BoxStyle): this {
    this.style = style;
    return this;
  }
  setDefaultPadLeft(number_of_spaces: number): this {
    this.paddingLeft.setDefault(number_of_spaces);
    return this;
  }
  setDefaultPadRight(number_of_spaces: number): this {
    this.paddingRight.setDefault(number_of_spaces);
    return this;
  }
  setDefaultPad(
    number_of_spaces_on_left: number,
    number_of_spaces_on_right: number
  ): this {
    this.setDefaultPadLeft(number_of_spaces_on_left);
    this.setDefaultPadRight(number_of_spaces_on_right);
    return this;
  }
  padLeftAll(numbers_of_spaces: number[]): this {
    this.paddingLeft.padAll(numbers_of_spaces);
    return this;
  }
  padRightAll(numbers_of_spaces: number[]): this {
    this.paddingRight.padAll(numbers_of_spaces);
    return this;
  }
  padLeft(column: number, number_of_spaces: number): this {
    this.paddingLeft.setPadding(column, number_of_spaces);
    return this;
  }
  padRight(column: number, number_of_spaces: number): this {
    this.paddingRight.setPadding(column, number_of_spaces);
    return this;
  }
  pad(
    column: number,
    number_of_spaces_on_left: number,
    number_of_spaces_on_right: number
  ): this {
    this.padLeft(column, number_of_spaces_on_left);
    this.padRight(column, number_of_spaces_on_right);
    return this;
  }
  setDefaultAlignment(alignment: HorizontalAlignmentEnum): this {
    this.horizontalAlignment.setDefaultAlignment(alignment);
    return this;
  }
  align(column: number, alignment: HorizontalAlignmentEnum): this {
    this.horizontalAlignment.setAlign(column, alignment);
    return this;
  }
  alignLeft(columns: number[]): this {
    this.horizontalAlignment.alignAll(HorizontalAlignmentEnum.LEFT, columns);
    return this;
  }
  alignRight(columns: number[]): this {
    this.horizontalAlignment.alignAll(HorizontalAlignmentEnum.RIGHT, columns);
    return this;
  }
  alignCenter(columns: number[]): this {
    this.horizontalAlignment.alignAll(HorizontalAlignmentEnum.CENTER, columns);
    return this;
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
      const padLeft = this.paddingLeft.getPad(i);
      const padRight = this.paddingRight.getPad(i);
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
      const padLeft = this.paddingLeft.getPad(i);
      const padRight = this.paddingRight.getPad(i);
      const cellData = rowData[i] ?? '';
      s += ' '.repeat(padLeft);
      s += this.horizontalAlignment.getLine(i, cellData, columnWidths[i]);
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
