import util from 'util';

class ConsoleClass {
  println(format: string, ...texts: string[]): void {
    console.log(util.format(format, ...texts));
  }
}

export const Console = new ConsoleClass();
