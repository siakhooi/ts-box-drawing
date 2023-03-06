import {Console} from '../../main/Console';
import {Sudoku} from '../../main/index';
import {
  TEST_DATA_BLANK_ARRAY_OUTER,
  SIMPLE_TEST_DATA_BLANK_ARRAY_INNER,
  SIMPLE_TEST_DATA_BLANK_ARRAY_INNER2,
} from './TestData';

test('Blank Array Outer', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  Sudoku.drawBoard(TEST_DATA_BLANK_ARRAY_OUTER);
  expect(allData).toMatchSnapshot();
});
test('Blank Array Inner', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  Sudoku.drawBoard(SIMPLE_TEST_DATA_BLANK_ARRAY_INNER);
  expect(allData).toMatchSnapshot();
});
test('Blank Array Inner 2', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  Sudoku.drawBoard(SIMPLE_TEST_DATA_BLANK_ARRAY_INNER2);
  expect(allData).toMatchSnapshot();
});
