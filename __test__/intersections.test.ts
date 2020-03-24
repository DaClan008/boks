import { borders } from '../src/objects/borders';

import { getIntersections } from '../src/lib/intersections';
import { CornerPositions } from '../src/objects/enums';

describe('should discover corners', () => {
	describe('TopLeft', () => {
		test('none', () => {
			const border = {
				left: borders.VerticalLines.none,
				top: borders.HorizontalLines.none,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.none,
			);
		});
		test('normal', () => {
			let border = {
				left: borders.VerticalLines.line,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.line,
			);

			border.left = borders.VerticalLines.dash;
			border.top = borders.HorizontalLines.trippleDash;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.line,
			);

			border.left = borders.VerticalLines.quadDash;
			border.top = borders.HorizontalLines.quadDash;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.line,
			);
		});
		test('bold', () => {
			let border = {
				left: borders.VerticalLines.bold,
				top: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.bold,
			);

			border.left = borders.VerticalLines.dashBold;
			border.top = borders.HorizontalLines.trippleDashBold;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.bold,
			);

			border.left = borders.VerticalLines.quadDashBold;
			border.top = borders.HorizontalLines.quadDashBold;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.bold,
			);
		});
		test('double', () => {
			const border = {
				left: borders.VerticalLines.double,
				top: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.double,
			);

			border.left = borders.VerticalLines.double;
			border.top = borders.HorizontalLines.bold;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.double,
			);

			border.left = borders.VerticalLines.bold;
			border.top = borders.HorizontalLines.double;
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.double,
			);
		});

		test('boldSingle', () => {
			const border = {
				left: borders.VerticalLines.line,
				top: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.boldSingle,
			);
		});

		test('singleBold', () => {
			const border = {
				left: borders.VerticalLines.bold,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.singleBold,
			);
		});

		test('doubleSingle', () => {
			const border = {
				left: borders.VerticalLines.line,
				top: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.doubleSingle,
			);
		});

		test('singleDouble', () => {
			const border = {
				left: borders.VerticalLines.double,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topLeft)).toEqual(
				borders.TopLeftBorder.singleDouble,
			);
		});

		test('only vertical', () => {
			const border = {
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.VerticalLines.linedown);

			const border2 = {
				left: borders.VerticalLines.bold,
			};
			expect(getIntersections(border2, CornerPositions.topLeft)).toEqual(
				borders.VerticalLines.linedownBold,
			);

			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.VerticalLines.linedown);

			border2.left = borders.VerticalLines.dash;
			expect(getIntersections(border2, CornerPositions.topLeft)).toEqual(
				borders.VerticalLines.linedown,
			);
		});
		test('only Horizontal (BOTTOM) [Must switch]', () => {
			const border = {
				rightX: borders.HorizontalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineright);
			const border2 = {
				top: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border2, CornerPositions.topLeft)).toEqual(
				borders.HorizontalLines.linerightBold,
			);

			border.rightX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineright);

			border2.top = borders.HorizontalLines.dash;
			expect(getIntersections(border2, CornerPositions.topLeft)).toEqual(
				borders.HorizontalLines.lineright,
			);
		});
	});

	describe('TopRight', () => {
		test('none', () => {
			const border = {
				right: borders.VerticalLines.none,
				top: borders.HorizontalLines.none,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.none,
			);
		});
		test('normal', () => {
			let border = {
				right: borders.VerticalLines.line,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.line,
			);

			border.right = borders.VerticalLines.dash;
			border.top = borders.HorizontalLines.trippleDash;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.line,
			);

			border.right = borders.VerticalLines.quadDash;
			border.top = borders.HorizontalLines.quadDash;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.line,
			);
		});
		test('bold', () => {
			let border = {
				right: borders.VerticalLines.bold,
				top: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.bold,
			);

			border.right = borders.VerticalLines.dashBold;
			border.top = borders.HorizontalLines.trippleDashBold;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.bold,
			);

			border.right = borders.VerticalLines.quadDashBold;
			border.top = borders.HorizontalLines.quadDashBold;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.bold,
			);
		});
		test('double', () => {
			const border = {
				right: borders.VerticalLines.double,
				top: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.double,
			);

			border.right = borders.VerticalLines.double;
			border.top = borders.HorizontalLines.bold;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.double,
			);

			border.right = borders.VerticalLines.bold;
			border.top = borders.HorizontalLines.double;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.double,
			);
		});

		test('boldSingle', () => {
			const border = {
				right: borders.VerticalLines.line,
				top: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.boldSingle,
			);
		});

		test('singleBold', () => {
			const border = {
				right: borders.VerticalLines.bold,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.singleBold,
			);
		});

		test('doubleSingle', () => {
			const border = {
				right: borders.VerticalLines.line,
				top: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.doubleSingle,
			);
		});

		test('singleDouble', () => {
			const border = {
				right: borders.VerticalLines.double,
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.TopRightBorder.singleDouble,
			);
		});

		test('only vertical (RIGHT)', () => {
			const border = {
				right: borders.VerticalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.VerticalLines.linedown,
			);
			const border2 = {
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.linedownBold);

			border.right = borders.VerticalLines.double;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.VerticalLines.linedown,
			);

			border2.bottomY = borders.VerticalLines.dash;
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.linedown);
		});
		test('only Horizontal (TOP)', () => {
			const border = {
				top: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.HorizontalLines.lineleft,
			);
			const border2 = {
				leftX: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border2)).toEqual(borders.HorizontalLines.lineleftBold);

			border.top = borders.HorizontalLines.double;
			expect(getIntersections(border, CornerPositions.topRight)).toEqual(
				borders.HorizontalLines.lineleft,
			);

			border2.leftX = borders.HorizontalLines.dash;
			expect(getIntersections(border2)).toEqual(borders.HorizontalLines.lineleft);
		});
	});

	describe('BottomLeft', () => {
		test('none', () => {
			const border = {
				left: borders.VerticalLines.none,
				bottom: borders.HorizontalLines.none,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.none,
			);
		});
		test('normal', () => {
			let border = {
				left: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.line,
			);

			border.left = borders.VerticalLines.dash;
			border.bottom = borders.HorizontalLines.trippleDash;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.line,
			);

			border.left = borders.VerticalLines.quadDash;
			border.bottom = borders.HorizontalLines.quadDash;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.line,
			);
		});
		test('bold', () => {
			const border = {
				left: borders.VerticalLines.bold,
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.bold,
			);

			border.left = borders.VerticalLines.dashBold;
			border.bottom = borders.HorizontalLines.trippleDashBold;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.bold,
			);

			border.left = borders.VerticalLines.quadDashBold;
			border.bottom = borders.HorizontalLines.quadDashBold;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.bold,
			);
		});
		test('double', () => {
			const border = {
				left: borders.VerticalLines.double,
				bottom: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.double,
			);

			border.left = borders.VerticalLines.double;
			border.bottom = borders.HorizontalLines.bold;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.double,
			);

			border.left = borders.VerticalLines.bold;
			border.bottom = borders.HorizontalLines.double;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.double,
			);
		});

		test('boldSingle', () => {
			const border = {
				left: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.boldSingle,
			);
		});

		test('singleBold', () => {
			const border = {
				left: borders.VerticalLines.bold,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.singleBold,
			);
		});

		test('doubleSingle', () => {
			const border = {
				left: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.doubleSingle,
			);
		});

		test('singleDouble', () => {
			const border = {
				left: borders.VerticalLines.double,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.BottomLeftBorder.singleDouble,
			);
		});

		test('only vertical', () => {
			const border = {
				left: borders.VerticalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.VerticalLines.lineup,
			);
			const border2 = {
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.lineupBold);

			border.left = borders.VerticalLines.double;
			expect(getIntersections(border, CornerPositions.bottomLeft)).toEqual(
				borders.VerticalLines.lineup,
			);

			border2.topY = borders.VerticalLines.dash;
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.lineup);
		});
		test('only Horizontal', () => {
			const border = {
				rightX: borders.HorizontalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineright);

			const border2 = {
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border2, CornerPositions.bottomLeft)).toEqual(
				borders.HorizontalLines.linerightBold,
			);

			border.rightX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineright);

			border2.bottom = borders.HorizontalLines.dash;
			expect(getIntersections(border2, CornerPositions.bottomLeft)).toEqual(
				borders.HorizontalLines.lineright,
			);
		});
	});

	describe('BottomRight', () => {
		test('none', () => {
			const border = {
				right: borders.VerticalLines.none,
				bottom: borders.HorizontalLines.none,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.none,
			);
		});
		test('normal', () => {
			let border = {
				right: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.line,
			);

			border.right = borders.VerticalLines.dash;
			border.bottom = borders.HorizontalLines.trippleDash;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.line,
			);

			border.right = borders.VerticalLines.quadDash;
			border.bottom = borders.HorizontalLines.quadDash;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.line,
			);
		});
		test('bold', () => {
			const border = {
				right: borders.VerticalLines.bold,
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.bold,
			);

			border.right = borders.VerticalLines.dashBold;
			border.bottom = borders.HorizontalLines.trippleDashBold;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.bold,
			);

			border.right = borders.VerticalLines.quadDashBold;
			border.bottom = borders.HorizontalLines.quadDashBold;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.bold,
			);
		});
		test('double', () => {
			const border = {
				right: borders.VerticalLines.double,
				bottom: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.double,
			);

			border.right = borders.VerticalLines.double;
			border.bottom = borders.HorizontalLines.bold;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.double,
			);

			border.right = borders.VerticalLines.bold;
			border.bottom = borders.HorizontalLines.double;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.double,
			);
		});

		test('boldSingle', () => {
			const border = {
				right: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.boldSingle,
			);
		});

		test('singleBold', () => {
			const border = {
				right: borders.VerticalLines.bold,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.singleBold,
			);
		});

		test('doubleSingle', () => {
			const border = {
				right: borders.VerticalLines.line,
				bottom: borders.HorizontalLines.double,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.doubleSingle,
			);
		});

		test('singleDouble', () => {
			const border = {
				right: borders.VerticalLines.double,
				bottom: borders.HorizontalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.BottomRightBorder.singleDouble,
			);
		});

		test('only vertical', () => {
			const border = {
				right: borders.VerticalLines.line,
			};
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.VerticalLines.lineup,
			);
			const border2 = {
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.lineupBold);

			border.right = borders.VerticalLines.double;
			expect(getIntersections(border, CornerPositions.bottomRight)).toEqual(
				borders.VerticalLines.lineup,
			);

			border2.topY = borders.VerticalLines.dash;
			expect(getIntersections(border2)).toEqual(borders.VerticalLines.lineup);
		});
		test('only Horizontal', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineleft);

			const border2 = {
				bottom: borders.HorizontalLines.bold,
			};
			expect(getIntersections(border2, CornerPositions.bottomRight)).toEqual(
				borders.HorizontalLines.lineleftBold,
			);

			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineleft);

			border2.bottom = borders.HorizontalLines.dash;
			expect(getIntersections(border2, CornerPositions.bottomRight)).toEqual(
				borders.HorizontalLines.lineleft,
			);
		});
	});
});

describe('should discover border intersections', () => {
	describe('TopIntersection', () => {
		test('normal line', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.line);

			border.leftX = borders.HorizontalLines.dash;
			border.rightX = borders.HorizontalLines.trippleDash;
			border.bottomY = borders.VerticalLines.quadDash;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.line);
		});
		test('bold left', () => {
			const border = {
				leftX: borders.HorizontalLines.dashBold,
				rightX: borders.HorizontalLines.dash,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.boldLeft);
		});

		test('bold right', () => {
			const border = {
				leftX: borders.HorizontalLines.quadDash,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.boldRight);
		});

		test('bold horizontal line vertical', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.boldSingle);
		});

		test('single horizontal bold vertical', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.singleBold);
			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.singleBold);
		});

		test('light right rest bold', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.lightRight);
		});

		test('light left rest bold', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.lightLeft);
		});

		test('bold', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.bold);
			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.bold);
			border.leftX = borders.HorizontalLines.bold;
			border.rightX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.bold);
			border.rightX = borders.HorizontalLines.bold;
			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.bold);
		});

		test('double', () => {
			const border = {
				leftX: borders.HorizontalLines.double,
				rightX: borders.HorizontalLines.double,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
			border.bottomY = borders.VerticalLines.double;
			border.leftX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
			border.leftX = borders.HorizontalLines.double;
			border.rightX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
			border.rightX = borders.HorizontalLines.double;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.double);
		});

		test('horizontal line and vertical double line', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.dash,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.singleDouble);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.singleDouble);
			border.rightX = borders.HorizontalLines.line;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.singleDouble);
		});

		test('horizontal double and vertical line', () => {
			const border = {
				leftX: borders.HorizontalLines.double,
				rightX: borders.HorizontalLines.double,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.TopIntersect.doubleSingle);
			border.leftX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.doubleSingle);
			border.leftX = borders.HorizontalLines.double;
			border.rightX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.doubleSingle);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.doubleSingle);
			border.rightX = borders.HorizontalLines.double;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.TopIntersect.doubleSingle);
		});
	});

	describe('BottomIntersection', () => {
		test('normal line', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.line);

			border.leftX = borders.HorizontalLines.dash;
			border.rightX = borders.HorizontalLines.trippleDash;
			border.topY = borders.VerticalLines.quadDash;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.line);
		});
		test('bold left', () => {
			const border = {
				leftX: borders.HorizontalLines.dashBold,
				rightX: borders.HorizontalLines.dash,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.boldLeft);
		});

		test('bold right', () => {
			const border = {
				leftX: borders.HorizontalLines.quadDash,
				rightX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.boldRight);
		});

		test('bold horizontal line vertical', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.boldSingle);
		});

		test('single horizontal bold vertical', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleBold);
			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleBold);
			border.rightX = borders.HorizontalLines.double;
			border.leftX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleBold);
		});

		test('light right rest bold', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.lightRight);
		});

		test('light left rest bold', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.lightLeft);
		});

		test('bold', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				rightX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.bold);
			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.bold);
			border.leftX = borders.HorizontalLines.bold;
			border.rightX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.bold);
			border.rightX = borders.HorizontalLines.bold;
			border.topY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.bold);
		});

		test('double', () => {
			const border = {
				leftX: borders.HorizontalLines.double,
				rightX: borders.HorizontalLines.double,
				topY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
			border.topY = borders.VerticalLines.double;
			border.leftX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
			border.leftX = borders.HorizontalLines.double;
			border.rightX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
			border.rightX = borders.HorizontalLines.double;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.double);
		});

		test('horizontal line and vertical double line', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				rightX: borders.HorizontalLines.dash,
				topY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleDouble);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleDouble);
			border.rightX = borders.HorizontalLines.line;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.singleDouble);
		});

		test('horizontal double and vertical line', () => {
			const border = {
				leftX: borders.HorizontalLines.double,
				rightX: borders.HorizontalLines.double,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.doubleSingle);
			border.leftX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.doubleSingle);
			border.leftX = borders.HorizontalLines.double;
			border.rightX = borders.HorizontalLines.line;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.doubleSingle);
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.doubleSingle);
			border.rightX = borders.HorizontalLines.double;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.BottomIntersect.doubleSingle);
		});
	});

	describe('LeftIntersection', () => {
		test('normal line', () => {
			const border = {
				bottomY: borders.VerticalLines.line,
				rightX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.line);

			border.bottomY = borders.VerticalLines.dash;
			border.rightX = borders.HorizontalLines.trippleDash;
			border.topY = borders.VerticalLines.quadDash;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.line);
		});
		test('bold Top', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				rightX: borders.HorizontalLines.dash,
				bottomY: borders.VerticalLines.dash,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.boldTop);
		});

		test('bold bottom', () => {
			const border = {
				topY: borders.VerticalLines.line,
				bottomY: borders.VerticalLines.quadDashBold,
				rightX: borders.HorizontalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.boldBottom);
		});

		test('bold horizontal line vertical', () => {
			const border = {
				bottomY: borders.VerticalLines.line,
				rightX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.boldSingle);
			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.boldSingle);
			border.bottomY = borders.VerticalLines.line;
			border.topY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.boldSingle);
		});

		test('line horizontal bold vertical', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				rightX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleBold);
			border.rightX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleBold);
		});

		test('light top', () => {
			const border = {
				topY: borders.VerticalLines.line,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.lightTop);
		});

		test('light bottom', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.lightBottom);
		});

		test('bold', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				rightX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.bold);
			border.topY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.bold);
			border.topY = borders.VerticalLines.bold;
			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.bold);
		});

		test('doubleSingle', () => {
			const border = {
				topY: borders.VerticalLines.line,
				rightX: borders.HorizontalLines.double,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.doubleSingle);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.doubleSingle);
			border.topY = borders.VerticalLines.line;
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.doubleSingle);
		});

		test('singleDouble', () => {
			const border = {
				topY: borders.VerticalLines.double,
				rightX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleDouble);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleDouble);
			border.topY = borders.VerticalLines.double;
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleDouble);
			border.bottomY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleDouble);
			border.bottomY = borders.VerticalLines.double;
			border.topY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.singleDouble);
		});
		test('double', () => {
			const border = {
				topY: borders.VerticalLines.double,
				rightX: borders.HorizontalLines.double,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
			border.topY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
			border.topY = borders.VerticalLines.double;
			border.bottomY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
			border.bottomY = borders.VerticalLines.double;
			border.rightX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.LeftIntersect.double);
		});
	});

	describe('RightIntersection', () => {
		test('normal line', () => {
			const border = {
				bottomY: borders.VerticalLines.line,
				leftX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.line);

			border.bottomY = borders.VerticalLines.dash;
			border.leftX = borders.HorizontalLines.trippleDash;
			border.topY = borders.VerticalLines.quadDash;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.line);
		});
		test('bold Top', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				leftX: borders.HorizontalLines.dash,
				bottomY: borders.VerticalLines.dash,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.boldTop);
		});

		test('bold bottom', () => {
			const border = {
				leftX: borders.HorizontalLines.line,
				topY: borders.VerticalLines.line,
				bottomY: borders.VerticalLines.quadDashBold,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.boldBottom);
		});

		test('bold horizontal line vertical', () => {
			const border = {
				bottomY: borders.VerticalLines.line,
				leftX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.boldSingle);
			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.boldSingle);
			border.bottomY = borders.VerticalLines.line;
			border.topY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.boldSingle);
		});

		test('line horizontal bold vertical', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				leftX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleBold);
			border.leftX = borders.HorizontalLines.double;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleBold);
		});

		test('light top', () => {
			const border = {
				leftX: borders.HorizontalLines.bold,
				topY: borders.VerticalLines.line,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.lightTop);
		});

		test('light bottom', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				leftX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.lightBottom);
		});

		test('bold', () => {
			const border = {
				topY: borders.VerticalLines.bold,
				leftX: borders.HorizontalLines.bold,
				bottomY: borders.VerticalLines.bold,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.bold);
			border.topY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.bold);
			border.topY = borders.VerticalLines.bold;
			border.bottomY = borders.VerticalLines.double;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.bold);
		});

		test('doubleSingle', () => {
			const border = {
				leftX: borders.HorizontalLines.double,
				topY: borders.VerticalLines.line,
				bottomY: borders.VerticalLines.line,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.doubleSingle);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.doubleSingle);
			border.topY = borders.VerticalLines.line;
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.doubleSingle);
		});

		test('singleDouble', () => {
			const border = {
				topY: borders.VerticalLines.double,
				leftX: borders.HorizontalLines.line,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleDouble);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleDouble);
			border.topY = borders.VerticalLines.double;
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleDouble);
			border.bottomY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleDouble);
			border.bottomY = borders.VerticalLines.double;
			border.topY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.singleDouble);
		});
		test('double', () => {
			const border = {
				topY: borders.VerticalLines.double,
				leftX: borders.HorizontalLines.double,
				bottomY: borders.VerticalLines.double,
			};
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
			border.topY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
			border.topY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
			border.topY = borders.VerticalLines.double;
			border.bottomY = borders.VerticalLines.line;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
			border.bottomY = borders.VerticalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
			border.bottomY = borders.VerticalLines.double;
			border.leftX = borders.HorizontalLines.bold;
			expect(getIntersections(border)).toEqual(borders.RightIntersect.double);
		});
	});
});

describe('should discover middle border intersections', () => {
	test('line', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.line);
	});
	test('left [bold left rest normal]', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.left);
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.left);
		border.bottomY = borders.VerticalLines.line;
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.left);
	});

	test('right [bold right rest normal]', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.right);
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.right);
		border.bottomY = borders.VerticalLines.line;
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.right);
	});

	test('top [bold top rest normal]', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.top);
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.top);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.top);
	});

	test('bottom [bold bottom rest normal]', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.bottom);
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottom);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottom);
	});

	test('bold horizontal, normal vertical', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.boldSingle);
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.boldSingle);
		border.topY = borders.VerticalLines.line;
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.boldSingle);
	});

	test('normal horizontal, bold vertical', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.singleBold);
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleBold);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleBold);
	});

	test('top Left (top & left = bold bottom & right = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.topLeft);
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.topLeft);
		border.rightX = borders.HorizontalLines.line;
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.topLeft);
	});

	test('top Right (top & Right = bold bottom & left = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.topRight);
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.topRight);
		border.leftX = borders.HorizontalLines.line;
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.topRight);
	});

	test('Bottom left (bottom & left = bold top & right = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomLeft);
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomLeft);
		border.topY = borders.VerticalLines.line;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomLeft);
	});

	test('Bottom Right (bottom & right = bold top & left = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomRight);
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomRight);
		border.topY = borders.VerticalLines.line;
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.bottomRight);
	});

	test('light left (all bold except left = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.lightLeft);
		border.leftX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.lightLeft);
	});

	test('light top (all bold except top = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.lightTop);
		border.topY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.lightTop);
	});

	test('light rigth (all bold except right = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.lightRight);
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.lightRight);
	});

	test('light bottom (all bold except bottom = normal)', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.lightBottom);
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.lightBottom);
	});

	test('bold', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			topY: borders.VerticalLines.bold,
			rightX: borders.HorizontalLines.bold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.bold);
	});

	test('double Single (double horizontal, normal vertical)', () => {
		const border = {
			leftX: borders.HorizontalLines.double,
			topY: borders.VerticalLines.line,
			rightX: borders.HorizontalLines.double,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.topY = borders.VerticalLines.line;
		border.bottomY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.bottomY = borders.VerticalLines.line;
		border.rightX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.rightX = borders.HorizontalLines.double;
		border.leftX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.leftX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
		border.leftX = borders.HorizontalLines.double;
		border.rightX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.doubleSingle);
	});

	test('single Double (normal horizontal, double vertical)', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			topY: borders.VerticalLines.double,
			rightX: borders.HorizontalLines.line,
			bottomY: borders.VerticalLines.double,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.leftX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.rightX = borders.HorizontalLines.line;
		border.topY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.topY = borders.VerticalLines.double;
		border.bottomY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.bottomY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
		border.bottomY = borders.VerticalLines.double;
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.singleDouble);
	});

	test('double', () => {
		const border = {
			topY: borders.VerticalLines.double,
			bottomY: borders.VerticalLines.double,
			leftX: borders.HorizontalLines.double,
			rightX: borders.HorizontalLines.double,
		};
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.leftX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.line;
		border.leftX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.leftX = borders.HorizontalLines.double;
		border.rightX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.double;
		border.bottomY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.rightX = borders.HorizontalLines.double;
		border.leftX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.leftX = borders.HorizontalLines.double;
		border.bottomY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.bottomY = borders.VerticalLines.double;
		border.rightX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.line;
		border.rightX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.bold;
		border.rightX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.bottomY = borders.VerticalLines.bold;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.rightX = borders.HorizontalLines.bold;
		border.bottomY = borders.VerticalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.leftX = borders.HorizontalLines.bold;
		border.topY = borders.VerticalLines.double;
		border.rightX = borders.HorizontalLines.double;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
		border.topY = borders.VerticalLines.double;
		border.rightX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.Intersect.double);
	});
});

describe('should discover straight Lines in border borders.Intersections', () => {
	test('normal horizontal line -', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			rightX: borders.HorizontalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.line);
	});
	test('bold horizontal line -', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			rightX: borders.HorizontalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.bold);
	});
	test('special horizontal line --', () => {
		const border = {
			leftX: borders.HorizontalLines.dash,
			rightX: borders.HorizontalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dash);
		border.rightX = borders.HorizontalLines.dash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dash);
		border.leftX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dash);
		border.leftX = borders.HorizontalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.trippleDash);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.trippleDash);
		border.leftX = borders.HorizontalLines.quadDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.quadDash);
		border.leftX = borders.HorizontalLines.line;
		border.rightX = borders.HorizontalLines.quadDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.quadDash);
	});

	test('special horizontal bold line --', () => {
		const border = {
			leftX: borders.HorizontalLines.dashBold,
			rightX: borders.HorizontalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dashBold);
		border.rightX = borders.HorizontalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dashBold);
		border.leftX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.dashBold);
		border.leftX = borders.HorizontalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.trippleDashBold);
		border.leftX = borders.HorizontalLines.bold;
		border.rightX = borders.HorizontalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.trippleDashBold);
		border.leftX = borders.HorizontalLines.quadDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.quadDashBold);
		border.leftX = borders.HorizontalLines.bold;
		border.rightX = borders.HorizontalLines.quadDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.quadDashBold);
	});

	test('horizontal bold to line', () => {
		const border = {
			leftX: borders.HorizontalLines.line,
			rightX: borders.HorizontalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineBold);
		border.rightX = borders.HorizontalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineBold);
		border.leftX = borders.HorizontalLines.dash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineBold);
		border.leftX = borders.HorizontalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineBold);
		border.rightX = borders.HorizontalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.lineBold);
	});

	test('horizontal line to bold', () => {
		const border = {
			leftX: borders.HorizontalLines.bold,
			rightX: borders.HorizontalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.boldLine);
		border.leftX = borders.HorizontalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.boldLine);
		border.rightX = borders.HorizontalLines.dash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.boldLine);
		border.rightX = borders.HorizontalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.boldLine);
		border.leftX = borders.HorizontalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.boldLine);
	});

	test('double horizontal line', () => {
		const border = {
			leftX: borders.HorizontalLines.double,
			rightX: borders.HorizontalLines.double,
		};
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.double);
		border.leftX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.double);
		border.leftX = borders.HorizontalLines.double;
		border.rightX = borders.HorizontalLines.line;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.double);
		border.rightX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.double);
		border.rightX = borders.HorizontalLines.double;
		border.leftX = borders.HorizontalLines.bold;
		expect(getIntersections(border)).toEqual(borders.HorizontalLines.double);
	});

	test('normal vertical line |', () => {
		const border = {
			topY: borders.VerticalLines.line,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.line);
	});

	test('bold Vertical line |', () => {
		const border = {
			topY: borders.VerticalLines.bold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.bold);
	});

	test('special vertical line', () => {
		const border = {
			topY: borders.VerticalLines.dash,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dash);
		border.bottomY = borders.VerticalLines.dash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dash);
		border.topY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dash);
		border.topY = borders.VerticalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.trippleDash);
		border.topY = borders.VerticalLines.line;
		border.bottomY = borders.VerticalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.trippleDash);
		border.topY = borders.VerticalLines.quadDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.quadDash);
		border.topY = borders.VerticalLines.line;
		border.bottomY = borders.VerticalLines.quadDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.quadDash);
	});

	test('special Vertical bold line', () => {
		const border = {
			topY: borders.VerticalLines.dashBold,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dashBold);
		border.bottomY = borders.VerticalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dashBold);
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.dashBold);
		border.topY = borders.VerticalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.trippleDashBold);
		border.topY = borders.VerticalLines.bold;
		border.bottomY = borders.VerticalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.trippleDashBold);
		border.topY = borders.VerticalLines.quadDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.quadDashBold);
		border.topY = borders.VerticalLines.bold;
		border.bottomY = borders.VerticalLines.quadDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.quadDashBold);
	});

	test('Vertical bold to line', () => {
		const border = {
			topY: borders.VerticalLines.line,
			bottomY: borders.VerticalLines.bold,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.lineBold);
		border.bottomY = borders.VerticalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.lineBold);
		border.topY = borders.VerticalLines.dash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.lineBold);
		border.topY = borders.VerticalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.lineBold);
		border.bottomY = borders.VerticalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.lineBold);
	});

	test('vertical line to bold', () => {
		const border = {
			topY: borders.VerticalLines.bold,
			bottomY: borders.VerticalLines.line,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.boldLine);
		border.topY = borders.VerticalLines.dashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.boldLine);
		border.bottomY = borders.VerticalLines.dash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.boldLine);
		border.bottomY = borders.VerticalLines.trippleDash;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.boldLine);
		border.topY = borders.VerticalLines.trippleDashBold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.boldLine);
	});

	test('double Vertical line', () => {
		const border = {
			topY: borders.VerticalLines.double,
			bottomY: borders.VerticalLines.double,
		};
		expect(getIntersections(border)).toEqual(borders.VerticalLines.double);
		border.topY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.double);
		border.topY = borders.VerticalLines.double;
		border.bottomY = borders.VerticalLines.line;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.double);
		border.bottomY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.double);
		border.bottomY = borders.VerticalLines.double;
		border.topY = borders.VerticalLines.bold;
		expect(getIntersections(border)).toEqual(borders.VerticalLines.double);
	});
});
