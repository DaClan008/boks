import { BordersExtended, Options } from '../src/objects/types';
import { borders } from '../src/objects/borders';
import { templates } from '../src/objects/borderTemplates';
import { BorderTypes } from '../src/objects/enums';
import { getBorder, fixMultiple } from '../src/lib/borders';

function removeExtend(opts: Options): Options;
function removeExtend(opts: Options[]): Options[];
function removeExtend(opts: Options | Options[]): Options | Options[] {
	if (Array.isArray(opts)) {
		let array = [];
		opts.forEach(o => array.push(removeExtend(o)));
		return array;
	}
	const opt = opts;
	delete opt.extendFrom;
	return opt;
}

function myGetBorder(border?: Options): BordersExtended;
function myGetBorder(border: Options[]): BordersExtended[];
function myGetBorder(border?: Options | Options[]): BordersExtended | BordersExtended[] {
	if (Array.isArray(border)) return removeExtend(getBorder(border));
	return removeExtend(getBorder(border));
}

test('get single borders back if no parameters is sent', () => {
	const result = myGetBorder();
	expect(result).toEqual(templates.single);
});
test('get border by type -> single | bold', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.bold },
		{ extendFrom: BorderTypes.single },
	];
	let result = myGetBorder(borderConfig);
	let hR: BordersExtended = { ...templates.bold };
	hR.bottomLeft = borders.LeftIntersect.lightBottom;
	hR.bottomIntersect = borders.Intersect.lightBottom;
	hR.bottomRight = borders.RightIntersect.lightBottom;
	expect(result[1]).toEqual(templates.single);
	expect(result[0]).toEqual(hR);

	borderConfig = [{ extendFrom: BorderTypes.single }, { extendFrom: BorderTypes.bold }];
	result = myGetBorder(borderConfig);
	hR = { ...templates.single };
	hR.bottomLeft = borders.LeftIntersect.boldBottom;
	hR.bottomIntersect = borders.Intersect.bottom;
	hR.bottomRight = borders.RightIntersect.boldBottom;
	expect(result[1]).toEqual(templates.bold);
	expect(result[0]).toEqual(hR);
});
test('get border by type -> double | single', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.single },
		{ extendFrom: BorderTypes.double },
	];
	let result = myGetBorder(borderConfig);
	let hR: BordersExtended = { ...templates.single };
	hR.bottomLeft = borders.LeftIntersect.singleDouble;
	hR.bottomIntersect = borders.Intersect.singleDouble;
	hR.bottomRight = borders.RightIntersect.singleDouble;
	expect(result[1]).toEqual(templates.double);
	expect(result[0]).toEqual(hR);

	borderConfig = [{ extendFrom: BorderTypes.double }, { extendFrom: BorderTypes.single }];
	result = myGetBorder(borderConfig);
	hR = { ...templates.double };
	hR.bottomLeft = borders.LeftIntersect.double;
	hR.bottomIntersect = borders.Intersect.double;
	hR.bottomRight = borders.RightIntersect.double;
	expect(result[1]).toEqual(templates.single);
	expect(result[0]).toEqual(hR);
});

test('get border by type -> double | bold', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.bold },
		{ extendFrom: BorderTypes.double },
	];
	let result = myGetBorder(borderConfig);
	let hR: BordersExtended = { ...templates.bold };
	hR.bottomLeft = borders.LeftIntersect.bold;
	hR.bottomIntersect = borders.Intersect.lightBottom;
	hR.bottomRight = borders.RightIntersect.bold;
	expect(result[1]).toEqual(templates.double);
	expect(result[0]).toEqual(hR);

	borderConfig = [{ extendFrom: BorderTypes.double }, { extendFrom: BorderTypes.bold }];
	result = myGetBorder(borderConfig);
	hR = { ...templates.double };
	hR.bottomLeft = borders.LeftIntersect.double;
	hR.bottomIntersect = borders.Intersect.double;
	hR.bottomRight = borders.RightIntersect.double;
	expect(result[1]).toEqual(templates.bold);
	expect(result[0]).toEqual(hR);
});

test('get border by type -> boldSingle | singleBold', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.boldSingle },
		{ extendFrom: BorderTypes.singleBold },
	];
	let result = myGetBorder(borderConfig);
	expect(result[1]).toEqual(templates.singleBold);
	let hr: BordersExtended = { ...templates.boldSingle };
	hr.bottomLeft = borders.LeftIntersect.lightTop;
	hr.bottomIntersect = borders.Intersect.lightTop;
	hr.bottomRight = borders.RightIntersect.lightTop;
	expect(result[0]).toEqual(hr);
});

test('get border by type -> singleDouble | doubleSingle', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.doubleSingle },
		{ extendFrom: BorderTypes.singleDouble },
	];
	let result = myGetBorder(borderConfig);
	expect(result[1]).toEqual(templates.singleDouble);
	let hr: BordersExtended = { ...templates.doubleSingle };
	hr.bottomLeft = borders.LeftIntersect.double;
	hr.bottomIntersect = borders.Intersect.double;
	hr.bottomRight = borders.RightIntersect.double;
	expect(result[0]).toEqual(hr);
});

test('get border by type -> none', () => {
	let borderConfig: Options = { extendFrom: BorderTypes.none };
	let result = myGetBorder(borderConfig);
	let cn: BordersExtended = { ...templates.empty };
	cn.left = false;
	cn.right = false;
	cn.bottom = false;
	cn.top = false;
	expect(result).toEqual(cn);
});

test('get border by type -> quadDash | dash', () => {
	let borderConfig: Options[] = [
		{
			horizontal: borders.HorizontalLines.dash,
			vertical: borders.VerticalLines.quadDash,
		},
		{
			horizontal: borders.HorizontalLines.quadDash,
			vertical: borders.VerticalLines.dash,
		},
	];
	let result = myGetBorder(borderConfig);
	let hR: BordersExtended = { ...templates.single };
	let cn: BordersExtended = { ...templates.single };
	hR.vertical = borders.VerticalLines.quadDash;
	hR.horizontal = borders.HorizontalLines.dash;
	hR.bottomIntersect = borders.Intersect.line;
	hR.bottomLeft = borders.LeftIntersect.line;
	hR.bottomRight = borders.RightIntersect.line;
	cn.vertical = borders.VerticalLines.dash;
	cn.horizontal = borders.HorizontalLines.quadDash;
	expect(result[1]).toEqual(cn);
	expect(result[0]).toEqual(hR);

	borderConfig[1] = {
		horizontal: borders.HorizontalLines.quadDashBold,
		vertical: borders.VerticalLines.dashBold,
	};
	borderConfig[0] = {
		horizontal: borders.HorizontalLines.dashBold,
		vertical: borders.VerticalLines.quadDashBold,
	};
	result = myGetBorder(borderConfig);
	hR = { ...templates.single };
	cn = { ...templates.single };
	hR.vertical = borders.VerticalLines.quadDashBold;
	hR.horizontal = borders.HorizontalLines.dashBold;
	hR.bottomLeft = borders.LeftIntersect.line;
	hR.bottomIntersect = borders.Intersect.singleBold;
	hR.bottomRight = borders.RightIntersect.line;
	cn.vertical = borders.VerticalLines.dashBold;
	cn.horizontal = borders.HorizontalLines.quadDashBold;
	expect(result[1]).toEqual(cn);
	expect(result[0]).toEqual(hR);
});

test('get borders by way of boolean value (content / header)', () => {
	let borderConfig: Options[] = [
		{ extendFrom: BorderTypes.single },
		{ extendFrom: BorderTypes.none },
	];
	let result = myGetBorder(borderConfig);
	let special: BordersExtended = { ...templates.empty };
	special.bottom = false;
	special.top = false;
	special.left = false;
	special.right = false;
	expect(result[1]).toEqual(special);
	expect(result[0]).toEqual(templates.single);

	borderConfig[1] = { extendFrom: BorderTypes.single };
	borderConfig[0].extendFrom = BorderTypes.none;
	result = myGetBorder(borderConfig);
	expect(result[1]).toEqual(templates.single);
	expect(result[0]).toEqual(special);
});

test('options strict && buildTableBorders', () => {
	const borderConfig = [
		{
			vertical: borders.VerticalLines.line,
			strict: true,
			buildTableBorders: true,
		},
		{
			horizontal: borders.HorizontalLines.line,
			strict: true,
			buildTableBorders: false,
		},
	];
	let result = myGetBorder(borderConfig);
	const cn: Options = { ...templates.single };
	cn.intersect = borders.VerticalLines.line;
	cn.strict = true;
	cn.buildTableBorders = true;
	cn.topLeft = borders.VerticalLines.linedown;
	cn.bottomLeft = borders.VerticalLines.lineup;
	cn.topRight = borders.VerticalLines.linedown;
	cn.bottomRight = borders.VerticalLines.lineup;
	cn.topIntersect = borders.VerticalLines.linedown;
	cn.bottomIntersect = borders.VerticalLines.lineup;
	cn.rightIntersect = borders.VerticalLines.line;
	cn.leftIntersect = borders.VerticalLines.line;
	cn.top = borders.HorizontalLines.none;
	cn.bottom = borders.HorizontalLines.none;
	delete cn.horizontal;
	const hr: Options = { ...templates.empty };
	hr.horizontal = borders.HorizontalLines.line;
	hr.strict = true;
	hr.bottom = false;
	hr.left = false;
	hr.right = false;
	hr.top = false;
	hr.buildTableBorders = false;
	hr.intersect = borders.Intersect.none;
	hr.leftIntersect = borders.LeftIntersect.none;
	hr.rightIntersect = borders.RightIntersect.none;
	delete hr.vertical;
	expect(result[0]).toEqual(cn);
	expect(result[1]).toEqual(hr);

	borderConfig[1] = borderConfig[0];
	borderConfig[0] = {
		horizontal: borders.HorizontalLines.line,
		strict: true,
		buildTableBorders: false,
	};
	result = myGetBorder(borderConfig);
	expect(result[0]).toEqual(hr);
	expect(result[1]).toEqual(cn);
});

test('build borders from horizontal options', () => {
	let borderConfig: Options[] = [
		{
			top: borders.HorizontalLines.line,
			strict: true,
			buildTableBorders: true,
		},
		{
			horizontal: borders.HorizontalLines.line,
			strict: true,
			buildTableBorders: true,
		},
	];
	let result = myGetBorder(borderConfig);
	const hr: Options = {
		top: borders.HorizontalLines.line,
		strict: true,
		buildTableBorders: true,
		bottom: borders.HorizontalLines.line,
		topLeft: borders.HorizontalLines.lineright,
		topRight: borders.HorizontalLines.lineleft,
		bottomLeft: borders.HorizontalLines.lineright,
		bottomRight: borders.HorizontalLines.lineleft,
		topIntersect: borders.HorizontalLines.line,
		bottomIntersect: borders.HorizontalLines.line,
		leftIntersect: borders.HorizontalLines.none,
		rightIntersect: borders.HorizontalLines.none,
		intersect: borders.HorizontalLines.none,
		right: borders.VerticalLines.none,
		left: borders.VerticalLines.none,
	};
	const cn: Options = {
		horizontal: borders.HorizontalLines.line,
		strict: true,
		buildTableBorders: true,
		top: borders.HorizontalLines.line,
		bottom: borders.HorizontalLines.line,
		topLeft: borders.HorizontalLines.lineright,
		topRight: borders.HorizontalLines.lineleft,
		bottomLeft: borders.HorizontalLines.lineright,
		bottomRight: borders.HorizontalLines.lineleft,
		topIntersect: borders.HorizontalLines.line,
		bottomIntersect: borders.HorizontalLines.line,
		leftIntersect: borders.HorizontalLines.lineright,
		rightIntersect: borders.HorizontalLines.lineleft,
		intersect: borders.HorizontalLines.line,
		right: borders.VerticalLines.none,
		left: borders.VerticalLines.none,
	};
	expect(result[0]).toEqual(hr);
	expect(result[1]).toEqual(cn);

	borderConfig[0] = { extendFrom: BorderTypes.round };
	borderConfig[1] = {
		bottom: borders.HorizontalLines.line,
		strict: true,
		buildTableBorders: true,
	};
	result = myGetBorder(borderConfig);
	expect(result[1]).toEqual(hr);
	expect(result[0].topLeft).toEqual(borders.TopLeftBorder.round);
	expect(result[0].topRight).toEqual(borders.TopRightBorder.round);
});

test('build borders from vertical optiosn', () => {
	let borderConfig: Options[] = [
		{
			right: borders.VerticalLines.line,
			strict: true,
			buildTableBorders: true,
		},
		{
			left: borders.VerticalLines.line,
			strict: true,
			buildTableBorders: true,
		},
	];
	let result = myGetBorder(borderConfig);
	let cn = {
		left: '│',
		strict: true,
		buildTableBorders: true,
		right: '│',
		topLeft: '╷',
		topRight: '╷',
		bottomLeft: '╵',
		bottomRight: '╵',
		topIntersect: '',
		bottomIntersect: '',
		leftIntersect: '│',
		rightIntersect: '│',
		intersect: '',
		top: '',
		bottom: '',
	};
	expect(result[1]).toEqual(cn);
	cn.bottomLeft = borders.VerticalLines.line;
	cn.bottomRight = borders.VerticalLines.line;
	expect(result[0]).toEqual(cn);
	// console.log(result);
});

test('keep border spacing', () => {
	let borderConfig: Options[] = [
		{
			horizontal: borders.HorizontalLines.none,
			strict: true,
			buildTableBorders: true,
			keepBorderSpace: true,
		},
		{
			left: borders.VerticalLines.none,
			strict: true,
			buildTableBorders: true,
			keepBorderSpace: true,
		},
	];
	let result = myGetBorder([{ ...borderConfig[0] }, { ...borderConfig[1] }]);

	let cn = {
		left: ' ',
		strict: true,
		buildTableBorders: true,
		keepBorderSpace: true,
		topLeft: ' ',
		topRight: ' ',
		bottomLeft: ' ',
		bottomRight: ' ',
		topIntersect: ' ',
		bottomIntersect: ' ',
		leftIntersect: ' ',
		rightIntersect: ' ',
		intersect: ' ',
		top: ' ',
		right: ' ',
		bottom: ' ',
	};
	expect(result[1]).toEqual(cn);
	(cn as BordersExtended).horizontal = borders.HorizontalLines.none;
	expect(result[0]).toEqual(cn);

	borderConfig[0].keepBorderSpace = false;
	result = myGetBorder(borderConfig);
	cn = {
		...templates.empty,
		strict: true,
		buildTableBorders: true,
		keepBorderSpace: false,
		left: false,
		right: false,
		top: false,
		bottom: false,
	} as any;
	delete (cn as any).vertical;
	expect(result[0]).toEqual(cn);
});

test('border type none', () => {
	const bConfig = { extendFrom: BorderTypes.none };
	let ans = {
		...templates.empty,
		bottom: false,
		left: false,
		top: false,
		right: false,
	};
	expect(myGetBorder(bConfig)).toEqual(ans);
});

test('0 and 1 fixMultiple', () => {
	let result = fixMultiple([]);
	expect(result).toEqual([]);
	result = fixMultiple([{ ...templates.single }]);
	expect(result).toEqual([templates.single]);
});
