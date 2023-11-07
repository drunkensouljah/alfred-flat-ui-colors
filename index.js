import alfy from 'alfy';
import {getPalette} from 'flat-colors-js';

const flatColors = await getPalette('default');

const items = flatColors.map(color => ({
	title: color.name,
	arg: color.hex,
	var: color.hex,
}));

alfy.output(items);

