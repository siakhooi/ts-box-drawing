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
