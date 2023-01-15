# ts-box-drawing

npm package to draw box using unicode characters

![GitHub](https://img.shields.io/github/license/siakhooi/ts-box-drawing?logo=github)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
![GitHub last commit](https://img.shields.io/github/last-commit/siakhooi/ts-box-drawing?logo=github)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/siakhooi/ts-box-drawing?logo=github)
![GitHub issues](https://img.shields.io/github/issues/siakhooi/ts-box-drawing?logo=github)
![GitHub closed issues](https://img.shields.io/github/issues-closed/siakhooi/ts-box-drawing?logo=github)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/siakhooi/ts-box-drawing?logo=github)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/siakhooi/ts-box-drawing?logo=github)
![GitHub top language](https://img.shields.io/github/languages/top/siakhooi/ts-box-drawing?logo=github)
![GitHub language count](https://img.shields.io/github/languages/count/siakhooi/ts-box-drawing?logo=github)
![Lines of code](https://img.shields.io/tokei/lines/github/siakhooi/ts-box-drawing?logo=github)
![GitHub repo size](https://img.shields.io/github/repo-size/siakhooi/ts-box-drawing?logo=github)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/siakhooi/ts-box-drawing?logo=github)
![Workflow](https://img.shields.io/badge/Workflow-github-purple)
![workflow](https://github.com/siakhooi/ts-box-drawing/actions/workflows/workflow-build-with-quality-checks.yml/badge.svg)
![workflow](https://github.com/siakhooi/ts-box-drawing/actions/workflows/workflow-deployments.yml/badge.svg)
![Release](https://img.shields.io/badge/Release-github-purple)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/siakhooi/ts-box-drawing?label=GPR%20release&logo=github)
![GitHub all releases](https://img.shields.io/github/downloads/siakhooi/ts-box-drawing/total?color=33cb56&logo=github)
![GitHub Release Date](https://img.shields.io/github/release-date/siakhooi/ts-box-drawing?logo=github)
![Release](https://img.shields.io/badge/Release-npm-purple)
![npm](https://img.shields.io/npm/v/@siakhooi/box-drawing?color=0e7fc0&label=NPM%20release&logo=npm)
![npm](https://img.shields.io/npm/dt/@siakhooi/box-drawing?logo=npm)
![npm type definitions](https://img.shields.io/npm/types/@siakhooi/box-drawing?logo=npm)

![Quality-npms.io](https://img.shields.io/badge/Quality-npms.io-purple)
![npms.io (final)](https://img.shields.io/npms-io/final-score/@siakhooi/box-drawing?logo=npm)
![npms.io (final)](https://img.shields.io/npms-io/maintenance-score/@siakhooi/box-drawing?logo=npm)
![npms.io (final)](https://img.shields.io/npms-io/quality-score/@siakhooi/box-drawing?logo=npm)
![npms.io (final)](https://img.shields.io/npms-io/popularity-score/@siakhooi/box-drawing?logo=npm)

![Quality-CodeClimate](https://img.shields.io/badge/Quality-CodeClimate-purple)
[![Maintainability](https://api.codeclimate.com/v1/badges/b0155bde6c18b4bf37ee/maintainability)](https://codeclimate.com/github/siakhooi/ts-box-drawing/maintainability)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/siakhooi/ts-box-drawing)
![Code Climate issues](https://img.shields.io/codeclimate/issues/siakhooi/ts-box-drawing)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/siakhooi/ts-box-drawing)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b0155bde6c18b4bf37ee/test_coverage)](https://codeclimate.com/github/siakhooi/ts-box-drawing/test_coverage)
![Quality-Sonar](https://img.shields.io/badge/Quality-SonarCloud-purple)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=bugs)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=siakhooi_ts-box-drawing&metric=coverage)](https://sonarcloud.io/summary/new_code?id=siakhooi_ts-box-drawing)
![Sonar Violations (short format)](https://img.shields.io/sonar/violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/blocker_violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/critical_violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/major_violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/minor_violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/info_violations/siakhooi_ts-box-drawing?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (long format)](https://img.shields.io/sonar/violations/siakhooi_ts-box-drawing?format=long&server=http%3A%2F%2Fsonarcloud.io)

[![Generic badge](https://img.shields.io/badge/Funding-BuyMeACoffee-33cb56.svg)](https://www.buymeacoffee.com/siakhooi)
[![Generic badge](https://img.shields.io/badge/Funding-Ko%20Fi-33cb56.svg)](https://ko-fi.com/siakhooi)
![visitors](https://visitor-badge.glitch.me/badge?page_id=siakhooi.box-drawing&left_color=grey&right_color=#33cb56)

## Locations

### Demo

- <https://replit.com/@siakhooi/siakhooibox-drawing-Demo?v=1>

### Source Code

- <https://github.com/siakhooi/ts-box-drawing>

### Distribution

- <https://www.npmjs.com/package/@siakhooi/box-drawing>
- <https://github.com/siakhooi/ts-box-drawing/pkgs/npm/box-drawing>

### Code Quality

- <https://sonarcloud.io/project/overview?id=siakhooi_ts-box-drawing>
- <https://codeclimate.com/github/siakhooi/ts-box-drawing>

### Reference

- <https://en.wikipedia.org/wiki/Box_Drawing>
- <https://www.unicode.org/charts/PDF/U2500.pdf>

## Usage

See Demo in Replit: <https://replit.com/@siakhooi/siakhooibox-drawing-Demo?v=1>

### Simple Text

see [Demo_HelloWorld](Demo_HelloWorld.md)

```javascript
const x = require('@siakhooi/box-drawing');

x.drawBoxThin(text);
x.drawBoxThick(text);
x.drawBoxDouble(text);
x.drawBoxThinCurve(text);
x.drawBoxHorizontalThinVerticalThick(text);
x.drawBoxHorizontalThickVerticalThin(text);
x.drawBoxHorizontalThinVerticalDouble(text);
x.drawBoxHorizontalDoubleVerticalThin(text);
x.drawBoxInnerDoubleOuterThin(text);
x.drawBoxInnerThinOuterDouble(text);
x.drawBoxInnerThinOuterThick(text);
x.drawBoxInnerThickOuterThin(text);
x.drawBoxInnerDoubleOuterThinCurve(text);
x.drawBoxInnerThickOuterThinCurve(text);
```

### Array

see [Demo_Array](Demo_Array.md)

```javascript
const x = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

x.drawBoxThin(textInArray);
x.drawBoxThick(textInArray);
x.drawBoxDouble(textInArray);
x.drawBoxThinCurve(textInArray);
x.drawBoxHorizontalThinVerticalThick(textInArray);
x.drawBoxHorizontalThickVerticalThin(textInArray);
x.drawBoxHorizontalThinVerticalDouble(textInArray);
x.drawBoxHorizontalDoubleVerticalThin(textInArray);
x.drawBoxInnerDoubleOuterThin(textInArray);
x.drawBoxInnerThinOuterDouble(textInArray);
x.drawBoxInnerThinOuterThick(textInArray);
x.drawBoxInnerThickOuterThin(textInArray);
x.drawBoxInnerDoubleOuterThinCurve(textInArray);
x.drawBoxInnerThickOuterThinCurve(textInArray);
```

### BoxDrawingBuilder

see [Demo_Builder](Demo_Builder.md)

- Basic
  - setData(data)
  - setStyle(boxStyle)
  - drawBox()
- Padding
  - padLeft(column, spaces)
  - padRight(column, spaces)
  - padLeftAll(spaces[])
  - padRightAll(spaces[])
  - pad(column, left_spaces, right_spaces)
  - setDefaultPadLeft(spaces)
  - setDefaultPadRight(spaces)
  - setDefaultPad(left_spaces, right_spaces)
- Horizontal Alignment
  - align(column, HorizontalAlignmentEnum)

#### Basic

```javascript
const {BoxDrawingBuilder, THINCURVE} = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

new BoxDrawingBuilder().setData(textInArray).setStyle(THINCURVE).drawBox();
```

#### Padding

```javascript
const {BoxDrawingBuilder, THINCURVE} = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

new BoxDrawingBuilder()
  .setData(textInArray)
  .setStyle(THINCURVE)
  .setDefaultPadLeft(1)
  .setDefaultPadRight(2)
  .padLeft(0, 5)
  .padRight(1, 2)
  .pad(3, 1, 2)
  .padLeftAll([1, 2, 3, 4, 5])
  .padRightAll([5, 4, 3, 2, 1])
  .drawBox();
```

#### Horizontal Alignment

```javascript
const {BoxDrawingBuilder, THINCURVE} = require('@siakhooi/box-drawing');

const textInArray = [
  ['Cell 1-1', 'Cell 2-1'],
  ['Cell 1-2', 'Cell 2-2'],
];

new BoxDrawingBuilder()
  .setData(textInArray)
  .setStyle(THINCURVE)
  .align(0, HorizontalAlignmentEnum.LEFT)
  .align(1, HorizontalAlignmentEnum.RIGHT)
  .drawBox();
```
