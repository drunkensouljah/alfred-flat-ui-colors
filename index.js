import fs from 'node:fs';
import alfy from 'alfy';

const data = JSON.parse(fs.readFileSync('./palettes.json', 'utf8'));

const items = data.flatMap(element => element.colors.map(color => ({
	title: color.name,
	subtitle: color.hex,
	arg: color.hex,
})));

const filteredItems = alfy.inputMatches(items, 'title');

alfy.output(filteredItems);
