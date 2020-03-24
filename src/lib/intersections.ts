import { borders } from '../objects/borders';
import { CornerPositions } from '../objects/enums';
import { BorderVars, AxisVars } from '../objects/types';

const HNONE = 1 << 0;
const VNONE = 1 << 1;
const HSINGLE = 1 << 2;
const HDOUBLE = 1 << 3;
const HBOLD = 1 << 4;
const VSINGLE = 1 << 5;
const VDOUBLE = 1 << 6;
const VBOLD = 1 << 7;
const HSPECIAL = 1 << 8;
const VSPECIAL = 1 << 9;

/**
 * Returns a bitwise representation of a horizontal and vertical combination.
 * @param {HorizontalLines|false} horizontal The Horizontal Line value.
 * @param {VerticalLines|false} vertical The Vertical Line value
 * @returns {number}
 */
function getBorderInt(
	horizontal: borders.HorizontalLines | false = borders.HorizontalLines.none,
	vertical: borders.VerticalLines | false = borders.VerticalLines.none,
): number {
	let result = 0;
	switch (horizontal) {
		case borders.HorizontalLines.dash:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.quadDash:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.trippleDash:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.line:
			result |= HSINGLE;
			break;
		case borders.HorizontalLines.double:
			result |= HDOUBLE;
			break;
		case borders.HorizontalLines.quadDashBold:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.dashBold:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.trippleDashBold:
			result |= HSPECIAL;
		// break omitted
		case borders.HorizontalLines.bold:
			result |= HBOLD;
			break;
		default:
			result |= HNONE;
			break;
	}

	switch (vertical) {
		case borders.VerticalLines.dash:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.quadDash:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.trippleDash:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.line:
			result |= VSINGLE;
			break;
		case borders.VerticalLines.double:
			result |= VDOUBLE;
			break;
		case borders.VerticalLines.quadDashBold:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.dashBold:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.trippleDashBold:
			result |= VSPECIAL;
		// break omitted
		case borders.VerticalLines.bold:
			result |= VBOLD;
			break;
		default:
			result |= VNONE;
			break;
	}
	return result;
}

/**
 * Get corner types based on values of top, right, left and bottom lines (square) []
 * @param {BorderVars} param0 The normal corner intersections.
 * @param {e.CornerPositions} position The corner position of the intersection to ge
 * @returns {string}
 */
export function getIntersections(brders: BorderVars, position: CornerPositions): string;
/**
 * Get an intersection type based on Lines on an axis ┼
 * with vertical lines on the y-axis and horizontal on the x-axis
 * @param {AxisVars} param0 The values around an axis.
 * @returns {string}
 */
export function getIntersections(axis: AxisVars): string;
export function getIntersections(
	brders: BorderVars | AxisVars,
	position = CornerPositions.none,
): string {
	let topY: borders.VerticalLines | false;
	let bottomY: borders.VerticalLines | false;
	let rightX: borders.HorizontalLines | false;
	let leftX: borders.HorizontalLines | false;
	if (
		(brders as AxisVars).topY ||
		(brders as AxisVars).bottomY ||
		(brders as AxisVars).leftX ||
		(brders as AxisVars).rightX
	) {
		/* istanbul ignore else */
		if ((brders as AxisVars).topY) topY = (brders as AxisVars).topY;
		/* istanbul ignore else */
		if ((brders as AxisVars).bottomY) bottomY = (brders as AxisVars).bottomY;
		/* istanbul ignore else */
		if ((brders as AxisVars).leftX) leftX = (brders as AxisVars).leftX;
		/* istanbul ignore else */
		if ((brders as AxisVars).rightX) rightX = (brders as AxisVars).rightX;
	} else {
		/* istanbul ignore else */
		if ((brders as BorderVars).left) {
			/* istanbul ignore else */
			if (position === CornerPositions.topLeft) bottomY = (brders as BorderVars).left;
			/* istanbul ignore else */
			if (position === CornerPositions.bottomLeft) topY = (brders as BorderVars).left;
		}
		/* istanbul ignore else */
		if ((brders as BorderVars).right) {
			/* istanbul ignore else */
			if (position === CornerPositions.topRight) bottomY = (brders as BorderVars).right;
			/* istanbul ignore else */
			if (position === CornerPositions.bottomRight) topY = (brders as BorderVars).right;
		}
		/* istanbul ignore else */
		if ((brders as BorderVars).top) {
			/* istanbul ignore else */
			if (position === CornerPositions.topLeft) rightX = (brders as BorderVars).top;
			/* istanbul ignore else */
			if (position === CornerPositions.topRight) leftX = (brders as BorderVars).top;
		}
		/* istanbul ignore else */
		if ((brders as BorderVars).bottom) {
			/* istanbul ignore else */
			if (position === CornerPositions.bottomLeft) {
				rightX = (brders as BorderVars).bottom;
			}
			/* istanbul ignore else */
			if (position === CornerPositions.bottomRight) {
				leftX = (brders as BorderVars).bottom;
			}
		}
	}
	// get top left quadrant
	const Q1 = getBorderInt(leftX, topY);
	// get bottom right quadrant
	const Q2 = getBorderInt(rightX, bottomY);

	/* istanbul ignore else */
	if (Q1 & HNONE) {
		/* istanbul ignore else */
		if (Q1 & VNONE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VSINGLE || Q2 & VDOUBLE) return borders.VerticalLines.linedown;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.VerticalLines.linedownBold;
				return '';
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineright;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopLeftBorder.line;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopLeftBorder.singleDouble;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.TopLeftBorder.singleBold;
			} else if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineright;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopLeftBorder.doubleSingle;
				// no double bold... select double
				return borders.TopLeftBorder.double;
			} else if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.linerightBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopLeftBorder.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopLeftBorder.double;
				// noe bold double... select bold
				return borders.TopLeftBorder.bold;
			}
		} else if (Q1 & VSINGLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.VerticalLines.lineup;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) {
					/* istanbul ignore else */
					if (Q1 & VSPECIAL) return topY as string;
					/* istanbul ignore else */
					if (Q2 & VSPECIAL) return bottomY as string;
					return borders.VerticalLines.line;
				}
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.VerticalLines.double;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.VerticalLines.lineBold;
			} else if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.line;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.LeftIntersect.singleDouble;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.LeftIntersect.line;
				return borders.LeftIntersect.boldBottom;
			} else if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE || Q2 & VBOLD) return borders.LeftIntersect.doubleSingle;
				return borders.LeftIntersect.double;
			} else if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.LeftIntersect.lightTop;
				// select horizontal top
				return borders.LeftIntersect.boldSingle;
			}
		} else if (Q1 & VDOUBLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				// half line
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.VerticalLines.lineup;
				// no double bold / double single... return double (overpower bold and single)
				return borders.VerticalLines.double;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.singleDouble;
				return borders.LeftIntersect.singleDouble;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.double;
				return borders.LeftIntersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomLeftBorder.double;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.LeftIntersect.bold;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.LeftIntersect.double;

				return borders.LeftIntersect.boldSingle;
			}
		} else if (Q1 & VBOLD) {
			if (Q2 & HNONE) {
				if (Q2 & VNONE) return borders.VerticalLines.lineupBold;
				if (Q2 & VSINGLE) return borders.VerticalLines.boldLine;
				if (Q2 & VDOUBLE) return borders.VerticalLines.double;
				if (Q2 & VBOLD) {
					if (Q1 & VSPECIAL) return topY as string;
					if (Q2 & VSPECIAL) return bottomY as string;
					return borders.VerticalLines.bold;
				}
			} else if (Q2 & HSINGLE) {
				if (Q2 & VNONE) return borders.BottomLeftBorder.singleBold;
				if (Q2 & VSINGLE) return borders.LeftIntersect.boldTop;
				if (Q2 & VDOUBLE) return borders.LeftIntersect.singleDouble;
				return borders.LeftIntersect.singleBold;
			} else if (Q2 & HDOUBLE) {
				if (Q2 & VNONE) return borders.BottomLeftBorder.double;
				if (Q2 & VDOUBLE) return borders.LeftIntersect.double;
				if (Q2 & VSINGLE) return borders.LeftIntersect.doubleSingle;
				return borders.LeftIntersect.singleBold;
			} else if (Q2 & HBOLD) {
				if (Q2 & VNONE) return borders.BottomLeftBorder.bold;
				if (Q2 & VSINGLE) return borders.LeftIntersect.lightBottom;
				return borders.LeftIntersect.bold;
			}
		}
	} else if (Q1 & HSINGLE) {
		/* istanbul ignore else */
		if (Q1 & VNONE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				// top or right
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineleft;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopRightBorder.line;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopRightBorder.singleDouble;
				return borders.TopRightBorder.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				// top
				/* istanbul ignore else */
				if (Q2 & VNONE) {
					/* istanbul ignore else */
					if (Q1 & HSPECIAL) return leftX as borders.HorizontalLines;
					/* istanbul ignore else */
					if (Q2 & HSPECIAL) return rightX as borders.HorizontalLines;
					return borders.HorizontalLines.line;
				}
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.TopIntersect.singleBold;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.singleDouble;
				return borders.TopIntersect.line;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.doubleSingle;
				return borders.TopIntersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.lightLeft;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.singleDouble;
				return borders.TopIntersect.boldRight;
			}
		} else if (Q1 & VSINGLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.line;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.line;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.singleDouble;
				return borders.RightIntersect.boldBottom;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.line;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.bottom;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.singleDouble;
				return borders.Intersect.line;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.bottom;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.boldRight;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.right;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.right;
				return borders.Intersect.bottomRight;
			}
		} else if (Q1 & VDOUBLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.singleDouble;
				return borders.RightIntersect.singleDouble;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleDouble;
				return borders.Intersect.singleDouble;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.double;
				return borders.Intersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleDouble;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.bottomRight;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.singleDouble;
				return borders.Intersect.right;
			}
		} else if (Q1 & VBOLD) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.singleBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.boldTop;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.singleDouble;
				return borders.RightIntersect.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.top;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.singleDouble;
				return borders.Intersect.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.top;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.singleBold;
			} else if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.lightLeft;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.lightLeft;
				return borders.Intersect.topRight;
			}
		}
	} else if (Q1 & HDOUBLE) {
		/* istanbul ignore else */
		if (Q1 & VNONE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineleft;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopRightBorder.doubleSingle;
				return borders.TopRightBorder.double;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.double;
				return borders.TopIntersect.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.doubleSingle;
				/* istanbul ignore else */
				return borders.TopIntersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.double;
				return borders.TopIntersect.bold;
			}
		} else if (Q1 & VSINGLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.double;
				return borders.RightIntersect.doubleSingle;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.bottom;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.doubleSingle;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.bottomRight;
			}
		} else if (Q1 & VDOUBLE) {
			/* istanbul ignore else */
			if (Q2 & VNONE) {
				/* istanbul ignore else */
				if (Q2 & HNONE) return borders.BottomRightBorder.double;
				/* istanbul ignore else */
				if (Q2 & HSINGLE) return borders.BottomIntersect.double;
				/* istanbul ignore else */
				if (Q2 & HDOUBLE) return borders.BottomIntersect.double;
				return borders.BottomIntersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HNONE) return borders.RightIntersect.double;

			return borders.Intersect.double;
		} else if (Q1 & VBOLD) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.double;
				return borders.RightIntersect.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.top;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.singleBold;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				return borders.Intersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.bold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.topRight;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.lightLeft;
			}
		}
	} else if (Q1 & HBOLD) {
		/* istanbul ignore else */
		if (Q1 & VNONE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.lineleftBold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopRightBorder.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopRightBorder.double;
				return borders.TopRightBorder.bold;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.boldLine;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.TopIntersect.lightRight;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.singleDouble;
				return borders.TopIntersect.boldLeft;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.HorizontalLines.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.TopIntersect.double;
				return borders.TopIntersect.bold;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) {
					/* istanbul ignore else */
					if (Q1 & HSPECIAL) return leftX as string;
					/* istanbul ignore else */
					if (Q2 & HSPECIAL) return rightX as string;
					return borders.HorizontalLines.bold;
				}
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.TopIntersect.boldSingle;
				return borders.TopIntersect.bold;
			}
		} else if (Q1 & VSINGLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.boldSingle;
				return borders.RightIntersect.lightTop;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.boldLeft;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.left;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.left;
				return borders.Intersect.bottomLeft;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.doubleSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.bottomLeft;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.boldSingle;
				return borders.Intersect.lightTop;
			}
		} else if (Q1 & VDOUBLE) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.double;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.RightIntersect.double;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.RightIntersect.bold;
			} else if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.singleDouble;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.left;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.singleDouble;
				return borders.Intersect.bottomLeft;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.double;
				return borders.Intersect.double;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.bold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.boldSingle;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.lightTop;
			}
		} else if (Q1 & VBOLD) {
			/* istanbul ignore else */
			if (Q2 & HNONE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomRightBorder.bold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.RightIntersect.lightBottom;
				return borders.RightIntersect.bold;
			}
			/* istanbul ignore else */
			if (Q2 & HSINGLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.lightRight;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.lightRight;
				return borders.Intersect.topLeft;
			}
			/* istanbul ignore else */
			if (Q2 & HDOUBLE) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.bold;
				/* istanbul ignore else */
				if (Q2 & VSINGLE) return borders.Intersect.topLeft;
				/* istanbul ignore else */
				if (Q2 & VDOUBLE) return borders.Intersect.double;
				return borders.Intersect.lightRight;
			}
			/* istanbul ignore else */
			if (Q2 & HBOLD) {
				/* istanbul ignore else */
				if (Q2 & VNONE) return borders.BottomIntersect.bold;
				/* istanbul ignore else */
				if (Q2 & VBOLD) return borders.Intersect.bold;
				return borders.Intersect.lightBottom;
			}
		}
	}
	/* istanbul ignore next */
	return '';
}
