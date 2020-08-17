import { DATA } from './data';
import { OneEuroFilter } from '../src/OneEuroFilter';
import assert from 'assert';

String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
};

describe('OneEuroFilter', function () {
  it('Output should match expected', function () {
		const freq = 120;
		const f = new OneEuroFilter(freq, 1, 1, 1);

		const EPSILON = 1e-5;

		for(var i=0; i<DATA.length/2; i++){
			const input = DATA[i*2];
			const expected = DATA[1+i*2];
			const timestamp = (1.0 / freq) * i;
			const output = f.filter(input, timestamp);

			assert(Math.abs(expected - output) < EPSILON);
		}
  });
});
