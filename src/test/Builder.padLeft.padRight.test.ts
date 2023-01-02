import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {
  ALL_STYLES,
  PAD_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)(
  'PadLeft(1,2)PadRight(3,4)',
  (testStyle: TestStyleUnit) => {
    test.each(PAD_TEST_DATA)(
      `${testStyle.title} [$title]`,
      (testData: TestDataUnit) => {
        const allData: string[] = [];
        Console.println = jest
          .fn()
          .mockImplementation(text => allData.push(text));
        new BoxDrawingBuilder()
          .setData(testData.data)
          .setStyle(testStyle.style)
          .padLeft(0, 1)
          .padLeft(1, 2)
          .padRight(0, 3)
          .padRight(1, 4)
          .drawBox();
        expect(allData).toMatchSnapshot();
      }
    );
  }
);
