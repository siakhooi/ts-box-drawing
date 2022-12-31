# Demo - Hello World

```
const x=require('@siakhooi/box-drawing');
const text = 'Hello World';

x.drawBoxThin(text);
//print
┌───────────┐
│Hello World│
└───────────┘
x.drawBoxThinCurve(text);
//print
╭───────────╮
│Hello World│
╰───────────╯
x.drawBoxThick(text);
//print
┏━━━━━━━━━━━┓
┃Hello World┃
┗━━━━━━━━━━━┛
x.drawBoxDouble(text);
//print
╔═══════════╗
║Hello World║
╚═══════════╝
x.drawBoxHorizontalThinVerticalThick(text);
//print
┎───────────┒
┃Hello World┃
┖───────────┚
x.drawBoxHorizontalThickVerticalThin(text);
//print
┍━━━━━━━━━━━┑
│Hello World│
┕━━━━━━━━━━━┙
x.drawBoxHorizontalThinVerticalDouble(text);
//print
╓───────────╖
║Hello World║
╙───────────╜
x.drawBoxHorizontalDoubleVerticalThin(text);
//print
╒═══════════╕
│Hello World│
╘═══════════╛
```
