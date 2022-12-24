import {Console} from '../main/Console';
import {drawBoxDouble} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxDouble',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxDouble(text);
    expect(allData).toMatchSnapshot();
  }
);
