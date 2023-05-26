import {Console} from '../../main/Console';
import {
  TEST_DATA_SIMPLE,
  TEST_DATA_VARIABLE_LENGTH,
  ALL_FUNCTIONS,
} from './TestData';

describe.each(ALL_FUNCTIONS)('Array', (drawBoxFunction: Function) => {
  test('Simple', () => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));
    drawBoxFunction(TEST_DATA_SIMPLE);
    expect(allData).toMatchSnapshot();
  });
  test('Variable Length', () => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));
    drawBoxFunction(TEST_DATA_VARIABLE_LENGTH);
    expect(allData).toMatchSnapshot();
  });
});
