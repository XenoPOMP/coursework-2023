import { describe, expect, test } from 'vitest';
import renderWithProviders from '@utils/renderWithProviders';
import TestingPage from '@pages/TestingPage/TestingPage';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('useAppSettings hook', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<TestingPage />, {
        useRedux: true,
      }),
    ).toMatchSnapshot();
  });
});
