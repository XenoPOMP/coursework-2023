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

    const selector = document.querySelector(
      `div ${cn(styles.themes, styles.dark)}`,
    );

    expect(selector).toBeDefined();
  });
});
