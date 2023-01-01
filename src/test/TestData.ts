import {BoxStyle} from '../main/BoxStyle';
import {
  drawBoxDouble,
  drawBoxHorizontalDoubleVerticalThin,
  drawBoxHorizontalThickVerticalThin,
  drawBoxHorizontalThinVerticalDouble,
  drawBoxHorizontalThinVerticalThick,
  drawBoxInnerDoubleOuterThin,
  drawBoxInnerDoubleOuterThinCurve,
  drawBoxInnerThickOuterThin,
  drawBoxInnerThickOuterThinCurve,
  drawBoxInnerThinOuterDouble,
  drawBoxInnerThinOuterThick,
  drawBoxThick,
  drawBoxThin,
  drawBoxThinCurve,
  THIN,
  THICK,
  DOUBLE,
  THINCURVE,
  HORIZONTAL_THIN_VERTICAL_THICK,
  HORIZONTAL_THICK_VERTICAL_THIN,
  HORIZONTAL_THIN_VERTICAL_DOUBLE,
  HORIZONTAL_DOUBLE_VERTICAL_THIN,
  INNER_DOUBLE_OUTER_THIN,
  INNER_THIN_OUTER_DOUBLE,
  INNER_THIN_OUTER_THICK,
  INNER_THICK_OUTER_THIN,
  INNER_DOUBLE_OUTER_THIN_CURVE,
  INNER_THICK_OUTER_THIN_CURVE,
} from '../main/index';

export const SIMPLE_TEST_DATA = ['A', '', 'Hello World', null];

export type TestDataUnit = {
  title: string;
  data: string[][];
};

export const ARRAY_TEST_DATA: TestDataUnit[] = [
  {title: 'Simple 1X1', data: [['In 1x1 array']]},
  {
    title: 'Simple 2x2',
    data: [
      ['Cell 1-1', 'Cell 2-1'],
      ['Cell 1-2', 'Cell 2-2'],
    ],
  },
  {
    title: 'Variable Row Lengths 1+2',
    data: [['Cell 1-1'], ['Cell 1-2', 'Cell 2-2']],
  },
  {
    title: 'Variable Row Lengths 1+1+3',
    data: [
      ['', 'Cell 2-1 ABC'],
      ['Cell 1-2 Avatar'],
      ['Cell 1-3 Lemmings', 'Cell 2-3 A', 'Cell 3-3 Bata'],
    ],
  },
];
export const PAD_TEST_DATA: TestDataUnit[] = [
  {
    title: 'Simple 2x2',
    data: [
      ['Cell 1-1', 'Cell 2-1'],
      ['Cell 1-2', 'Cell 2-2'],
    ],
  },
];
export const ALL_FUNCTIONS = [
  drawBoxThin,
  drawBoxThick,
  drawBoxDouble,
  drawBoxThinCurve,
  drawBoxHorizontalThinVerticalThick,
  drawBoxHorizontalThickVerticalThin,
  drawBoxHorizontalThinVerticalDouble,
  drawBoxHorizontalDoubleVerticalThin,
  drawBoxInnerDoubleOuterThin,
  drawBoxInnerThinOuterDouble,
  drawBoxInnerThinOuterThick,
  drawBoxInnerThickOuterThin,
  drawBoxInnerDoubleOuterThinCurve,
  drawBoxInnerThickOuterThinCurve,
];
export type TestStyleUnit = {
  title: string;
  style: BoxStyle;
};

export const ALL_STYLES: TestStyleUnit[] = [
  {title: 'THIN', style: THIN},
  {title: 'THICK', style: THICK},
  {title: 'DOUBLE', style: DOUBLE},
  {title: 'THINCURVE', style: THINCURVE},
  {
    title: 'HORIZONTAL_THIN_VERTICAL_THICK',
    style: HORIZONTAL_THIN_VERTICAL_THICK,
  },
  {
    title: 'HORIZONTAL_THICK_VERTICAL_THIN',
    style: HORIZONTAL_THICK_VERTICAL_THIN,
  },
  {
    title: 'HORIZONTAL_THIN_VERTICAL_DOUBLE',
    style: HORIZONTAL_THIN_VERTICAL_DOUBLE,
  },
  {
    title: 'HORIZONTAL_DOUBLE_VERTICAL_THIN',
    style: HORIZONTAL_DOUBLE_VERTICAL_THIN,
  },
  {title: 'INNER_DOUBLE_OUTER_THIN', style: INNER_DOUBLE_OUTER_THIN},
  {title: 'INNER_THIN_OUTER_DOUBLE', style: INNER_THIN_OUTER_DOUBLE},
  {title: 'INNER_THIN_OUTER_THICK', style: INNER_THIN_OUTER_THICK},
  {title: 'INNER_THICK_OUTER_THIN', style: INNER_THICK_OUTER_THIN},
  {
    title: 'INNER_DOUBLE_OUTER_THIN_CURVE',
    style: INNER_DOUBLE_OUTER_THIN_CURVE,
  },
  {title: 'INNER_THICK_OUTER_THIN_CURVE', style: INNER_THICK_OUTER_THIN_CURVE},
];
