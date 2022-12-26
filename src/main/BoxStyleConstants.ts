import {BoxStyle} from './BoxStyle';

const THIN = new BoxStyle(
  '\u2500',
  '\u2502',
  '\u250c',
  '\u2510',
  '\u2514',
  '\u2518',
  '\u253c',
  '\u252c',
  '\u2534',
  '\u251c',
  '\u2524'
);
const THICK = new BoxStyle(
  '\u2501',
  '\u2503',
  '\u250F',
  '\u2513',
  '\u2517',
  '\u251B',
  '\u254b',
  '\u2533',
  '\u253B',
  '\u2523',
  '\u252B'
);
const DOUBLE = new BoxStyle(
  '\u2550',
  '\u2551',
  '\u2554',
  '\u2557',
  '\u255A',
  '\u255D',
  '\u256c',
  '\u2566',
  '\u2569',
  '\u2560',
  '\u2563'
);
const THINCURVE = new BoxStyle(
  '\u2500',
  '\u2502',
  '\u256D',
  '\u256E',
  '\u2570',
  '\u256F',
  '\u253c',
  '\u252c',
  '\u2534',
  '\u251c',
  '\u2524'
);

export {THIN, THICK, DOUBLE, THINCURVE};
