import util from 'util';
import { Console } from "../main/Console";
import { drawBox1 } from '../main/index';

test.each([
    'hello',
    'hi',
    'apa khabar'
])('drawBox1', (text: string) => {
    let allData: string[];
    allData=[];
    Console.println=jest.fn().mockImplementation((format, data)=>allData.push(util.format(format, data)));

    drawBox1(text);
    expect(allData).toMatchSnapshot();
});
