import util from 'util';

class ConsoleClass{
    println(format: string, ...text: any[]):void{
        console.log(util.format(format, text));
    }
}

export const Console=new ConsoleClass();
