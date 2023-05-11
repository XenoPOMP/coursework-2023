import { describe, expect, test } from 'vitest';

import Navbar from '@ui/Navbar/Navbar';
import styles from '@ui/Navbar/Navbar.module.scss';

import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Navbar', () => {
	const defaultOptions: RenderOptions = {
		useRouter: true,
		useRedux: true,
	};

	test('Match snapshot', () => {
		expect(
			renderWithProviders(<Navbar tabIndex={0} />, {
				...defaultOptions,
			})
		).toMatchSnapshot();
	});

	test('Main page active', () => {
		renderWithProviders(<Navbar tabIndex={0} />, {
			...defaultOptions,
		});

		const links = document.querySelectorAll('a');

		expect(links[0].classList.contains(styles.active)).toBe(true);
	});

	test('Service page active', () => {
		renderWithProviders(<Navbar tabIndex={1} />, {
			...defaultOptions,
		});

		const links = document.querySelectorAll('a');

		expect(links[1].classList.contains(styles.active)).toBe(true);
	});

	test('Blog page active', () => {
		renderWithProviders(<Navbar tabIndex={2} />, {
			...defaultOptions,
		});

		const links = document.querySelectorAll('a');

		expect(links[2]?.classList.contains(styles.active)).not.toBeDefined();
	});

	test('Last service works', () => {
		renderWithProviders(<Navbar tabIndex={2} />, {
			...defaultOptions,
		});

		const links = document.querySelectorAll('a');

		expect(/services/i.test(links[1]?.href)).toBe(true);
	});
});
