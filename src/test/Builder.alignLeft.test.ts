import {Console} from '../main/Console';
import {BoxDrawingBuilder, HorizontalAlignmentEnum} from '../main/index';
import {
  ALL_STYLES,
  ALIGN_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)('AlignLeft([1,2])', (testStyle: TestStyleUnit) => {
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
        .align(0, HorizontalAlignmentEnum.RIGHT)
        .align(1, HorizontalAlignmentEnum.RIGHT)
        .align(2, HorizontalAlignmentEnum.RIGHT)
        .align(3, HorizontalAlignmentEnum.RIGHT)
        .alignLeft([0, 1])
        .drawBox();
      expect(allData).toMatchSnapshot();
    }
  );
});
