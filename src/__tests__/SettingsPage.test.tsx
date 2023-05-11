import { fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SettingsPage from '@pages/SettingsPage/SettingsPage';
import styles from '@pages/SettingsPage/SettingsPage.module.scss';

import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Settings page', () => {
	const defaultOptions: RenderOptions = {
		useRedux: true,
		useRouter: true,
	};

	test('Match snapshot', () => {
		expect(
			renderWithProviders(<SettingsPage />, {
				...defaultOptions,
			})
		).toMatchSnapshot();
	});

	test('Switch tabs', () => {
		renderWithProviders(<SettingsPage />, {
			...defaultOptions,
		});

		const buttons = document.querySelectorAll(`div.${styles.item}`);

		fireEvent.click(buttons[0]);
		fireEvent.click(buttons[1]);

		expect(1);
	});
});
