import {Console} from '../main/Console';
import {drawBoxInnerThickOuterThinCurve} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerThickOuterThinCurve',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerThickOuterThinCurve(text);
    expect(allData).toMatchSnapshot();
  }
);
