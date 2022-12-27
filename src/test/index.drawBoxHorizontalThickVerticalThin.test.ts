import {Console} from '../main/Console';
import {drawBoxHorizontalThickVerticalThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar', 'Hello World'])(
  'drawBoxHorizontalThickVerticalThin',
  (text: string) => {
    const allData: string[] = [];
    Console.println = jest.fn().mockImplementation(text => allData.push(text));

    drawBoxHorizontalThickVerticalThin(text);
    expect(allData).toMatchSnapshot();
  }
);
