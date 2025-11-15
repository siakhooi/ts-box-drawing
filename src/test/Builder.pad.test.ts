import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {
  ALL_STYLES,
  PAD_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)('Pad[(0,5,5)]', (testStyle: TestStyleUnit) => {
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
        .pad(0, 5, 5)
        .drawBox();
      expect(allData).toMatchSnapshot();
    },
  );
});
