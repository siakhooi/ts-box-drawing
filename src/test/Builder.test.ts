import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {ALL_STYLES, SIMPLE_TEST_DATA, TestStyleUnit} from './TestData';

describe.each(ALL_STYLES)('Builder', (testStyle: TestStyleUnit) => {
  test.each(SIMPLE_TEST_DATA)(
    `${testStyle.title} [%s]`,
    (text: string | null) => {
      const allData: string[] = [];
      Console.println = jest
        .fn()
        .mockImplementation(text => allData.push(text));

      new BoxDrawingBuilder().setData(text).setStyle(testStyle.style).drawBox();
      expect(allData).toMatchSnapshot();
    },
  );
});
