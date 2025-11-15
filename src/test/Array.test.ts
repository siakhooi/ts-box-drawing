import {Console} from '../main/Console';
import {ALL_FUNCTIONS, ARRAY_TEST_DATA, TestDataUnit} from './TestData';

describe.each(ALL_FUNCTIONS)('Array', (drawBoxFunction: Function) => {
  test.each(ARRAY_TEST_DATA)(
    `${drawBoxFunction.name} [$title]`,
    (testData: TestDataUnit) => {
      const allData: string[] = [];
      Console.println = jest
        .fn()
        .mockImplementation(text => allData.push(text));

      drawBoxFunction(testData.data);
      expect(allData).toMatchSnapshot();
    },
  );
});
