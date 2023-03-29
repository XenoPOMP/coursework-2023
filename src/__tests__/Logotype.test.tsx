import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import Logotype from '@ui/Logotype/Logotype';
import { screen } from '@testing-library/react';
import styles from '@ui/Logotype/Logotype.module.scss';

describe.skipIf(skipTestCondition('FRONTEND'))('Logotype', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Logotype />, {
        useRouter: true,
      }),
    ).toMatchSnapshot();

    test('Red variant', () => {
      renderWithProviders(<Logotype variant={'with-red'} />, {
        useRouter: true,
      });

      expect(screen.getByRole('link').classList.contains(styles.wRed)).toBe(
        true,
      );
    });
  });
});
