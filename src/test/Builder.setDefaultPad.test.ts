import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {
  ALL_STYLES,
  PAD_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)(
  'PadLeftRight[Default(2),(1,4)]',
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
          .setDefaultPad(2, 2)
          .padLeft(1, 4)
          .padRight(1, 4)
          .drawBox();
        expect(allData).toMatchSnapshot();
      }
    );
  }
);
