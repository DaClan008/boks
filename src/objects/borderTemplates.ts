import { borders } from './borders';
import { BordersExtendedReadOnly } from './types';

export namespace templates {
	/**
	 * If not should be displayed.
	 */
	export const empty: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.none,
		topRight: borders.TopRightBorder.none,
		bottomLeft: borders.BottomLeftBorder.none,
		bottomRight: borders.BottomRightBorder.none,
		top: borders.HorizontalLines.none,
		bottom: borders.HorizontalLines.none,
		left: borders.VerticalLines.none,
		right: borders.VerticalLines.none,
		topIntersect: borders.TopIntersect.none,
		bottomIntersect: borders.BottomIntersect.none,
		leftIntersect: borders.LeftIntersect.none,
		rightIntersect: borders.RightIntersect.none,
		intersect: borders.Intersect.none,
		horizontal: borders.HorizontalLines.none,
		vertical: borders.VerticalLines.none,
	};
	/**
	 * Single (line) border type.
	 *
	 * @example
	 *
	 * ┌─┬─┐
	 * │ │ │
	 * ├─┼─┤
	 * │ │ │
	 * └─┴─┘
	 */
	export const single: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.line,
		topRight: borders.TopRightBorder.line,
		bottomLeft: borders.BottomLeftBorder.line,
		bottomRight: borders.BottomRightBorder.line,
		top: borders.HorizontalLines.line,
		bottom: borders.HorizontalLines.line,
		left: borders.VerticalLines.line,
		right: borders.VerticalLines.line,
		topIntersect: borders.TopIntersect.line,
		bottomIntersect: borders.BottomIntersect.line,
		leftIntersect: borders.LeftIntersect.line,
		rightIntersect: borders.RightIntersect.line,
		intersect: borders.Intersect.line,
		horizontal: borders.HorizontalLines.line,
		vertical: borders.VerticalLines.line,
	};
	/**
	 * Round (round) border type
	 *
	 * @example
	 *
	 * ╭─┬─╮
	 * │ │ │
	 * ├─┼─┤
	 * │ │ │
	 * ╰─┴─╯
	 */
	export const round: BordersExtendedReadOnly = {
		...single,
		topLeft: borders.TopLeftBorder.round,
		topRight: borders.TopRightBorder.round,
		bottomLeft: borders.BottomLeftBorder.round,
		bottomRight: borders.BottomRightBorder.round,
	};
	/**
	 * Double line border type
	 *
	 * @example
	 *
	 * ╔═╦═╗
	 * ║ ║ ║
	 * ╠═╬═╣
	 * ║ ║ ║
	 * ╚═╩═╝
	 */
	export const double: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.double,
		topRight: borders.TopRightBorder.double,
		bottomLeft: borders.BottomLeftBorder.double,
		bottomRight: borders.BottomRightBorder.double,
		top: borders.HorizontalLines.double,
		bottom: borders.HorizontalLines.double,
		left: borders.VerticalLines.double,
		right: borders.VerticalLines.double,
		topIntersect: borders.TopIntersect.double,
		bottomIntersect: borders.BottomIntersect.double,
		leftIntersect: borders.LeftIntersect.double,
		rightIntersect: borders.RightIntersect.double,
		intersect: borders.Intersect.double,
		horizontal: borders.HorizontalLines.double,
		vertical: borders.VerticalLines.double,
	};
	/**
	 * Bold (bold) border type
	 *
	 * @example
	 *
	 * ┏━┳━┓
	 * ┃ ┃ ┃
	 * ┣━╋━┫
	 * ┃ ┃ ┃
	 * ┗━┻━┛
	 */
	export const bold: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.bold,
		topRight: borders.TopRightBorder.bold,
		bottomLeft: borders.BottomLeftBorder.bold,
		bottomRight: borders.BottomRightBorder.bold,
		top: borders.HorizontalLines.bold,
		bottom: borders.HorizontalLines.bold,
		left: borders.VerticalLines.bold,
		right: borders.VerticalLines.bold,
		topIntersect: borders.TopIntersect.bold,
		bottomIntersect: borders.BottomIntersect.bold,
		leftIntersect: borders.LeftIntersect.bold,
		rightIntersect: borders.RightIntersect.bold,
		intersect: borders.Intersect.bold,
		horizontal: borders.HorizontalLines.bold,
		vertical: borders.VerticalLines.bold,
	};
	/**
	 * Single (line) horizontal lines Double (double) vertical lines
	 *
	 * @example
	 *
	 * ╓─╥─╖
	 * ║ ║ ║
	 * ╟─╫─╢
	 * ║ ║ ║
	 * ╙─╨─╜
	 */
	export const singleDouble: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.singleDouble,
		topRight: borders.TopRightBorder.singleDouble,
		bottomLeft: borders.BottomLeftBorder.singleDouble,
		bottomRight: borders.BottomRightBorder.singleDouble,
		top: borders.HorizontalLines.line,
		bottom: borders.HorizontalLines.line,
		left: borders.VerticalLines.double,
		right: borders.VerticalLines.double,
		topIntersect: borders.TopIntersect.singleDouble,
		bottomIntersect: borders.BottomIntersect.singleDouble,
		leftIntersect: borders.LeftIntersect.singleDouble,
		rightIntersect: borders.RightIntersect.singleDouble,
		intersect: borders.Intersect.singleDouble,
		horizontal: borders.HorizontalLines.line,
		vertical: borders.VerticalLines.double,
	};
	/**
	 * Double (double) horizontal lines with Single (line) vertical lines.
	 *
	 * @example
	 *
	 * ╒═╤═╕
	 * │ │ │
	 * ╞═╪═╡
	 * │ │ │
	 * ╘═╧═╛
	 */
	export const doubleSingle: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.doubleSingle,
		topRight: borders.TopRightBorder.doubleSingle,
		bottomLeft: borders.BottomLeftBorder.doubleSingle,
		bottomRight: borders.BottomRightBorder.doubleSingle,
		top: borders.HorizontalLines.double,
		bottom: borders.HorizontalLines.double,
		left: borders.VerticalLines.line,
		right: borders.VerticalLines.line,
		topIntersect: borders.TopIntersect.doubleSingle,
		bottomIntersect: borders.BottomIntersect.doubleSingle,
		leftIntersect: borders.LeftIntersect.doubleSingle,
		rightIntersect: borders.RightIntersect.doubleSingle,
		intersect: borders.Intersect.doubleSingle,
		horizontal: borders.HorizontalLines.double,
		vertical: borders.VerticalLines.line,
	};
	/**
	 * Bold (bold) horizontal lines with Single(line) vertical lines.
	 *
	 * @example
	 *
	 * ┍━┯━┑
	 * │ │ │
	 * ┝━┿━┥
	 * │ │ │
	 * ┕━┷━┙
	 */
	export const boldSingle: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.boldSingle,
		topRight: borders.TopRightBorder.boldSingle,
		bottomLeft: borders.BottomLeftBorder.boldSingle,
		bottomRight: borders.BottomRightBorder.boldSingle,
		top: borders.HorizontalLines.bold,
		bottom: borders.HorizontalLines.bold,
		left: borders.VerticalLines.line,
		right: borders.VerticalLines.line,
		topIntersect: borders.TopIntersect.boldSingle,
		bottomIntersect: borders.BottomIntersect.boldSingle,
		leftIntersect: borders.LeftIntersect.boldSingle,
		rightIntersect: borders.RightIntersect.boldSingle,
		intersect: borders.Intersect.boldSingle,
		horizontal: borders.HorizontalLines.bold,
		vertical: borders.VerticalLines.line,
	};
	/**
	 * Single(line) horizontal linew with Bold (bold) horizontal lines.
	 *
	 * @example
	 *
	 * ```
	 * ┎─┰─┒
	 * ┃ ┃ ┃
	 * ┠─╂─┨
	 * ┃ ┃ ┃
	 * ┖─┸─┚
	 * ```
	 */
	export const singleBold: BordersExtendedReadOnly = {
		topLeft: borders.TopLeftBorder.singleBold,
		topRight: borders.TopRightBorder.singleBold,
		bottomLeft: borders.BottomLeftBorder.singleBold,
		bottomRight: borders.BottomRightBorder.singleBold,
		top: borders.HorizontalLines.line,
		bottom: borders.HorizontalLines.line,
		left: borders.VerticalLines.bold,
		right: borders.VerticalLines.bold,
		topIntersect: borders.TopIntersect.singleBold,
		bottomIntersect: borders.BottomIntersect.singleBold,
		leftIntersect: borders.LeftIntersect.singleBold,
		rightIntersect: borders.RightIntersect.singleBold,
		intersect: borders.Intersect.singleBold,
		horizontal: borders.HorizontalLines.line,
		vertical: borders.VerticalLines.bold,
	};
}
