# Demo - Hello World

```
const x=require('@siakhooi/box-drawing');
const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

x.drawBoxThin(textInArray);
//print
┌────────┬────────┐
│Cell 1-1│Cell 2-1│
├────────┼────────┤
│Cell 1-2│Cell 2-2│
└────────┴────────┘
x.drawBoxThinCurve(textInArray);
//print
╭────────┬────────╮
│Cell 1-1│Cell 2-1│
├────────┼────────┤
│Cell 1-2│Cell 2-2│
╰────────┴────────╯
x.drawBoxThick(textInArray);
//print
┏━━━━━━━━┳━━━━━━━━┓
┃Cell 1-1┃Cell 2-1┃
┣━━━━━━━━╋━━━━━━━━┫
┃Cell 1-2┃Cell 2-2┃
┗━━━━━━━━┻━━━━━━━━┛
x.drawBoxDouble(textInArray);
//print
╔════════╦════════╗
║Cell 1-1║Cell 2-1║
╠════════╬════════╣
║Cell 1-2║Cell 2-2║
╚════════╩════════╝
x.drawBoxHorizontalThinVerticalThick(textInArray);
//print
┎────────┰────────┒
┃Cell 1-1┃Cell 2-1┃
┠────────╂────────┨
┃Cell 1-2┃Cell 2-2┃
┖────────┸────────┚
x.drawBoxHorizontalThickVerticalThin(textInArray);
//print
┍━━━━━━━━┯━━━━━━━━┑
│Cell 1-1│Cell 2-1│
┝━━━━━━━━┿━━━━━━━━┥
│Cell 1-2│Cell 2-2│
┕━━━━━━━━┷━━━━━━━━┙
x.drawBoxHorizontalThinVerticalDouble(textInArray);
//print
╓────────╥────────╖
║Cell 1-1║Cell 2-1║
╟────────╫────────╢
║Cell 1-2║Cell 2-2║
╙────────╨────────╜
x.drawBoxHorizontalDoubleVerticalThin(textInArray);
//print
╒════════╤════════╕
│Cell 1-1│Cell 2-1│
╞════════╪════════╡
│Cell 1-2│Cell 2-2│
╘════════╧════════╛
x.drawBoxInnerDoubleOuterThin(textInArray);
//print
┌────────╥────────┐
│Cell 1-1║Cell 2-1│
╞════════╬════════╡
│Cell 1-2║Cell 2-2│
└────────╨────────┘
x.drawBoxInnerThinOuterDouble(textInArray);
//print
╔════════╤════════╗
║Cell 1-1│Cell 2-1║
╟────────┼────────╢
║Cell 1-2│Cell 2-2║
╚════════╧════════╝
x.drawBoxInnerThinOuterThick(textInArray);
//print
┏━━━━━━━━┯━━━━━━━━┓
┃Cell 1-1│Cell 2-1┃
┠────────┼────────┨
┃Cell 1-2│Cell 2-2┃
┗━━━━━━━━┷━━━━━━━━┛
x.drawBoxInnerThickOuterThin(textInArray);
//print
┌────────┰────────┐
│Cell 1-1┃Cell 2-1│
┝━━━━━━━━╈━━━━━━━━┥
│Cell 1-2┃Cell 2-2│
└────────┸────────┘
x.drawBoxInnerDoubleOuterThinCurve(textInArray);
//print
╭────────╥────────╮
│Cell 1-1║Cell 2-1│
╞════════╬════════╡
│Cell 1-2║Cell 2-2│
╰────────╨────────╯
x.drawBoxInnerThickOuterThinCurve(textInArray);
//print
╭────────┰────────╮
│Cell 1-1┃Cell 2-1│
┝━━━━━━━━╈━━━━━━━━┥
│Cell 1-2┃Cell 2-2│
╰────────┸────────╯
```
