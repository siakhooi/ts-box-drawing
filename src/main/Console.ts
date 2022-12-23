import util from 'util';

class ConsoleClass {
  println(format: string, ...texts: string[]): void {
    console.log(texts.length + ' ' + util.format(format, ...texts));
  }
}

export const Console = new ConsoleClass();
