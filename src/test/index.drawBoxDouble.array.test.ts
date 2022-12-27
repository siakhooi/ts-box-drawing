import {Console} from '../main/Console';
import {drawBoxDouble} from '../main/index';

test('drawBoxDouble.array.single', () => {
  const text = [['In array']];
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));

  drawBoxDouble(text);
  expect(allData).toMatchSnapshot();
});
test('drawBoxDouble.array.2x2', () => {
  const text = [
    ['Cell 1-1', 'Cell 2-1'],
    ['Cell 1-2', 'Cell 2-2'],
  ];
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));

  drawBoxDouble(text);
  expect(allData).toMatchSnapshot();
});
test('drawBoxDouble.array.1+2', () => {
  const text = [['Cell 1-1'], ['Cell 1-2', 'Cell 2-2']];
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));

  drawBoxDouble(text);
  expect(allData).toMatchSnapshot();
});
test('drawBoxDouble.array.2+1+3', () => {
  const text = [
    ['Cell 1-1', 'Cell 2-1 ABC'],
    ['Cell 1-2 Avatar'],
    ['Cell 1-3 Lemmings', 'Cell 2-3 A', 'Cell 3-3 Bata'],
  ];
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));

  drawBoxDouble(text);
  expect(allData).toMatchSnapshot();
});