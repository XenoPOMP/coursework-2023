import { describe, expect, test } from 'vitest';

import ServiceArticle from '@components/ServiceArticle/ServiceArticle';

import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Service article', () => {
	const defaultOptions: RenderOptions = {
		useRedux: true,
		useRouter: true,
	};

	test('Match snapshot', () => {
		expect(
			renderWithProviders(<ServiceArticle />, {
				...defaultOptions,
			})
		).toMatchSnapshot();
	});
});
