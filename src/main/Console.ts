import util from 'node:util';

class ConsoleClass {
  println(text: string): void {
    console.log(text);
  }
  printf(format: string, ...texts: string[]): void {
    this.println(util.format(format, ...texts));
  }
}

export const Console = new ConsoleClass();
