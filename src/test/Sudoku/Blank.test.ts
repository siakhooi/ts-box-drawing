import {Console} from '../../main/Console';
import {
  TEST_DATA_BLANK_ARRAY_OUTER,
  SIMPLE_TEST_DATA_BLANK_ARRAY_INNER,
  SIMPLE_TEST_DATA_BLANK_ARRAY_INNER2,
  ALL_FUNCTIONS,
} from './TestData';

describe.each(ALL_FUNCTIONS)('Array', (drawBoxFunction: Function) => {
  test('Blank Array Outer', () => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));
    drawBoxFunction(TEST_DATA_BLANK_ARRAY_OUTER);
    expect(allData).toMatchSnapshot();
  });
  test('Blank Array Inner', () => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));
    drawBoxFunction(SIMPLE_TEST_DATA_BLANK_ARRAY_INNER);
    expect(allData).toMatchSnapshot();
  });
  test('Blank Array Inner 2', () => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));
    drawBoxFunction(SIMPLE_TEST_DATA_BLANK_ARRAY_INNER2);
    expect(allData).toMatchSnapshot();
  });
});
