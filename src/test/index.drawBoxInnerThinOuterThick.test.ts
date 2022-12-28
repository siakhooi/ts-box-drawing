import {Console} from '../main/Console';
import {drawBoxInnerThinOuterThick} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxInnerThinOuterThick',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxInnerThinOuterThick(text);
    expect(allData).toMatchSnapshot();
  }
);
