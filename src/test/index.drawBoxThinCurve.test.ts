import {Console} from '../main/Console';
import {drawBoxThinCurve} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxThinCurve',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxThinCurve(text);
    expect(allData).toMatchSnapshot();
  }
);
