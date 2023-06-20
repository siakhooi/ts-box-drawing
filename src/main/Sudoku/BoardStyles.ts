import {BoardStyle} from './BoardStyle';

const THICK = new BoardStyle(
  {
    thickLeft: '\u250f',
    thickRight: '\u2513',
    thickMiddle: '\u2533',
    thinMiddle: '\u252f',
    value: '\u2501\u2501\u2501',
  },
  {
    thickLeft: '\u2517',
    thickRight: '\u251b',
    thickMiddle: '\u253b',
    thinMiddle: '\u2537',
    value: '\u2501\u2501\u2501',
  },
  {
    thickLeft: '\u2520',
    thickRight: '\u2528',
    thickMiddle: '\u2542',
    thinMiddle: '\u253c',
    value: '\u2500\u2500\u2500',
  },
  {
    thickLeft: '\u2523',
    thickRight: '\u252b',
    thickMiddle: '\u254b',
    thinMiddle: '\u253f',
    value: '\u2501\u2501\u2501',
  },
  {
    thickLeft: '\u2503',
    thickRight: '\u2503',
    thickMiddle: '\u2503',
    thinMiddle: '\u2502',
    value: '',
  }
);
const DOUBLE = new BoardStyle(
  {
    thickLeft: '\u2554',
    thickRight: '\u2557',
    thickMiddle: '\u2566',
    thinMiddle: '\u2564',
    value: '\u2550\u2550\u2550',
  },
  {
    thickLeft: '\u255a',
    thickRight: '\u255d',
    thickMiddle: '\u2569',
    thinMiddle: '\u2567',
    value: '\u2550\u2550\u2550',
  },
  {
    thickLeft: '\u255f',
    thickRight: '\u2562',
    thickMiddle: '\u256b',
    thinMiddle: '\u253c',
    value: '\u2500\u2500\u2500',
  },
  {
    thickLeft: '\u2560',
    thickRight: '\u2563',
    thickMiddle: '\u256c',
    thinMiddle: '\u256a',
    value: '\u2550\u2550\u2550',
  },
  {
    thickLeft: '\u2551',
    thickRight: '\u2551',
    thickMiddle: '\u2551',
    thinMiddle: '\u2502',
    value: '',
  }
);

export const BoardStyles = {
  THICK,
  DOUBLE,
};
