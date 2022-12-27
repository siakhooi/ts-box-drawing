import {Console} from '../main/Console';
import {drawBoxHorizontalDoubleVerticalThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxHorizontalDoubleVerticalThin',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxHorizontalDoubleVerticalThin(text);
    expect(allData).toMatchSnapshot();
  }
);
