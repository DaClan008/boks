/**
 * Contains all the border information.
 */
export namespace borders {
	/** Horizontal lines of a border. ─ */
	export enum HorizontalLines {
		none = '',
		/** Normal horizontal line e.g. ─ */
		line = '\u2500',
		/** Bold horizontal line e.g. bold ━ */
		bold = '\u2501',
		/** Dashed horizontal line e.g. ╌ */
		dash = '\u254C',
		/** Dashed bold horizontal line e.g. ╍ */
		dashBold = '\u254D',
		/** Tripple dashed horizontal line e.g. ┄ */
		trippleDash = '\u2504',
		/** Tripple bold dashed horizontal line e.g. ┅ */
		trippleDashBold = '\u2505',
		/** Quadruple dashed horizontal line e.g. ┈ */
		quadDash = '\u2508',
		/** Quadruple bold dashed horizontal line e.g. ┉ */
		quadDashBold = '\u2509',
		/** Double horizontal line e.g. ═ */
		double = '\u2550',
		/** Left half of a horizontal line e.g. ╴ */
		lineleft = '\u2574',
		/** Right half of a horizontal line e.g. ╶ */
		lineright = '\u2576',
		/** Left half of a bold horizontal line e.g. ╸ */
		lineleftBold = '\u2578',
		/** Right half of a bold horizontal line e.g. ╺ */
		linerightBold = '\u257A',
		/** Normal left half of horizontal line, bold right e.g. ╼ */
		lineBold = '\u257C',
		/** Bold left half of a horizontal line, normal right e.g. ╾ */
		boldLine = '\u257E',
	}
	/** Vertical lines of a border. │ */
	export enum VerticalLines {
		none = '',
		/** Normal vertical line e.g. │ */
		line = '\u2502',
		/** Bold vertical line e.g. ┃ */
		bold = '\u2503',
		/** Dashed vertical line e.g. ╎ */
		dash = '\u254E',
		/** Dashed bold vertical line e.g. ╏ */
		dashBold = '\u254F',
		/** Tripple dash vertical line e.g. ┆ */
		trippleDash = '\u2506',
		/** Tripple dashed bold vertical line e.g. ┇ */
		trippleDashBold = '\u2507',
		/** Quadruple dash vertical line e.g. ┊ */
		quadDash = '\u250A',
		/** Quadruple dash bold vertical line e.g. ┋ */
		quadDashBold = '\u250B',
		/** Double vertical lines e.g. double ║ */
		double = '\u2551',
		/** The top half of a vertical line e.g. ╵ */
		lineup = '\u2575',
		/** The bottom half of a vertical line e.g. ╷ */
		linedown = '\u2577',
		/** The top half of a bold vertical line e.g. ╹ */
		lineupBold = '\u2579',
		/** The bottom half of a bold vertical line e.g. ╻ */
		linedownBold = '\u257B',
		/** Normal top half of a vertical line, bold bottom e.g. ╽ */
		lineBold = '\u257D',
		/** Bold top half of a vertical line, normal bottom e.g. ╿ */
		boldLine = '\u257F',
	}

	/** The top left line of a table border. ┌ */
	export enum TopLeftBorder {
		none = '',
		/** Normal top left border line e.g. ┌ */
		line = '\u250C',
		/** Bold horizontal line, normal vertical line e.g. ┍ */
		boldSingle = '\u250D',
		/** Normal horizontal line, bold vertical line e.g. ┎ */
		singleBold = '\u250E',
		/** Bold top left border line e.g. ┏ */
		bold = '\u250F',
		/** Double horizontal line, normal vertical line e.g. ╒ */
		doubleSingle = '\u2552',
		/** Nomral horizontal line, double vertical line e.g. ╓ */
		singleDouble = '\u2553',
		/** Double top left border line e.g. ╔ */
		double = '\u2554',
		/** Round top left border line e.g. ╭ */
		round = '\u256D',
	}
	/** The top right line of a table border. ┐ */
	export enum TopRightBorder {
		none = '',
		/** Normal top right border line e.g. ┐ */
		line = '\u2510',
		/** Bold horizontal line, normal vertical e.g. ┑ */
		boldSingle = '\u2511',
		/** Normal horizontal line, bold vertical e.g. ┒ */
		singleBold = '\u2512',
		/** Bold top right border line e.g. ┓ */
		bold = '\u2513',
		/** Double horizontal line, normal vertical line e.g. ╕ */
		doubleSingle = '\u2555',
		/** Normal horizontal line, double vertical lines e.g. ╖ */
		singleDouble = '\u2556',
		/** Double top right border line e.g. ╗ */
		double = '\u2557',
		/** Round top right border line e.g. ╮ */
		round = '\u256E',
	}
	/** The bottom left of a table border. └ */
	export enum BottomLeftBorder {
		none = '',
		/** Normal bottom left table line e.g. └ */
		line = '\u2514',
		/** Bold horizontal line, normal vertical line e.g. ┕ */
		boldSingle = '\u2515',
		/** Normal horizontal line, bold vertical line e.g. ┖ */
		singleBold = '\u2516',
		/** Bold bottom left table line e.g. ┗ */
		bold = '\u2517',
		/** Double horizontal line, single vertical line e.g. ╘ */
		doubleSingle = '\u2558',
		/** Single horizontal line, double vertical lines e.g. ╙ */
		singleDouble = '\u2559',
		/** Double bottom left table line e.g. ╚ */
		double = '\u255A',
		/** Roung bottom left table line e.g. ╰ */
		round = '\u2570',
	}
	/** The bottom right of a table border. ┘ */
	export enum BottomRightBorder {
		none = '',
		/** Normal bottom right border line e.g. ┘ */
		line = '\u2518',
		/** Bold horizontal line, single vertical line e.g. ┙ */
		boldSingle = '\u2519',
		/** Single horizontal line, bold vertical line e.g. ┚ */
		singleBold = '\u251A',
		/** Bold bottom right border line e.g. ┛ */
		bold = '\u251B',
		/** Double horizontal lines, single vertical lines e.g. doubleSingle ╛ */
		doubleSingle = '\u255B',
		/** Single horizontal lines, double vertical lines e.g. singleDouble ╜ */
		singleDouble = '\u255C',
		/** Double bottom right border line e.g. double ╝ */
		double = '\u255D',
		/** Round bottom right border line e.g. ╯ */
		round = '\u256F',
	}
	/** The top (middle) intersection of a table border. ┬ */
	export enum TopIntersect {
		none = '',
		// single line e.g. ┬
		line = '\u252C',
		/**
		 * bold left Line e.g. ┭
		 */
		boldLeft = '\u252D',
		/** bold right line e.g. ┮ */
		boldRight = '\u252E',
		/** Bold horizontal line, normal vertical e.g. ┯ */
		boldSingle = '\u252F',
		/** Normal horizontal line, bold vertical e.g. ┰ */
		singleBold = '\u2530',
		/** Bold vertical and left half horizontal, right half normal e.g. ┱ */
		lightRight = '\u2531',
		/** Bold vertical and right half horizontal, left half normal e.g. ┮ */
		lightLeft = '\u252E',
		/** bold top intersect e.g. ┳ */
		bold = '\u2533',
		/** double horizontal line single vertical line e.g ╤ */
		doubleSingle = '\u2564',
		/** Normal horizontal line, double vertical lines e.g. ╥ */
		singleDouble = '\u2565',
		/** double line top intersect e.g. ╦ */
		double = '\u2566',
	}
	/** The bottom (middle) intersection of a table border. ┴ */
	export enum BottomIntersect {
		none = '',
		/** Single line bottom intersection e.g. ┴ */
		line = '\u2534',
		/** bold left horizontal line, normal right and vertical e.g. ┵ */
		boldLeft = '\u2535',
		/** bold right horizontal line, normal left and vertical e.g. ┶ */
		boldRight = '\u2536',
		/** Normal horizontal line, bold vertical e.g. ┸ */
		singleBold = '\u2538',
		/** Bold horizontal line, normal vertical e.g. ┷ */
		boldSingle = '\u2537',
		/** Bold line with normal right half of horizontal line e.g. ┹ */
		lightRight = '\u2539',
		/** Bold line with normal left half of horizontal line e.g. ┺ */
		lightLeft = '\u253A',
		/** Bold bottom intersection e.g. ┻ */
		bold = '\u253B',
		/** Double horizontal line, normal vertical line e.g. ╧ */
		doubleSingle = '\u2567',
		/** Normal horizontal line, double vertical line e.g. ╨ */
		singleDouble = '\u2568',
		/** Double bottom intersection e.g. ╩ */
		double = '\u2569',
	}
	/** The left (middle) intersection of a table border ├ */
	export enum LeftIntersect {
		none = '',
		/** Single line left intersection e.g. ├ */
		line = '\u251C',
		/** Bold horizontal line normal vertical line e.g. ┝ */
		boldSingle = '\u251D',
		/** Bold top vertical half, normal bottom and vertical lines e.g. ┞ */
		boldTop = '\u251E',
		/** Bold bottom vertical half, normal top and horizontal lines e.g. ┟ */
		boldBottom = '\u251F',
		/** Normal horizontal line, bold vertical lines e.g. ┠ */
		singleBold = '\u2520',
		/** Single bottom half of vertical line, bold top and vertical lines e.g. ┡ */
		lightBottom = '\u2521',
		/** Single top half of vertical line, bold bottom and vertical lines e.g. ┢ */
		lightTop = '\u2522',
		/** Bold left intersection line e.g. ┣ */
		bold = '\u2523',
		/** Double horizontal line, single vertical lines e.g. ╞ */
		doubleSingle = '\u255E',
		/** Single horizontal line, double vertical lines e.g. ╟ */
		singleDouble = '\u255F',
		/** Double left intersection line e.g. ╠ */
		double = '\u2560',
	}
	/** The right (middle) intersection of a table border ┤ */
	export enum RightIntersect {
		none = '',
		/** Normal right intersection line e.g. ┤ */
		line = '\u2524',
		/** Bold horizontal line, normal vertical line e.g. ┥ */
		boldSingle = '\u2525',
		/** Bold top half or vertical line, normal bottom and horizontal line e.g. ┦ */
		boldTop = '\u2526',
		/** Bold bottom half of vertical line, normal top and horizontal line e.g. ┧ */
		boldBottom = '\u2527',
		/** Single horizontal line, bold vertical e.g. ┨ */
		singleBold = '\u2528',
		/** Single bottom half of vertical line, bold top and horizontal line e.g. ┩ */
		lightBottom = '\u2529',
		/** Single top half of vertical line, bold bottom and horizontal line e.g. ┪ */
		lightTop = '\u252A',
		/** Bold right intersection line e.g. ┫ */
		bold = '\u252B',
		/** Double horizontal line normal vertical line e.g. ╡ */
		doubleSingle = '\u2561',
		/** Single horizontal line, double vertical lines e.g. ╢ */
		singleDouble = '\u2562',
		/** Double right interection line e.g. ╣ */
		double = '\u2563',
	}
	/** The middle intersection of a table border ┼ */
	export enum Intersect {
		none = '',
		/** Single line intersection ┼ */
		line = '\u253C',
		/** Bold left horizontal line, rest normal e.g. ┽ */
		left = '\u253D',
		/** Bold right horizontal line, rest normal e.g. ┾ */
		right = '\u253E',
		/** Bold horizontal line, single vertical line e.g. ┿ */
		boldSingle = '\u253F',
		/** Bold top vertical line, rest normal e.g. ╀ */
		top = '\u2540',
		/** Bold bottom vertical line, rest normal e.g. ╁ */
		bottom = '\u2541',
		/** Single horizontal line, bold vertical line e.g. ╂ */
		singleBold = '\u2542',
		/** Bold top vertical line and left horizontal line.  Rest normal e.g. ╃ */
		topLeft = '\u2543',
		/** Bold top vertical line and right horizontal line. Rest normal e.g. ╄ */
		topRight = '\u2544',
		/** Bold bottom vertical line and left horizontal line. Rest normal e.g. ╅ */
		bottomLeft = '\u2545',
		/** Bold bottom vertical line and right horizontal line.  Rest normal e.g. ╆ */
		bottomRight = '\u2546',
		/** Normal vertical bottom line.  Rest bold e.g. ╇ */
		lightBottom = '\u2547',
		/** Normal vertical top line.  Rest bold e.g. ╈ */
		lightTop = '\u2548',
		/** Normal right horizontal line. Rest bold e.g. ╉ */
		lightRight = '\u2549',
		/** Normal left horizontal line.  Rest bold e.g. ╊ */
		lightLeft = '\u254A',
		/** Bold intersection line e.g. ╋ */
		bold = '\u254B',
		/** Double horizontal line, single vertical line e.g. ╪ */
		doubleSingle = '\u256A',
		/** Single horizontal line, double vertical line e.g. ╫ */
		singleDouble = '\u256B',
		/** Double intersection line e.g. ╬ */
		double = '\u256C',
	}
}
