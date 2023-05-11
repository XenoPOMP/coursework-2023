import { describe, expect, test } from 'vitest';

import LandingCard from '@ui/LandingCard/LandingCard';

import useLocalization from '@hooks/useLocalization';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Landing card', () => {
	test('Match snapshot', () => {
		expect(
			renderWithProviders(
				<LandingCard
					locales={{
						imageTitle: '',
						title: '',
						content: '',
					}}
				/>,
				{
					useRedux: true,
				}
			)
		).toMatchSnapshot();
	});
});
