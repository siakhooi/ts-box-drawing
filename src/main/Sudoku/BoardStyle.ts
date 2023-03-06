export class BoardStyle {
  HORIZONTAL_THIN: string;
  HORIZONTAL_THICK: string;
  VERTICAL_THIN: string;
  VERTICAL_THICK: string;

  TOP_LEFT: string;
  TOP_RIGHT: string;
  BOTTOM_LEFT: string;
  BOTTOM_RIGHT: string;

  CROSS_THIN: string;
  CROSS_THICK: string;
  CROSS_HORIZONTAL_THIN_VERTICAL_THICK: string;
  CROSS_HORIZONTAL_THICK_VERTICAL_THIN: string;

  TOP_MIDDLE_THIN: string;
  TOP_MIDDLE_THICK: string;
  BOTTOM_MIDDLE_THIN: string;
  BOTTOM_MIDDLE_THICK: string;

  MIDDLE_LEFT_THIN: string;
  MIDDLE_LEFT_THICK: string;
  MIDDLE_RIGHT_THIN: string;
  MIDDLE_RIGHT_THICK: string;

  constructor(
    horizontal: string[],
    vertical: string[],
    corners: string[],
    cross: string[],
    middles_top_bottom: string[],
    middles_left_right: string[]
  ) {
    this.HORIZONTAL_THIN = horizontal[0];
    this.HORIZONTAL_THICK = horizontal[1];
    this.VERTICAL_THIN = vertical[0];
    this.VERTICAL_THICK = vertical[1];
    this.TOP_LEFT = corners[0];
    this.TOP_RIGHT = corners[1];
    this.BOTTOM_LEFT = corners[2];
    this.BOTTOM_RIGHT = corners[3];
    this.CROSS_THIN = cross[0];
    this.CROSS_THICK = cross[1];
    this.CROSS_HORIZONTAL_THIN_VERTICAL_THICK = cross[2];
    this.CROSS_HORIZONTAL_THICK_VERTICAL_THIN = cross[3];
    this.TOP_MIDDLE_THIN = middles_top_bottom[0];
    this.TOP_MIDDLE_THICK = middles_top_bottom[1];
    this.BOTTOM_MIDDLE_THIN = middles_top_bottom[2];
    this.BOTTOM_MIDDLE_THICK = middles_top_bottom[3];
    this.MIDDLE_LEFT_THIN = middles_left_right[0];
    this.MIDDLE_LEFT_THICK = middles_left_right[1];
    this.MIDDLE_RIGHT_THIN = middles_left_right[2];
    this.MIDDLE_RIGHT_THICK = middles_left_right[3];
  }
}
