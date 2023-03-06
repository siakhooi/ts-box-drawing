import {BoxStyle} from '../main/Box/BoxStyle';
import {
  BoxStyles,
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
  drawBoxVerticalBarPlusMinus,
  drawBoxVerticalBarPlusMinusSlashes,
  drawBoxVerticalBarPlusEquals,
  drawBoxVerticalBarPlusEqualsSlashes,
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
export const ALIGN_TEST_DATA: TestDataUnit[] = [
  {
    title: 'Simple 2x2',
    data: [
      ['Column 1', 'Column 2', 'Column 3A', 'Column 4'],
      ['Left', 'Ctr', 'Ctr', 'Right'],
      ['Left 1', 'Ctr2', 'Ctr3', 'Right 4'],
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
  drawBoxVerticalBarPlusMinus,
  drawBoxVerticalBarPlusMinusSlashes,
  drawBoxVerticalBarPlusEquals,
  drawBoxVerticalBarPlusEqualsSlashes,
];
export type TestStyleUnit = {
  title: string;
  style: BoxStyle;
};

export const ALL_STYLES: TestStyleUnit[] = [
  {title: 'THIN', style: BoxStyles.THIN},
  {title: 'THICK', style: BoxStyles.THICK},
  {title: 'DOUBLE', style: BoxStyles.DOUBLE},
  {title: 'THINCURVE', style: BoxStyles.THINCURVE},
  {
    title: 'HORIZONTAL_THIN_VERTICAL_THICK',
    style: BoxStyles.HORIZONTAL_THIN_VERTICAL_THICK,
  },
  {
    title: 'HORIZONTAL_THICK_VERTICAL_THIN',
    style: BoxStyles.HORIZONTAL_THICK_VERTICAL_THIN,
  },
  {
    title: 'HORIZONTAL_THIN_VERTICAL_DOUBLE',
    style: BoxStyles.HORIZONTAL_THIN_VERTICAL_DOUBLE,
  },
  {
    title: 'HORIZONTAL_DOUBLE_VERTICAL_THIN',
    style: BoxStyles.HORIZONTAL_DOUBLE_VERTICAL_THIN,
  },
  {title: 'INNER_DOUBLE_OUTER_THIN', style: BoxStyles.INNER_DOUBLE_OUTER_THIN},
  {title: 'INNER_THIN_OUTER_DOUBLE', style: BoxStyles.INNER_THIN_OUTER_DOUBLE},
  {title: 'INNER_THIN_OUTER_THICK', style: BoxStyles.INNER_THIN_OUTER_THICK},
  {title: 'INNER_THICK_OUTER_THIN', style: BoxStyles.INNER_THICK_OUTER_THIN},
  {
    title: 'INNER_DOUBLE_OUTER_THIN_CURVE',
    style: BoxStyles.INNER_DOUBLE_OUTER_THIN_CURVE,
  },
  {
    title: 'INNER_THICK_OUTER_THIN_CURVE',
    style: BoxStyles.INNER_THICK_OUTER_THIN_CURVE,
  },
  {
    title: 'VERTICALBAR_PLUS_MINUS',
    style: BoxStyles.VERTICALBAR_PLUS_MINUS,
  },
  {
    title: 'VERTICALBAR_PLUS_MINUS_SLASHES',
    style: BoxStyles.VERTICALBAR_PLUS_MINUS_SLASHES,
  },
  {
    title: 'VERTICALBAR_PLUS_EQUALS',
    style: BoxStyles.VERTICALBAR_PLUS_EQUALS,
  },
  {
    title: 'VERTICALBAR_PLUS_EQUALS_SLASHES',
    style: BoxStyles.VERTICALBAR_PLUS_EQUALS_SLASHES,
  },
];
