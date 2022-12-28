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
    horizontal_vertical: string[],
    top_left_bottom_right: string[],
    cross: string,
    middles: string[]
  ) {
    this.HORIZONTAL_INNER = horizontal_vertical[0];
    this.HORIZONTAL_OUTER = horizontal_vertical[1];
    this.VERTICAL_INNER = horizontal_vertical[2];
    this.VERTICAL_OUTER = horizontal_vertical[3];
    this.TOP_LEFT = top_left_bottom_right[0];
    this.TOP_RIGHT = top_left_bottom_right[1];
    this.BOTTOM_LEFT = top_left_bottom_right[2];
    this.BOTTOM_RIGHT = top_left_bottom_right[3];
    this.CROSS = cross;
    this.TOP_MIDDLE = middles[0];
    this.BOTTOM_MIDDLE = middles[1];
    this.MIDDLE_LEFT = middles[2];
    this.MIDDLE_RIGHT = middles[3];
  }
}
