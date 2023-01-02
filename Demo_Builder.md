# Demo - Hello World

```typescript
const x = require('@siakhooi/box-drawing');
const {
  BoxDrawingBuilder,
  THIN,
  THICK,
  DOUBLE,
  THINCURVE,
  HORIZONTAL_THIN_VERTICAL_THICK,
  HORIZONTAL_THICK_VERTICAL_THIN,
  HORIZONTAL_THIN_VERTICAL_DOUBLE,
  HORIZONTAL_DOUBLE_VERTICAL_THIN,
  INNER_DOUBLE_OUTER_THIN,
  INNER_THIN_OUTER_DOUBLE,
  INNER_THIN_OUTER_THICK,
  INNER_THICK_OUTER_THIN,
  INNER_THICK_OUTER_THIN_CURVE,
  INNER_DOUBLE_OUTER_THIN_CURVE,
} = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

new BoxDrawingBuilder().setData(textInArray).setStyle(THIN).drawBox();

new BoxDrawingBuilder()
  .setData(textInArray)
  .setStyle(HORIZONTAL_THIN_VERTICAL_THICK)
  .drawBox();
```

## padLeft and padRight

```javascript
const x = require('@siakhooi/box-drawing');
const {BoxDrawingBuilder, THIN} = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];
new BoxDrawingBuilder()
  .setData(textInArray)
  .setStyle(THIN)
  .padLeft(0, 5)
  .padRight(1, 2)
  .drawBox();
```
