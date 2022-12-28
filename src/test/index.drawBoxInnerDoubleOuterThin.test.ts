import {Console} from '../main/Console';
import {drawBoxInnerDoubleOuterThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerDoubleOuterThin',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerDoubleOuterThin(text);
    expect(allData).toMatchSnapshot();
  }
);
