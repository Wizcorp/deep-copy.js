var assert = require('assert');

var deepCopy = require('../index.js');

describe('wizcorp-deep-copy.js', function () {
	it('Deep copies a complicated object', function () {
		var obj = {
			a: 'hello',
			b: 1,
			c: 0,
			d: undefined,
			e: null,
			f: /hello/,
			g: {
				a: 'hi',
				b: 1,
				c: false,
				d: function () {},
				e: new Date()
			},
			h: [
				undefined,
				true,
				false,
				null,
				/nope/,
				function () {},
				new Date()
			],
			i: function () {},
			j: { a: { a: { a: { a: 'a' } } } },
			k: new Date()
		}

		var copy = deepCopy(obj);
		assert.strictEqual(JSON.stringify(copy), JSON.stringify(obj));
		assert.deepEqual(copy, obj);
	});
});
