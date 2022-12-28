import {Console} from '../main/Console';
import {drawBoxInnerDoubleOuterThinCurve} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerDoubleOuterThinCurve',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerDoubleOuterThinCurve(text);
    expect(allData).toMatchSnapshot();
  }
);
