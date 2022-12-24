import {Console} from '../main/Console';
import {drawBoxThick} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxThick',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxThick(text);
    expect(allData).toMatchSnapshot();
  }
);
