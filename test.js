import alfyTest from 'alfy-test';
import test from 'ava';

test('main', async t => {
	const alfy = alfyTest();

	const result = await alfy('emerald');

	t.deepEqual(result, [
		{
			title: 'EMERALD',
			subtitle: '#2ecc71',
			arg: '#2ecc71',
		},
	]);
});
