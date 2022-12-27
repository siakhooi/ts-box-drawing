import {BoxStyle} from './BoxStyle';

const THIN = new BoxStyle(
  ['\u2500', '\u2502'],
  ['\u250c', '\u2510', '\u2514', '\u2518'],
  '\u253c',
  ['\u252c', '\u2534', '\u251c', '\u2524']
);
const THICK = new BoxStyle(
  ['\u2501', '\u2503'],
  ['\u250F', '\u2513', '\u2517', '\u251B'],
  '\u254b',
  ['\u2533', '\u253B', '\u2523', '\u252B']
);
const DOUBLE = new BoxStyle(
  ['\u2550', '\u2551'],
  ['\u2554', '\u2557', '\u255A', '\u255D'],
  '\u256c',
  ['\u2566', '\u2569', '\u2560', '\u2563']
);
const THINCURVE = new BoxStyle(
  ['\u2500', '\u2502'],
  ['\u256D', '\u256E', '\u2570', '\u256F'],
  '\u253c',
  ['\u252c', '\u2534', '\u251c', '\u2524']
);
const HORIZONTAL_THIN_VERTICAL_THICK = new BoxStyle(
  ['\u2500', '\u2503'],
  ['\u250e', '\u2512', '\u2516', '\u251a'],
  '\u2542',
  ['\u2530', '\u2538', '\u2520', '\u2528']
);
const HORIZONTAL_THICK_VERTICAL_THIN = new BoxStyle(
  ['\u2501', '\u2502'],
  ['\u250d', '\u2511', '\u2515', '\u2519'],
  '\u253f',
  ['\u252f', '\u2537', '\u251d', '\u2525']
);
const HORIZONTAL_THIN_VERTICAL_DOUBLE = new BoxStyle(
  ['\u2500', '\u2551'],
  ['\u2553', '\u2556', '\u2559', '\u255c'],
  '\u256b',
  ['\u2565', '\u2568', '\u255f', '\u2562']
);
const HORIZONTAL_DOUBLE_VERTICAL_THIN = new BoxStyle(
  ['\u2550', '\u2502'],
  ['\u2552', '\u2555', '\u2558', '\u255b'],
  '\u256a',
  ['\u2564', '\u2567', '\u255e', '\u2561']
);

export {
  THIN,
  THICK,
  DOUBLE,
  THINCURVE,
  HORIZONTAL_THIN_VERTICAL_THICK,
  HORIZONTAL_THICK_VERTICAL_THIN,
  HORIZONTAL_THIN_VERTICAL_DOUBLE,
  HORIZONTAL_DOUBLE_VERTICAL_THIN,
};
