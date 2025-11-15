import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {
  ALIGN_TEST_DATA,
  ALL_STYLES,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)('AlignCenter([0,1])', (testStyle: TestStyleUnit) => {
  test.each(ALIGN_TEST_DATA)(
    `${testStyle.title} [$title]`,
    (testData: TestDataUnit) => {
      const allData: string[] = [];
      Console.println = jest
        .fn()
        .mockImplementation(text => allData.push(text));
      new BoxDrawingBuilder()
        .setData(testData.data)
        .setStyle(testStyle.style)
        .alignCenter([0, 1])
        .drawBox();
      expect(allData).toMatchSnapshot();
    },
  );
});
