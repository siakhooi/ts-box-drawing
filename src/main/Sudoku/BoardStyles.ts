import {BoardStyle} from './BoardStyle';

const THICK = new BoardStyle(
  ['\u2500\u2500\u2500', '\u2501\u2501\u2501'],
  ['\u2502', '\u2503'],
  ['\u250f', '\u2513', '\u2517', '\u251b'],
  ['\u253c', '\u254b', '\u2542', '\u253f'],
  ['\u252f', '\u2533', '\u2537', '\u253b'],
  ['\u2520', '\u2523', '\u2528', '\u252b']
);

export const BoardStyles = {
  THICK,
};
