import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {
  ALL_STYLES_WITH_NAME,
  PAD_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES_WITH_NAME)('PadLeft', (testStyle: TestStyleUnit) => {
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
        .padLeft(0, 5)
        .padLeft(1, 2)
        .drawBox();
      expect(allData).toMatchSnapshot();
    }
  );
});
