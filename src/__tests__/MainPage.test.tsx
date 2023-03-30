import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import MainPage from '@pages/MainPage/MainPage';

describe.skipIf(skipTestCondition('FRONTEND'))('Main page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<MainPage />, {
        useRedux: true,
        useRouter: true,
        useQuery: true,
      }),
    ).toMatchSnapshot();
  });
});
