import {HorizontalAlignmentEnum} from './HorizontalAlignmentEnum';

export class HorizontalAlignment {
  private alignmentByColumn: HorizontalAlignmentEnum[] = [];
  private defaultAlignment = HorizontalAlignmentEnum.LEFT;

  getLine(column: number, cellData: string, columnWidth: number) {
    const left = (columnWidth - cellData.length) / 2;

    switch (this.getAlignment(column)) {
      case HorizontalAlignmentEnum.LEFT:
        return cellData.padEnd(columnWidth, ' ');
      case HorizontalAlignmentEnum.RIGHT:
        return cellData.padStart(columnWidth, ' ');
      case HorizontalAlignmentEnum.CENTER:
        return (' '.repeat(left) + cellData).padEnd(columnWidth, ' ');
    }
  }

  setAlign(column: number, alignment: HorizontalAlignmentEnum) {
    this.alignmentByColumn[column] = alignment;
  }
  private getAlignment(column: number): HorizontalAlignmentEnum {
    return this.alignmentByColumn[column] === undefined
      ? this.defaultAlignment
      : this.alignmentByColumn[column];
  }
}
