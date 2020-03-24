// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>
// eslint-disable-next-line spaced-comment
/*~ my comment */

import { templates } from '../objects/borderTemplates';
import { getIntersections } from './intersections';
import { BordersExtended, AxisVars, Options, BordersExtendedReadOnly } from '../objects/types';
import { CornerPositions, BorderTypes } from '../objects/enums';
import { borders } from '../objects/borders';

/**
 * Get the top, bottom, left and right properties.
 * @param {BordersExtended} brdrs The borders to use to build table borders on.
 * @returns {BordersExtended}
 */
function buildTableBorder(brdrs: BordersExtended): BordersExtended {
	const border = brdrs;
	/* istanbul ignore else */
	if (brdrs.horizontal) {
		/* istanbul ignore else */
		if (!brdrs.top && brdrs.top !== false) border.top = brdrs.horizontal;
		/* istanbul ignore else */
		if (!brdrs.bottom && brdrs.bottom !== false) border.bottom = brdrs.horizontal;
	} else if (brdrs.top) {
		/* istanbul ignore else */
		if (!brdrs.bottom && brdrs.bottom !== false) border.bottom = brdrs.top;
	} else if (brdrs.bottom) {
		/* istanbul ignore else */
		if (!brdrs.top && brdrs.top !== false) border.top = brdrs.bottom;
	}
	/* istanbul ignore else */
	if (brdrs.vertical) {
		/* istanbul ignore else */
		if (!brdrs.left && brdrs.left !== false) border.left = brdrs.vertical;
		/* istanbul ignore else */
		if (!brdrs.right && brdrs.right !== false) border.right = brdrs.vertical;
	} else if (brdrs.left) {
		/* istanbul ignore else */
		if (!brdrs.right && brdrs.right !== false) border.right = brdrs.left;
	} else if (brdrs.right) {
		/* istanbul ignore else */
		if (!brdrs.left && brdrs.left !== false) border.left = brdrs.right;
	}
	return border;
}

/**
 * Fix the table corners.
 * @param {BordersExtended} brdrs The borders to fix the corners of.
 * @returns {BordersExtended}
 */
export function fixCorners(brdrs: BordersExtended): BordersExtended {
	const border = brdrs;
	// Top Left corner
	if (!brdrs.topLeft && brdrs.topLeft !== false) {
		border.topLeft = getIntersections(brdrs, CornerPositions.topLeft) as borders.TopLeftBorder;
	}

	// Top Right corner
	if (!brdrs.topRight && brdrs.topRight !== false) {
		border.topRight = getIntersections(
			brdrs,
			CornerPositions.topRight,
		) as borders.TopRightBorder;
	}

	// Bottom Left corner
	if (!brdrs.bottomLeft && brdrs.bottomLeft !== false) {
		border.bottomLeft = getIntersections(
			border,
			CornerPositions.bottomLeft,
		) as borders.BottomLeftBorder;
	}

	// Bottom Right corner
	if (!brdrs.bottomRight && brdrs.bottomRight !== false) {
		border.bottomRight = getIntersections(
			brdrs,
			CornerPositions.bottomRight,
		) as borders.BottomRightBorder;
	}
	return border;
}

/**
 * Return borders with intersecion values
 * It usese a combination of vertical & (top/bottom) properties to get top/bottomintersect
 * or horizontal & (left/right) properties to get left/right intersec
 * or horizontal and vertical for 'middle' intersection values.
 * @param brdrs The current border values.
 */
export function fixIntersections(brdrs: BordersExtended): BordersExtended {
	const border = brdrs;
	// get top
	if (brdrs.topIntersect == null) {
		border.topIntersect = getIntersections({
			leftX: border.top,
			rightX: border.top,
			bottomY: border.vertical,
		} as AxisVars) as borders.TopIntersect;
	}

	// get bottom
	if (brdrs.bottomIntersect == null) {
		border.bottomIntersect = getIntersections({
			leftX: border.bottom,
			rightX: border.bottom,
			topY: border.vertical,
		} as AxisVars) as borders.BottomIntersect;
	}

	// get left
	if (brdrs.leftIntersect == null) {
		border.leftIntersect = getIntersections({
			topY: border.left,
			bottomY: border.left,
			rightX: border.horizontal,
		} as AxisVars) as borders.LeftIntersect;
	}

	// get right
	if (brdrs.rightIntersect == null) {
		border.rightIntersect = getIntersections({
			topY: border.right,
			bottomY: border.right,
			leftX: border.horizontal,
		} as AxisVars) as borders.RightIntersect;
	}

	// get middle=
	if (brdrs.intersect == null) {
		border.intersect = getIntersections({
			leftX: border.horizontal,
			rightX: border.horizontal,
			topY: border.vertical,
			bottomY: border.vertical,
		} as AxisVars) as borders.Intersect;
	}

	return border;
}

/**
 * Ensure uniformity between the
 * @param {Options} brdrs The borders to 'clean'.
 * @returns {BordersExtended}
 */
function cleanBorders(brdrs: Options): BordersExtended {
	const border = brdrs;
	// eslint-disable-next-line
	const space = (brdrs.keepBorderSpace ? ' ' : '') as any;
	// eslint-disable-next-line
	const spaceInvers = (space === '' ? ' ' : '') as any;

	if (!brdrs.intersect || brdrs.intersect === spaceInvers) {
		border.intersect = space;
	}
	if (!brdrs.topLeft || brdrs.topLeft === spaceInvers) border.topLeft = space;
	if (!brdrs.top || brdrs.top === spaceInvers) border.top = space;
	if (!brdrs.topIntersect || brdrs.topIntersect === spaceInvers) {
		border.topIntersect = space;
	}
	if (!brdrs.topRight || brdrs.topRight === spaceInvers) border.topRight = space;
	if (!brdrs.right || brdrs.right === spaceInvers) border.right = space;
	if (!brdrs.rightIntersect || brdrs.rightIntersect === spaceInvers) {
		border.rightIntersect = space;
	}
	if (!brdrs.left || brdrs.left === spaceInvers) border.left = space;
	if (!brdrs.leftIntersect || brdrs.leftIntersect === spaceInvers) {
		border.leftIntersect = space;
	}
	if (!brdrs.bottomLeft || brdrs.bottomLeft === spaceInvers) border.bottomLeft = space;
	if (!brdrs.bottom || brdrs.bottom === spaceInvers) border.bottom = space;
	if (!brdrs.bottomIntersect || brdrs.bottomIntersect === spaceInvers) {
		border.bottomIntersect = space;
	}
	if (!brdrs.bottomRight || brdrs.bottomRight === spaceInvers) border.bottomRight = space;

	if (!border.topLeft || border.topLeft === space) {
		if (
			(!border.top || border.top === space) &&
			(!border.topIntersect || border.topIntersect === space) &&
			(!border.topRight || border.topRight === space) &&
			!brdrs.keepBorderSpace
		) {
			border.top = false;
		}
		if (
			(!border.left || border.left === space) &&
			(!border.leftIntersect || border.leftIntersect === space) &&
			(!border.bottomLeft || border.bottomLeft === space) &&
			!brdrs.keepBorderSpace
		) {
			border.left = false;
		}
	}

	if (!border.bottomRight || border.bottomRight === space) {
		if (
			(!border.bottom || border.bottom === space) &&
			(!border.bottomIntersect || border.bottomIntersect === space) &&
			(!border.bottomLeft || border.bottomLeft === space) &&
			!brdrs.keepBorderSpace
		) {
			border.bottom = false;
		}
		if (
			(!border.right || border.right === space) &&
			(!border.rightIntersect || border.rightIntersect === space) &&
			(!border.topRight || border.topRight === space) &&
			!brdrs.keepBorderSpace
		) {
			border.right = false;
		}
	}
	return border;
}

/**
 * Fix all border types by building outer borders from supplied values.
 * (will not acquire any default borders - call getBorders instead)
 * @param {Options} Borders A borders object containing a content and header.
 * @returns {BordersExtended}
 */
export function fixBorders(options: Options): BordersExtended {
	/* istanbul ignore else */
	let c = options;
	/* istanbul ignore else */
	if (options.buildTableBorders) {
		// get normal border info
		c = buildTableBorder(options);
		// fix corners
		c = fixCorners(c);
		// fix intersects (content);
		c = fixIntersections(c);
	}
	// sanitize borders
	c = cleanBorders(c as BordersExtended);

	return c;
}

/**
 * Fixes multiple borders making sure that the bottom border is fixed.
 * It only fixes the bottom border and not the top border
 * └─┴─┘  ->  ├─┼─┤ in first element bottom border
 * ┌─┬─┐  ->  ┌─┬─┐ in next element top border
 * @param {Options[]} options The current Border options to use (call betBorders first)
 * @returns {BordersExtended[]}
 */
export function fixMultiple(options: Options[]): BordersExtended[] {
	let prev: Options;
	if (options.length === 0) return [];
	if (options.length === 1) return [fixBorders(options[0]) as BordersExtended];
	const brdrs: BordersExtended[] = [];
	options.forEach(border => {
		const b = fixBorders(border);
		if (prev) {
			if (prev.bottom || prev.left || prev.right) {
				// left bottom corner
				prev.bottomLeft = getIntersections({
					rightX: prev.bottom,
					topY: prev.left,
					bottomY: b.left,
				} as AxisVars) as borders.BottomLeftBorder;
				if (prev.bottomLeft === borders.BottomLeftBorder.none && prev.keepBorderSpace) {
					prev.bottomLeft = ' ' as borders.BottomLeftBorder;
				}
				// bottom intersect
				prev.bottomIntersect = getIntersections({
					leftX: prev.bottom,
					rightX: prev.bottom,
					topY: prev.vertical,
					bottomY: border.vertical,
				} as AxisVars) as borders.BottomIntersect;
				if (prev.bottomIntersect === borders.BottomIntersect.none && prev.keepBorderSpace) {
					prev.bottomIntersect = ' ' as borders.BottomIntersect;
				}

				prev.bottomRight = getIntersections({
					topY: prev.right,
					bottomY: border.right,
					leftX: prev.bottom,
				} as AxisVars) as borders.BottomRightBorder;
				if (prev.bottomRight === borders.BottomRightBorder.none && prev.keepBorderSpace) {
					prev.bottomRight = ' ' as borders.BottomRightBorder;
				}
			}
			brdrs.push(prev);
			prev = b;
		} else prev = b;
	});
	brdrs.push(prev);

	return brdrs;
}

/**
 * Get a border template by borderTyp
 * The returned value is marked readonly (TS) for safety.
 * @param type The type of border to get
 * @returns {BordersExtendedReadOnly}
 * @internal
 */
export function getBorderGroup(type: BorderTypes): BordersExtendedReadOnly {
	switch (type) {
		case BorderTypes.bold:
			return { ...templates.bold };
		case BorderTypes.boldSingle:
			return { ...templates.boldSingle };
		case BorderTypes.double:
			return { ...templates.double };
		case BorderTypes.doubleSingle:
			return { ...templates.doubleSingle };
		case BorderTypes.round:
			return { ...templates.round };
		case BorderTypes.none:
			return { ...templates.empty };
		case BorderTypes.singleBold:
			return { ...templates.singleBold };
		case BorderTypes.singleDouble:
			return { ...templates.singleDouble };
		default:
			return { ...templates.single };
	}
}

/**
 * Get the border properties from any set of options.
 * @param {Options|Options[]} [options] The border options to ge
 * An array of border Options is assumed to be in order of top to bottom.
 * @param {boolean} array True if called internally from array.
 * @returns {BordersExtended | BordersExtended[]}
 */
function getborder(
	options: Options | Options[],
	array = false,
): BordersExtended | BordersExtended[] {
	/* istanbul ignore else */
	if (Array.isArray(options)) {
		const result: BordersExtended[] = [];
		options.forEach(opts => {
			const b = getborder(opts, true);
			/* istanbul ignore next */
			if (Array.isArray(b)) result.push(...b);
			else result.push(b);
		});
		return fixMultiple(result);
	}

	const { extendFrom = BorderTypes.single, strict } = options;
	let brders: BordersExtended;

	if (!strict) brders = { ...getBorderGroup(extendFrom), ...options };
	else brders = options;

	// fix if needs be and return
	return array ? brders : fixBorders(brders);
}

/**
 * Get the border properties from any set of options.
 * @param {Options} [options] The border options to ge
 * @returns {BordersExtended}
 */
export function getBorder(options?: Options): BordersExtended;
/**
 * Get the border properties from any set of options.
 * @param {Options[]} [options] The border options to ge
 * An array of border Options is assumed to be in order of top to bottom.
 * The bottom border of every 'previous element in the array will be altered to match the
 * 'next' elemen
 * @returns {BordersExtended[]}
 */
export function getBorder(options: Options[]): BordersExtended[];
export function getBorder(options: Options | Options[] = {}): BordersExtended | BordersExtended[] {
	return getborder(options);
}
