import {Console} from '../../main/Console';
import {drawSudokuBoardThick} from '../../main/index';
import {TEST_DATA_SIMPLE, TEST_DATA_VARIABLE_LENGTH} from './TestData';

test('Simple', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  drawSudokuBoardThick(TEST_DATA_SIMPLE);
  expect(allData).toMatchSnapshot();
});
test('Variable Length', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  drawSudokuBoardThick(TEST_DATA_VARIABLE_LENGTH);
  expect(allData).toMatchSnapshot();
});
