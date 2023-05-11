import { describe, expect, test } from 'vitest';

import NotFound from '@pages/NotFound/NotFound';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('404 page', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<NotFound />, {
				useRouter: true,
				useRedux: true,
			})
		);
	});
});
