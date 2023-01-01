import {BoxDrawingBuilder} from './BoxDrawingBuilder';
import {BoxStyle} from './BoxStyle';

import {
  DOUBLE,
  HORIZONTAL_DOUBLE_VERTICAL_THIN,
  HORIZONTAL_THICK_VERTICAL_THIN,
  HORIZONTAL_THIN_VERTICAL_DOUBLE,
  HORIZONTAL_THIN_VERTICAL_THICK,
  INNER_DOUBLE_OUTER_THIN,
  INNER_DOUBLE_OUTER_THIN_CURVE,
  INNER_THICK_OUTER_THIN,
  INNER_THICK_OUTER_THIN_CURVE,
  INNER_THIN_OUTER_DOUBLE,
  INNER_THIN_OUTER_THICK,
  THICK,
  THIN,
  THINCURVE,
} from './BoxStyleConstants';

function drawBox(boxStyle: BoxStyle, data: string | string[][]) {
  new BoxDrawingBuilder().setData(data).setStyle(boxStyle).drawBox();
}
export function drawBoxThin(text: string | string[][]) {
  drawBox(THIN, text);
}
export function drawBoxThick(text: string | string[][]) {
  drawBox(THICK, text);
}
export function drawBoxDouble(text: string | string[][]) {
  drawBox(DOUBLE, text);
}
export function drawBoxThinCurve(text: string | string[][]) {
  drawBox(THINCURVE, text);
}
export function drawBoxHorizontalThinVerticalThick(text: string | string[][]) {
  drawBox(HORIZONTAL_THIN_VERTICAL_THICK, text);
}
export function drawBoxHorizontalThickVerticalThin(text: string | string[][]) {
  drawBox(HORIZONTAL_THICK_VERTICAL_THIN, text);
}
export function drawBoxHorizontalThinVerticalDouble(text: string | string[][]) {
  drawBox(HORIZONTAL_THIN_VERTICAL_DOUBLE, text);
}
export function drawBoxHorizontalDoubleVerticalThin(text: string | string[][]) {
  drawBox(HORIZONTAL_DOUBLE_VERTICAL_THIN, text);
}
export function drawBoxInnerDoubleOuterThin(text: string | string[][]) {
  drawBox(INNER_DOUBLE_OUTER_THIN, text);
}
export function drawBoxInnerThinOuterDouble(text: string | string[][]) {
  drawBox(INNER_THIN_OUTER_DOUBLE, text);
}
export function drawBoxInnerThinOuterThick(text: string | string[][]) {
  drawBox(INNER_THIN_OUTER_THICK, text);
}
export function drawBoxInnerThickOuterThin(text: string | string[][]) {
  drawBox(INNER_THICK_OUTER_THIN, text);
}
export function drawBoxInnerDoubleOuterThinCurve(text: string | string[][]) {
  drawBox(INNER_DOUBLE_OUTER_THIN_CURVE, text);
}
export function drawBoxInnerThickOuterThinCurve(text: string | string[][]) {
  drawBox(INNER_THICK_OUTER_THIN_CURVE, text);
}
