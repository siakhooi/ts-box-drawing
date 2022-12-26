export class BoxStyle {
  HORIZONTAL: string;
  VERTICAL: string;
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
    horizontal: string,
    vertical: string,
    top_left: string,
    top_right: string,
    bottom_left: string,
    bottom_right: string,
    cross: string,
    top_middle: string,
    bottom_middle: string,
    middle_left: string,
    middle_right: string
  ) {
    this.HORIZONTAL = horizontal;
    this.VERTICAL = vertical;
    this.TOP_LEFT = top_left;
    this.TOP_RIGHT = top_right;
    this.BOTTOM_LEFT = bottom_left;
    this.BOTTOM_RIGHT = bottom_right;
    this.CROSS = cross;
    this.TOP_MIDDLE = top_middle;
    this.BOTTOM_MIDDLE = bottom_middle;
    this.MIDDLE_LEFT = middle_left;
    this.MIDDLE_RIGHT = middle_right;
  }
}
