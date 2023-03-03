import {Console} from '../../main/Console';
import {Sudoku} from '../../main/index';

test('Simple', () => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));
  Sudoku.drawBoard();
  expect(allData).toMatchSnapshot();
});
