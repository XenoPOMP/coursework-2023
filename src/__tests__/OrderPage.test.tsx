import { describe, expect, test } from 'vitest';

import OrderPage from '@pages/OrderPage/OrderPage';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Order page', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<OrderPage />, {
				useRedux: true,
				useRouter: true,
			})
		).toMatchSnapshot();
	});
});
