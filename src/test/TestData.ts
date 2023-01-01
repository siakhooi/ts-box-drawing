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
export const ALL_STYLES = [
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
];
