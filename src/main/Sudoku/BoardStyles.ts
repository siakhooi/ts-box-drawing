import {BoardLine, BoardStyle} from './BoardStyle';

const THICK = new BoardStyle(
  new BoardLine('\u250f', '\u2513', '\u2533', '\u252f', '\u2501\u2501\u2501'),
  new BoardLine('\u2517', '\u251b', '\u253b', '\u2537', '\u2501\u2501\u2501'),
  new BoardLine('\u2520', '\u2528', '\u2542', '\u253c', '\u2500\u2500\u2500'),
  new BoardLine('\u2523', '\u252b', '\u254b', '\u253f', '\u2501\u2501\u2501'),
  new BoardLine('\u2503', '\u2503', '\u2503', '\u2502', ''),
);
const DOUBLE = new BoardStyle(
  new BoardLine('\u2554', '\u2557', '\u2566', '\u2564', '\u2550\u2550\u2550'),
  new BoardLine('\u255a', '\u255d', '\u2569', '\u2567', '\u2550\u2550\u2550'),
  new BoardLine('\u255f', '\u2562', '\u256b', '\u253c', '\u2500\u2500\u2500'),
  new BoardLine('\u2560', '\u2563', '\u256c', '\u256a', '\u2550\u2550\u2550'),
  new BoardLine('\u2551', '\u2551', '\u2551', '\u2502', ''),
);

export const BoardStyles = {
  THICK,
  DOUBLE,
};
