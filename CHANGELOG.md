# Change Log

## `1.5.1`, `1.5.2`, `1.5.3`, `1.5.4`, `1.5.5` - Jun 2023

- fix code smells
- npm up

## `1.5.0` 26 May 2023

- add drawSudokuBoardDouble()
- add drawSudokuBoardThick()
- refactor to BoxStyle, BoxStyles
- refactor to BoardStyle, BoardStyles
- add Sudoku.drawBoard([])
- refactor BoxStyle
- remove deploy to jfrog

## `1.4.0` 2 Mar 2023

- add deploy to jfrog
- npm up
- add BoxStyles.VERTICALBAR_PLUS_EQUALS
- add BoxStyles.VERTICALBAR_PLUS_EQUALS_SLASHES

## `1.3.0` 8 Feb 2023

- add BoxStyles.VERTICALBAR_PLUS_MINUS
- add BoxStyles.VERTICALBAR_PLUS_MINUS_SLASHES
- add publish to paydevs.com

## `1.2.0` 15 Jan 2023

- add BoxDrawingBuilder().align(column, horizontalAlignment)
- add BoxDrawingBuilder().setDefaultPad(left_spaces, right_spaces)
- add BoxDrawingBuilder().alignLeft(columns[])
- add BoxDrawingBuilder().alignRight(columns[])
- add BoxDrawingBuilder().alignCenter(columns[])
- add BoxDrawingBuilder().setDefaultAlignment(horizontalAlignment)

## `1.1.0` 13 Jan 2023

- add BoxDrawingBuilder().padRightAll(spaces[])
- add BoxDrawingBuilder().padLeftAll(spaces[])
- refactor into Padding()
- add BoxDrawingBuilder().pad(column, left_spaces, right_spaces)

## `1.0.0` 8 Jan 2023

- create type for union type - fix sonarcloud code smell
- npm up
- add BoxDrawingBuilder().setDefaultPadLeft(spaces)
- add BoxDrawingBuilder().setDefaultPadRight(spaces)
- create BoxStyles object - fix codeclimate duplication
- remove BoxDrawingBuilder() constructor

## `0.0.9` 2 Jan 2023

- add BoxDrawingBuilder().padLeft(column, spaces)
- add funding
- add BoxDrawingBuilder().padRight(column, spaces)

## `0.0.8` 1 Jan 2023

- refactor Simple Tests
- fix null or '' error
- refactor Array Tests
- update README.md
- fix bug on InnerThickOuterThin and InnerThickOuterThinCurve.
- refactor to BoxDrawingBuilder class.
- export BoxDrawingBuilder

## `0.0.7` 28 Dec 2022

- add Horizontal/Vertical inner and outer
- add drawBoxInnerDoubleOuterThin()
- add drawBoxInnerThinOuterDouble()
- add drawBoxInnerThinOuterThick()
- add drawBoxInnerThickOuterThin()
- add drawBoxInnerDoubleOuterThinCurve()
- add drawBoxInnerThickOuterThinCurve()

## `0.0.6` 27 Dec 2022

- add drawBoxHorizontalThinVerticalThick()
- add drawBoxHorizontalThickVerticalThin()
- add drawBoxHorizontalThinVerticalDouble()
- add drawBoxHorizontalDoubleVerticalThin()

## `0.0.5` 26 Dec 2022

- add Console.test.ts
- add drawBoxThinCurve()
- rename up to top, down to bottom
- add array support

## `0.0.4` - 24 Dec 2022

- add drawBoxDouble()

## `0.0.3` - 24 Dec 2022

- add drawBoxThick()
- refactor BoxStyle, BoxStyleConstants, Console
- add sonar cloud, codeclimate

## `0.0.2` - 23 Dec 2022

- fix error

## `0.0.1` - 23 Dec 2022

- add drawBoxThin()
