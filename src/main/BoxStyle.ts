export class BoxStyle {
  HORIZONTAL_INNER: string;
  HORIZONTAL_OUTER: string;
  VERTICAL_INNER: string;
  VERTICAL_OUTER: string;
  TOP_LEFT: string;
  TOP_RIGHT: string;
  BOTTOM_LEFT: string;
  BOTTOM_RIGHT: string;
  CROSS: string;
  TOP_MIDDLE: string;
  BOTTOM_MIDDLE: string;
  MIDDLE_LEFT: string;
  MIDDLE_RIGHT: string;

  constructor(
    horizontal: string[],
    vertical: string[],
    corners: string[],
    cross: string,
    middles: string[]
  ) {
    this.HORIZONTAL_INNER = horizontal[0];
    this.HORIZONTAL_OUTER = horizontal[1];
    this.VERTICAL_INNER = vertical[0];
    this.VERTICAL_OUTER = vertical[1];
    this.TOP_LEFT = corners[0];
    this.TOP_RIGHT = corners[1];
    this.BOTTOM_LEFT = corners[2];
    this.BOTTOM_RIGHT = corners[3];
    this.CROSS = cross;
    this.TOP_MIDDLE = middles[0];
    this.BOTTOM_MIDDLE = middles[1];
    this.MIDDLE_LEFT = middles[2];
    this.MIDDLE_RIGHT = middles[3];
  }
}
