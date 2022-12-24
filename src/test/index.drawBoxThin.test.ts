import {Console} from '../main/Console';
import {drawBoxThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar'])('drawBoxThin', (text: string) => {
  const allData: string[] = [];
  Console.println = jest.fn().mockImplementation(text => allData.push(text));

  drawBoxThin(text);
  expect(allData).toMatchSnapshot();
});
