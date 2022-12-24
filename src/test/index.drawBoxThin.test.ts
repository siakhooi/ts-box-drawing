import util from 'util';
import {Console} from '../main/Console';
import {drawBoxThin} from '../main/index';

test.each(['hello', 'hi', 'apa khabar'])('drawBoxThin', (text: string) => {
  const allData: string[] = [];
  Console.println = jest
    .fn()
    .mockImplementation((format, ...data) =>
      allData.push(util.format(format, ...data))
    );

  drawBoxThin(text);
  expect(allData).toMatchSnapshot();
});
