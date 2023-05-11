import { describe, expect, test } from 'vitest';

import skipTestCondition from '@utils/skipTestCondition';

import LocaleMissingError from '@errors/LocaleMissingError';

describe.skipIf(skipTestCondition('FRONTEND'))('LocaleMissingError', () => {
	test('Constructor call of super-class', () => {
		expect(() => {
			throw new LocaleMissingError('Error');
		}).toThrowError(LocaleMissingError);
	});
});
