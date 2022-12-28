import {Console} from '../main/Console';
import {drawBoxInnerThickOuterThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerThickOuterThin',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerThickOuterThin(text);
    expect(allData).toMatchSnapshot();
  }
);
