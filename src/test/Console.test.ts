import {Console} from '../main/Console';

test('Console.println', () => {
  const f = console.log;
  let allData = '';
  console.log = jest.fn().mockImplementation(text => (allData = text));
  Console.println('Hello World');
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(allData).toMatch('Hello World');
  console.log = f;
});
test('Console.printf', () => {
  let allData = '';
  Console.println = jest.fn().mockImplementation(text => (allData = text));
  Console.printf('%s %s', 'Hello', 'World');
  expect(Console.println).toHaveBeenCalledTimes(1);
  expect(allData).toMatch('Hello World');
});
