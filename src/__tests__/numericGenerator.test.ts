import { describe, expect, test, vi } from 'vitest';

import numericGenerator from '@utils/numericGenerator';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Numeric generator', () => {
	test('Function return array', () => {
		expect(numericGenerator(4)).toStrictEqual([0, 1, 2, 3]);
	});

	test('Length = 0', () => {
		expect(numericGenerator(0)).toStrictEqual([]);
	});

	test('Length < 0', () => {
		expect(() => numericGenerator(-1)).toThrowError(/generator/i);
	});
});
