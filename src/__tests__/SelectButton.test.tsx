import { describe, expect, test } from 'vitest';

import SelectButton from '@ui/SelectButton/SelectButton';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))(
	'Select button from settings page',
	() => {
		test('Match snapshot', () => {
			expect(
				renderWithProviders(
					<SelectButton isTriggered={false} onClick={() => {}} />
				)
			).toMatchSnapshot();

			expect(
				renderWithProviders(<SelectButton isTriggered onClick={() => {}} />)
			).toMatchSnapshot();
		});
	}
);
