import {BoxStyle} from './BoxStyle';
import {Console} from './Console';
import {THIN, THICK, DOUBLE, THINCURVE} from './BoxStyleConstants';

function drawBox(boxStyle: BoxStyle, text: string) {
  const w = text.length;
  Console.printf(
    '%s%s%s',
    boxStyle.TOP_LEFT,
    boxStyle.HORIZONTAL.repeat(w),
    boxStyle.TOP_RIGHT
  );
  Console.printf('%s%s%s', boxStyle.VERTICAL, text, boxStyle.VERTICAL);
  Console.printf(
    '%s%s%s',
    boxStyle.BOTTOM_LEFT,
    boxStyle.HORIZONTAL.repeat(w),
    boxStyle.BOTTOM_RIGHT
  );
}
export function drawBoxThin(text: string) {
  drawBox(THIN, text);
}
export function drawBoxThick(text: string) {
  drawBox(THICK, text);
}
export function drawBoxDouble(text: string) {
  drawBox(DOUBLE, text);
}
export function drawBoxThinCurve(text: string) {
  drawBox(THINCURVE, text);
}
