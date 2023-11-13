import fs from 'node:fs';
import Jimp from 'jimp';
import alfy from 'alfy';

const data = JSON.parse(fs.readFileSync('./palettes.json', 'utf8'));

const items = data.flatMap(element => element.colors.map(color => {
	const image = new Jimp(1, 1, Jimp.cssColorToHex(color.hex));
	image.writeAsync(`./images/${color.name}.png`);
	return {
		title: color.name,
		subtitle: color.hex,
		arg: color.hex,
		icon: {
			path: `./images/${color.name}.png`,
		},
	};
}));

const resolvedItems = await Promise.all(items);
const filteredItems = alfy.inputMatches(resolvedItems, 'title');
alfy.output(filteredItems);
