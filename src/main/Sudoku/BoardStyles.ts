import {BoardStyle} from './BoardStyle';

const THICK = new BoardStyle(
  ['\u2500\u2500\u2500', '\u2501\u2501\u2501'],
  ['\u2502', '\u2503'],
  ['\u250f', '\u2513', '\u2517', '\u251b'],
  ['\u253c', '\u254b', '\u2542', '\u253f'],
  ['\u252f', '\u2533', '\u2537', '\u253b'],
  ['\u2520', '\u2523', '\u2528', '\u252b']
);
const DOUBLE = new BoardStyle(
  ['\u2500\u2500\u2500', '\u2550\u2550\u2550'],
  ['\u2502', '\u2551'],
  ['\u2554', '\u2557', '\u255a', '\u255d'],
  ['\u253c', '\u256c', '\u256b', '\u256a'],
  ['\u2564', '\u2566', '\u2567', '\u2569'],
  ['\u255f', '\u2560', '\u2562', '\u2563']
);

export const BoardStyles = {
  THICK,
  DOUBLE,
};
