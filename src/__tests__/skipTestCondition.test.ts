import { describe, expect, test } from 'vitest';

import useEnv from '@hooks/useEnv';

import skipTestCondition from '@utils/skipTestCondition';

describe('Skip test condition', () => {
	const skipFrontend = skipTestCondition('FRONTEND');
	const skipBackend = skipTestCondition('BACKEND');
	const skipFullstack = skipTestCondition('FULLSTACK');

	const { TESTING_MODE } = useEnv();

	test.skipIf(skipTestCondition('FRONTEND'))('Condition is frontend', () => {
		if (TESTING_MODE !== 'FULLSTACK') {
			expect(skipFrontend).toBe(TESTING_MODE !== 'FRONTEND');
			expect(skipBackend).toBe(TESTING_MODE !== 'BACKEND');
			expect(skipFullstack).toBe(true);
		} else {
			expect(skipFrontend).toBe(false);
			expect(skipBackend).toBe(false);
			expect(skipFullstack).toBe(false);
		}
	});

	test.skipIf(skipTestCondition('BACKEND'))('Condition is backend', () => {
		if (TESTING_MODE !== 'FULLSTACK') {
			expect(skipFrontend).toBe(TESTING_MODE !== 'FRONTEND');
			expect(skipBackend).toBe(TESTING_MODE !== 'BACKEND');
			expect(skipFullstack).toBe(true);
		} else {
			expect(skipFrontend).toBe(false);
			expect(skipBackend).toBe(false);
			expect(skipFullstack).toBe(false);
		}
	});
});
