import { screen } from '@testing-library/react';
import cn from 'classnames';
import { describe, expect, test } from 'vitest';

import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

const clc = require('cli-colors');

describe.skipIf(skipTestCondition('FRONTEND'))('Theme Provider', () => {
	test('Classname', () => {
		renderWithProviders(<ThemeProvider />, {
			useRedux: true,
		});

		const themeClassesDefined =
			document.body.classList.contains(styles.themes) &&
			(document.body.classList.contains(styles.dark) ||
				document.body.classList.contains(styles.light));

		console.log(
			`${clc.green(`[DEBUG]`)} Body class list contains themes: ${
				themeClassesDefined
					? clc.green(`${themeClassesDefined}`)
					: clc.red(`${themeClassesDefined}`)
			}`
		);

		expect(themeClassesDefined).toBe(true);
	});
});
