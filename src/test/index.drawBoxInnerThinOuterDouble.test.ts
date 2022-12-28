import {Console} from '../main/Console';
import {drawBoxInnerThinOuterDouble} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerThinOuterDouble',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerThinOuterDouble(text);
    expect(allData).toMatchSnapshot();
  }
);
