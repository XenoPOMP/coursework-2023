import { fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';

import Header from '@ui/Header/Header';
import styles from '@ui/Header/Header.module.scss';

import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Header component', () => {
	const defaultOptions: RenderOptions = {
		useRedux: true,
		useRouter: true,
	};

	test('Match snapshot', () => {
		expect(
			renderWithProviders(<Header />, {
				...defaultOptions,
			})
		).toMatchSnapshot();
	});

	test('Error handling', () => {
		expect(() =>
			renderWithProviders(<Header renderNav renderBackButton />, {
				...defaultOptions,
			})
		).toThrowError(Error);
	});

	test('Back button navigate', () => {
		renderWithProviders(<Header renderNav={false} renderBackButton={true} />, {
			...defaultOptions,
		});

		const backButton = document.querySelectorAll(
			`div.${styles.squareButton}`
		)[0];

		fireEvent.click(backButton);

		expect(backButton).toBeDefined();
	});
});
