import {Console} from '../main/Console';
import {BoxDrawingBuilder, HorizontalAlignmentEnum} from '../main/index';
import {
  ALIGN_TEST_DATA,
  ALL_STYLES,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)(
  'setDefaultAlignment()',
  (testStyle: TestStyleUnit) => {
    describe.each([
      HorizontalAlignmentEnum.LEFT,
      HorizontalAlignmentEnum.CENTER,
      HorizontalAlignmentEnum.RIGHT,
    ])('%s', (horizontalAlignment: HorizontalAlignmentEnum) => {
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
            .setDefaultAlignment(horizontalAlignment)
            .drawBox();
          expect(allData).toMatchSnapshot();
        },
      );
    });
  },
);
