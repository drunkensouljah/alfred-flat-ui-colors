import alfyTest from 'alfy-test';
import test from 'ava';

test('main', async t => {
	const alfy = alfyTest();

	const result = await alfy();

	t.deepEqual(result, [

		{
			title: 'TURQUOISE',
			arg: '#1abc9c',
			var: '#1abc9c',
		},
		{
			title: 'EMERALD',
			arg: '#2ecc71',
			var: '#2ecc71',
		},
		{
			title: 'PETER RIVER',
			arg: '#3498db',
			var: '#3498db',
		},
		{
			title: 'AMETHYST',
			arg: '#9b59b6',
			var: '#9b59b6',
		},
		{
			title: 'WET ASPHALT',
			arg: '#34495e',
			var: '#34495e',
		},
		{
			title: 'GREEN SEA',
			arg: '#16a085',
			var: '#16a085',
		},
		{
			title: 'NEPHRITIS',
			arg: '#27ae60',
			var: '#27ae60',
		},
		{
			title: 'BELIZE HOLE',
			arg: '#2980b9',
			var: '#2980b9',
		},
		{
			title: 'WISTERIA',
			arg: '#8e44ad',
			var: '#8e44ad',
		},
		{
			title: 'MIDNIGHT BLUE',
			arg: '#2c3e50',
			var: '#2c3e50',
		},
		{
			title: 'SUN FLOWER',
			arg: '#f1c40f',
			var: '#f1c40f',
		},
		{
			title: 'CARROT',
			arg: '#e67e22',
			var: '#e67e22',
		},
		{
			title: 'ALIZARIN',
			arg: '#e74c3c',
			var: '#e74c3c',
		},
		{
			title: 'CLOUDS',
			arg: '#ecf0f1',
			var: '#ecf0f1',
		},
		{
			title: 'CONCRETE',
			arg: '#95a5a6',
			var: '#95a5a6',
		},
		{
			title: 'ORANGE',
			arg: '#f39c12',
			var: '#f39c12',
		},
		{
			title: 'PUMPKIN',
			arg: '#d35400',
			var: '#d35400',
		},
		{
			title: 'POMEGRANATE',
			arg: '#c0392b',
			var: '#c0392b',
		},
		{
			title: 'SILVER',
			arg: '#bdc3c7',
			var: '#bdc3c7',
		},
		{
			title: 'ASBESTOS',
			arg: '#7f8c8d',
			var: '#7f8c8d',
		},

	]);
});
