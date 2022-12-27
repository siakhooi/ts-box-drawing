import {Console} from '../main/Console';
import {drawBoxHorizontalThinVerticalDouble} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxHorizontalThinVerticalDouble',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxHorizontalThinVerticalDouble(text);
    expect(allData).toMatchSnapshot();
  }
);
