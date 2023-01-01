import {BoxStyle} from '../main/BoxStyle';
import {Console} from '../main/Console';
import {BoxDrawingBuilder} from '../main/index';
import {ALL_STYLES, SIMPLE_TEST_DATA} from './TestData';

describe.each(ALL_STYLES)('Simple', (boxStyle: BoxStyle) => {
  test.each(SIMPLE_TEST_DATA)('Builder [%s]', (text: string | null) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    new BoxDrawingBuilder().setData(text).setStyle(boxStyle).drawBox();
    expect(allData).toMatchSnapshot();
  });
});
