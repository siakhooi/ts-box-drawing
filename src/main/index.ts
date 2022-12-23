import {Console} from './Console';

const HORIZONTAL = '\u2500';
const VERTICAL = '\u2502';
const UP_LEFT = '\u250c';
const UP_RIGHT = '\u2510';
const DOWN_LEFT = '\u2514';
const DOWN_RIGHT = '\u2518';

export function drawBoxThin(text: string) {
  const w = text.length;
  Console.println('%s%s%s', UP_LEFT, HORIZONTAL.repeat(w), UP_RIGHT);
  Console.println('%s%s%s', VERTICAL, text, VERTICAL);
  Console.println('%s%s%s', DOWN_LEFT, HORIZONTAL.repeat(w), DOWN_RIGHT);
}
