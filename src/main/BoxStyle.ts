export class BoxStyle {
  HORIZONTAL: string;
  VERTICAL: string;
  UP_LEFT: string;
  UP_RIGHT: string;
  DOWN_LEFT: string;
  DOWN_RIGHT: string;
  constructor(
    horizontal: string,
    vertical: string,
    up_left: string,
    up_right: string,
    down_left: string,
    down_right: string
  ) {
    this.HORIZONTAL = horizontal;
    this.VERTICAL = vertical;
    this.UP_LEFT = up_left;
    this.UP_RIGHT = up_right;
    this.DOWN_LEFT = down_left;
    this.DOWN_RIGHT = down_right;
  }
}
