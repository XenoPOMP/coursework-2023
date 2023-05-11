import { describe, expect, test } from 'vitest';

import Category from '@ui/Category/Category';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Services` category', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<Category index={0} />, {
				useRedux: true,
				useRouter: true,
			})
		).toMatchSnapshot();
	});
});
