import { describe, expect, test } from 'vitest';

import MainPage from '@pages/MainPage/MainPage';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Main page', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(<MainPage />, {
				useRedux: true,
				useRouter: true,
				useQuery: true,
			})
		).toMatchSnapshot();
	});
});
