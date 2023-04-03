import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import OrderPage from '@pages/OrderPage/OrderPage';

describe.skipIf(skipTestCondition('FRONTEND'))('Order page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<OrderPage />, {
        useRedux: true,
        useRouter: true,
      }),
    ).toMatchSnapshot();
  });
});
