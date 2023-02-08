import {BoxDrawingBuilder} from './BoxDrawingBuilder';
import {BoxStyle} from './BoxStyle';
import {BoxStyles} from './BoxStyles';

export {BoxDrawingBuilder} from './BoxDrawingBuilder';
export {BoxStyles} from './BoxStyles';

export {HorizontalAlignmentEnum} from './HorizontalAlignmentEnum';

function drawBox(boxStyle: BoxStyle, data: string | string[][]) {
  new BoxDrawingBuilder().setData(data).setStyle(boxStyle).drawBox();
}
export function drawBoxThin(text: string | string[][]) {
  drawBox(BoxStyles.THIN, text);
}
export function drawBoxThick(text: string | string[][]) {
  drawBox(BoxStyles.THICK, text);
}
export function drawBoxDouble(text: string | string[][]) {
  drawBox(BoxStyles.DOUBLE, text);
}
export function drawBoxThinCurve(text: string | string[][]) {
  drawBox(BoxStyles.THINCURVE, text);
}
export function drawBoxHorizontalThinVerticalThick(text: string | string[][]) {
  drawBox(BoxStyles.HORIZONTAL_THIN_VERTICAL_THICK, text);
}
export function drawBoxHorizontalThickVerticalThin(text: string | string[][]) {
  drawBox(BoxStyles.HORIZONTAL_THICK_VERTICAL_THIN, text);
}
export function drawBoxHorizontalThinVerticalDouble(text: string | string[][]) {
  drawBox(BoxStyles.HORIZONTAL_THIN_VERTICAL_DOUBLE, text);
}
export function drawBoxHorizontalDoubleVerticalThin(text: string | string[][]) {
  drawBox(BoxStyles.HORIZONTAL_DOUBLE_VERTICAL_THIN, text);
}
export function drawBoxInnerDoubleOuterThin(text: string | string[][]) {
  drawBox(BoxStyles.INNER_DOUBLE_OUTER_THIN, text);
}
export function drawBoxInnerThinOuterDouble(text: string | string[][]) {
  drawBox(BoxStyles.INNER_THIN_OUTER_DOUBLE, text);
}
export function drawBoxInnerThinOuterThick(text: string | string[][]) {
  drawBox(BoxStyles.INNER_THIN_OUTER_THICK, text);
}
export function drawBoxInnerThickOuterThin(text: string | string[][]) {
  drawBox(BoxStyles.INNER_THICK_OUTER_THIN, text);
}
export function drawBoxInnerDoubleOuterThinCurve(text: string | string[][]) {
  drawBox(BoxStyles.INNER_DOUBLE_OUTER_THIN_CURVE, text);
}
export function drawBoxInnerThickOuterThinCurve(text: string | string[][]) {
  drawBox(BoxStyles.INNER_THICK_OUTER_THIN_CURVE, text);
}
export function drawBoxVerticalBarPlusMinus(text: string | string[][]) {
  drawBox(BoxStyles.VERTICALBAR_PLUS_MINUS, text);
}
export function drawBoxVerticalBarPlusMinusSlashes(text: string | string[][]) {
  drawBox(BoxStyles.VERTICALBAR_PLUS_MINUS_SLASHES, text);
}
