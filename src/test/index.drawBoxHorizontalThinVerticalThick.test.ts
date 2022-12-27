import {Console} from '../main/Console';
import {drawBoxHorizontalThinVerticalThick} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxHorizontalThinVerticalThick',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxHorizontalThinVerticalThick(text);
    expect(allData).toMatchSnapshot();
  }
);
