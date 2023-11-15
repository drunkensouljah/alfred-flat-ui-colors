import alfyTest from 'alfy-test';
import test from 'ava';

test('main', async t => {
	const alfy = alfyTest();
	const result = await alfy('EMERALD');
	t.deepEqual(result, [
		{
			uid: '#2ecc71',
			title: 'EMERALD',
			subtitle: '🎨 Flat UI Palette v1',
			arg: '#2ecc71',
			autocomplete: 'EMERALD',
			mods: {
				alt: {
					arg: 'rgb(46,204,113)',
					subtitle: 'rgb(46,204,113)',
				},
				cmd: {
					arg: '#2ecc71',
					subtitle: '#2ecc71',
				},
			},
			icon: {
				path: './images/EMERALD.png',
			},
		},
	]);
});
