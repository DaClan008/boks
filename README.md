# boks

[![Build Status](https://travis-ci.org/DaClan008/boks.svg?branch=master)](https://travis-ci.org/DaClan008/boks)
[![Coverage Status](https://coveralls.io/repos/github/DaClan008/boks/badge.svg?branch=master)](https://coveralls.io/github/DaClan008/boks?branch=master)
[![codecov](https://codecov.io/gh/DaClan008/boks/branch/master/graph/badge.svg)](https://codecov.io/gh/DaClan008/boks)
![npm](https://img.shields.io/npm/v/boks)
![npm](https://img.shields.io/npm/dm/boks)
![NPM](https://img.shields.io/npm/l/boks)
![GitHub repo size](https://img.shields.io/github/repo-size/DaClan008/boks?label=gitHub%20repo%20size)

Border or boxes that can be used to wrap text.

Similar to cli-boxes but includes:

-   Abitilty to have different top, bottom, left and right borders.
-   Ability to have intersections +.
-   Attempt to discover intersection and corner types based on provided values.

## Install

```bash
npm install boks
```

## Usage

```js
const boks = require('boks');

console.log(boks.templates.single);
/*
┌─┬─┐
│ │ │
├─┼─┤
│ │ │
└─┴─┘
*/
// OR

const options = {
	horizontal: borders.HorizontalLines.line,
	vertical: borders.VerticalLines.double,
};

console.log(boks.getBorder(options));
/*
 ╓─╥─╖
 ║ ║ ║
 ╟─╫─╢
 ║ ║ ║
 ╙─╨─╜
*/
```

## Exposed functions

-   getBorder: build the borders from an options object (or an array of options objects).
-   fixMultiple: Fix missing borders based on an array of option object.
-   fixBorders: Fix missing borders based on a options object.
-   fixCorners: Only fix the missing corner values of an outside border.
-   fixIntersections: fix Intersection values (+) based on values of surrounding border types.

## Standard templates available

-   empty: no borders;
-   single: single lined borders;
-   round: single lined with rounded corner borders;
-   double: double lined borders;
-   singleDouble: single horizontal lines, double vertical lines;
-   doubleSingle: double horizontal lines, single vertical lines;
-   boldSingle: bold horizontal lines, single vertical lines;
-   singleBold: single horizontal lines, bold vertical lines;

## Options

Options are passed as an object and can have the following properties:

| property          | type                                                                                                             | description                                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| horizontal        | borders.HorizontalLines                                                                                          | The value to use for all horizontal lines.                                                                                                                                                      |
| Vertical          | borders.VerticalLines                                                                                            | The value to use for all vertical lines.                                                                                                                                                        |
| topLeft           | borders.TopLeftBorder \| borders.Verticallines \| borders.HorizontalLines \| borders.LeftIntersect \| false      | The value of the topleft corner. If false, no corner will be added or discovered.                                                                                                               |
| topRight          | borders.TopRightBorder \| borders.Verticallines \| borders.HorizontalLines \| borders.RightIntersect \| false    | The value of the topRight corner. If false, no corner will be added or discovered.                                                                                                              |
| bottomLeft        | borders.BottomLeftBorder \| borders.Verticallines \| borders.HorizontalLines \| borders.LeftIntersect \| false   | The value of the bottomLeft corner. If false, no corner will be added or discovered.                                                                                                            |
| bottomRight       | borders.BottomRightBorder \| borders.Verticallines \| borders.HorizontalLines \| borders.RightIntersect \| false | The valui of the bottom Right corner. If false, no corner will be added or discovered.                                                                                                          |
| topIntersect      | borders.TopIntersect \| borders.Verticallines \| borders.HorizontalLines \| borders.Intersect                    | The value of the top Intersection part (i.e. between 2 columns top).                                                                                                                            |
| bottomintersect   | borders.BottomIntersect \| borders.Verticallines \| borders.HorizontalLines \| borders.Intersect                 | The value of the bottom Intersection part (i.e. between 2 columns bottom).                                                                                                                      |
| leftIntersect     | borders.LeftIntersect \| borders.HorizontalLines \| borders.VerticalLines                                        | The value of the left border of the right column.                                                                                                                                               |
| rightIntersect    | borders.RightIntersect \| borders.HorizontalLines \| borders.VerticalLines                                       | The value of the right border of the left column.                                                                                                                                               |
| intersect         | borders.Intersect \| borders.VerticalLines \| borders.HorizontalLines                                            | The value of the column intersections (+).                                                                                                                                                      |
| extendFrom        | BorderTypes                                                                                                      | The base to extend the border value from.                                                                                                                                                       |
| strict            | boolean                                                                                                          | If set to true, will not inherit from any but will strictly use explicitly set values. (i.e. will not use 'extendFrom' but only values entered above).                                          |
| buildTableBorders | boolean                                                                                                          | If true and used with strict option the table will outomatically be built. Values to build from will be horizontal and vertical and may include: top right, bottom and left values if provided. |
| keepBorderSpace   | boolean                                                                                                          | If true and if no Horizontal or Vertical Lines has been selected a space will be included as border spacing.                                                                                    |

## Please note

Not all border types have corresponding intersection types and the best solution is sought.

## Contributions

Any contributions are welcome.
