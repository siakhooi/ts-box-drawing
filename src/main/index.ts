import {BoxStyle} from './BoxStyle';
import {Console} from './Console';
import {THIN, THICK} from './BoxStyleConstants';

function drawBox(boxStyle: BoxStyle, text: string) {
  const w = text.length;
  Console.printf(
    '%s%s%s',
    boxStyle.UP_LEFT,
    boxStyle.HORIZONTAL.repeat(w),
    boxStyle.UP_RIGHT
  );
  Console.printf('%s%s%s', boxStyle.VERTICAL, text, boxStyle.VERTICAL);
  Console.printf(
    '%s%s%s',
    boxStyle.DOWN_LEFT,
    boxStyle.HORIZONTAL.repeat(w),
    boxStyle.DOWN_RIGHT
  );
}
export function drawBoxThin(text: string) {
  drawBox(THIN, text);
}
export function drawBoxThick(text: string) {
  drawBox(THICK, text);
}
