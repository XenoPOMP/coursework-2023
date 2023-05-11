import { describe, expect, test } from 'vitest';

import TestingPage from '@pages/TestingPage/TestingPage';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('useAppSettings hook', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<TestingPage />, {
				useRedux: true,
			})
		).toMatchSnapshot();
	});
});
