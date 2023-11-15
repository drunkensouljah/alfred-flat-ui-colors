import fs from 'node:fs';
import Jimp from 'jimp';
import alfy from 'alfy';

const data = JSON.parse(fs.readFileSync('./palettes.json', 'utf8'));

function hexToRgb(hex) {
	let r = 0;
	let g = 0;
	let
		b = 0;

	// 3 digits
	if (hex.length === 4) {
		r = '0x' + hex[1] + hex[1];
		g = '0x' + hex[2] + hex[2];
		b = '0x' + hex[3] + hex[3];

		// 6 digits
	} else if (hex.length === 7) {
		r = '0x' + hex[1] + hex[2];
		g = '0x' + hex[3] + hex[4];
		b = '0x' + hex[5] + hex[6];
	}

	return 'rgb(' + Number(r) + ',' + Number(g) + ',' + Number(b) + ')';
}

const items = data.flatMap(element => element.colors.map(color => {
	const image = new Jimp(1, 1, Jimp.cssColorToHex(color.hex));
	image.writeAsync(`./images/${color.name}.png`);

	return {
		uid: color.hex,
		title: color.name,
		subtitle: element.emoji + ' ' + element.name,
		arg: color.hex,
		autocomplete: color.name,
		mods: {
			alt: {
				arg: hexToRgb(color.hex),
				subtitle: hexToRgb(color.hex),
			},
			cmd: {
				arg: color.hex,
				subtitle: color.hex,
			},
		},
		icon: {
			path: `./images/${color.name}.png`,
		},
	};
}));

const resolvedItems = await Promise.all(items);
const filteredItems = alfy.inputMatches(resolvedItems, 'title');
alfy.output(filteredItems);

