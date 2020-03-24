import { borders } from './borders';
import { BorderTypes } from './enums';

/** An object representing the outer border types. */
export type BorderVars = {
	/** The top outer border type */
	top?: borders.HorizontalLines | false;
	/** The bottom outer border type */
	bottom?: borders.HorizontalLines | false;
	/** The left outer border type */
	left?: borders.VerticalLines | false;
	/** the Right outer border type */
	right?: borders.VerticalLines | false;
};

/**
 * The border types that surrounds an axis
 * (y = vertical, x = horizontal)
 */
export type AxisVars = {
	topY?: borders.VerticalLines | false;
	bottomY?: borders.VerticalLines | false;
	leftX?: borders.HorizontalLines | false;
	rightX?: borders.HorizontalLines | false;
};

export type Options = BordersExtended & {
	/**
	 * The base border type to extend from.
	 * @default single
	 */
	extendFrom?: BorderTypes;
	/**
	 * If set to true, will not inherit from any
	 * but will strictly use explicitly set.
	 * To change default extension property, set extendFrom property.
	 */
	strict?: boolean;
	/**
	 * If ture, and used with strict the table will automatically be built.
	 * Values to build from will be horizontal and vertical and may include:
	 * top, rigth, bottom, left values if supplied.
	 */
	buildTableBorders?: boolean;
	/**
	 * If true and if no Horizontal and or Vertical lines has been selected
	 * a space will be included as border spacing.
	 */
	keepBorderSpace?: boolean;
};

/**
 * The internal and general properties.
 */
export type BorderBase = {
	/**
	 * The row lines
	 */
	horizontal?: borders.HorizontalLines;
	/**
	 * colomun line value
	 */
	vertical?: borders.VerticalLines;

	// * general properties
};
/**
 * The table properties (including collumn and row properties)
 */
export type Borders = BorderBase &
	BorderVars & {
		// * corners
		/**
		 * The top left table border style
		 */
		topLeft?:
			| borders.TopLeftBorder
			| borders.VerticalLines
			| borders.HorizontalLines
			| borders.LeftIntersect
			| false;
		/**
		 * The top right table border style
		 */
		topRight?:
			| borders.TopRightBorder
			| borders.VerticalLines
			| borders.HorizontalLines
			| borders.RightIntersect
			| false;
		/**
		 * The bottom left table border style
		 */
		bottomLeft?:
			| borders.BottomLeftBorder
			| borders.VerticalLines
			| borders.HorizontalLines
			| borders.LeftIntersect
			| false;
		/**
		 * The bottom right table border style
		 */
		bottomRight?:
			| borders.BottomRightBorder
			| borders.VerticalLines
			| borders.HorizontalLines
			| borders.RightIntersect
			| false;
	};
export type BordersExtended = Borders & {
	// * intersects
	/**
	 * The top intersect border type
	 */
	topIntersect?:
		| borders.TopIntersect
		| borders.HorizontalLines
		| borders.VerticalLines
		| borders.Intersect;
	/**
	 * The bottom intersect border type
	 */
	bottomIntersect?:
		| borders.BottomIntersect
		| borders.HorizontalLines
		| borders.VerticalLines
		| borders.Intersect;
	/** The outerborder left intersection line */
	leftIntersect?: borders.LeftIntersect | borders.HorizontalLines | borders.VerticalLines;
	/** The outerborder right intersection line */
	rightIntersect?: borders.RightIntersect | borders.HorizontalLines | borders.VerticalLines;
	/** row inner column-row intersections */
	intersect?: borders.Intersect | borders.VerticalLines | borders.HorizontalLines;

	/**
	 * Internal use only!
	 * Indicate the border size if any.
	 */
	borderSize?: number;
};

/** A Readonly version of BordersExtended */
export type BordersExtendedReadOnly = {
	readonly horizontal: borders.HorizontalLines;
	readonly vertical: borders.VerticalLines;
	readonly topLeft: borders.TopLeftBorder;
	readonly topRight: borders.TopRightBorder;
	readonly bottomLeft: borders.BottomLeftBorder;
	readonly bottomRight: borders.BottomRightBorder;
	readonly top: borders.HorizontalLines;
	readonly bottom: borders.HorizontalLines;
	readonly left: borders.VerticalLines;
	readonly right: borders.VerticalLines;
	readonly topIntersect: borders.TopIntersect;
	readonly bottomIntersect: borders.BottomIntersect;
	readonly leftIntersect: borders.LeftIntersect;
	readonly rightIntersect: borders.RightIntersect;
	readonly intersect: borders.Intersect;
};
