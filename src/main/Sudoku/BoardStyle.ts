export type Line = {
  thickLeft: string;
  thickMiddle: string;
  thickRight: string;
  thinMiddle: string;
  value: string;
};

export class BoardStyle {
  Top: Line;
  Bottom: Line;
  Thin: Line;
  Thick: Line;
  Value: Line;

  constructor(top: Line, bottom: Line, thin: Line, thick: Line, value: Line) {
    this.Top = top;
    this.Bottom = bottom;
    this.Thin = thin;
    this.Thick = thick;
    this.Value = value;
  }
}
