import {BoxStyle} from './BoxStyle';

const THIN = new BoxStyle(
  '\u2500',
  '\u2502',
  '\u250c',
  '\u2510',
  '\u2514',
  '\u2518'
);
const THICK = new BoxStyle(
  '\u2501',
  '\u2503',
  '\u250F',
  '\u2513',
  '\u2517',
  '\u251B'
);
const DOUBLE = new BoxStyle(
  '\u2550',
  '\u2551',
  '\u2554',
  '\u2557',
  '\u255A',
  '\u255D'
);
const THINCURVE = new BoxStyle(
  '\u2500',
  '\u2502',
  '\u256D',
  '\u256E',
  '\u2570',
  '\u256F'
);

export {THIN, THICK, DOUBLE, THINCURVE};
