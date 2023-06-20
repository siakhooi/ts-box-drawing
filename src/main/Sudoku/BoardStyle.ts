export class BoardLine {
  thickLeft: string;
  thickRight: string;
  thickMiddle: string;
  thinMiddle: string;
  value: string;

  constructor(
    thickLeft: string,
    thickRight: string,
    thickMiddle: string,
    thinMiddle: string,
    value: string
  ) {
    this.thickLeft = thickLeft;
    this.thickRight = thickRight;
    this.thickMiddle = thickMiddle;
    this.thinMiddle = thinMiddle;
    this.value = value;
  }
}

export class BoardStyle {
  Top: BoardLine;
  Bottom: BoardLine;
  Thin: BoardLine;
  Thick: BoardLine;
  Value: BoardLine;

  constructor(
    top: BoardLine,
    bottom: BoardLine,
    thin: BoardLine,
    thick: BoardLine,
    value: BoardLine
  ) {
    this.Top = top;
    this.Bottom = bottom;
    this.Thin = thin;
    this.Thick = thick;
    this.Value = value;
  }
}
