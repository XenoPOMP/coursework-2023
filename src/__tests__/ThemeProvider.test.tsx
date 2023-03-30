import { describe, expect, test } from 'vitest';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import cn from 'classnames';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import { screen } from '@testing-library/react';

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
      }`,
    );

    expect(themeClassesDefined).toBe(true);
  });
});
