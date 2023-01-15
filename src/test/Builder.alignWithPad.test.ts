import {Console} from '../main/Console';
import {BoxDrawingBuilder, HorizontalAlignmentEnum} from '../main/index';
import {
  ALL_STYLES,
  ALIGN_TEST_DATA,
  TestDataUnit,
  TestStyleUnit,
} from './TestData';

describe.each(ALL_STYLES)(
  'Align(0,LEFT),Align(1,CENTER),Align(2,RIGHT)',
  (testStyle: TestStyleUnit) => {
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
          .align(0, HorizontalAlignmentEnum.LEFT)
          .align(1, HorizontalAlignmentEnum.CENTER)
          .align(2, HorizontalAlignmentEnum.CENTER)
          .align(3, HorizontalAlignmentEnum.RIGHT)
          .setDefaultPadLeft(2)
          .setDefaultPadRight(2)
          .drawBox();
        expect(allData).toMatchSnapshot();
      }
    );
  }
);
