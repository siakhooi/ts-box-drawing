import {Console} from '../main/Console';
import {SIMPLE_TEST_DATA, ALL_FUNCTIONS} from './TestData';

describe.each(ALL_FUNCTIONS)('Simple', (drawBoxFunction: Function) => {
  test.each(SIMPLE_TEST_DATA)(
    `${drawBoxFunction.name} [%s]`,
    (text: string | null) => {
      const allData: string[] = [];
      Console.println = jest
        .fn()
        .mockImplementation(text => allData.push(text));

      drawBoxFunction(text);
      expect(allData).toMatchSnapshot();
    },
  );
});
