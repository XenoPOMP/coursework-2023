import { describe, expect, test } from 'vitest';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';
import cn from 'classnames';
import styles from '@providers/ThemeProvider/ThemeProvider.module.scss';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';

describe.skipIf(skipTestCondition('FRONTEND'))('Theme Provider', () => {
  test('Classname', () => {
    renderWithProviders(<ThemeProvider />, {
      useRedux: true,
    });

    const bodyClasses = document.body.classList.contains(styles.themes);
    const themeClassesDefined =
      document.body.classList.contains(styles.dark) ||
      document.body.classList.contains(styles.light);

    console.log(document.body);

    expect(bodyClasses).toBe(true);
    expect(themeClassesDefined).toBe(true);
  });
});
