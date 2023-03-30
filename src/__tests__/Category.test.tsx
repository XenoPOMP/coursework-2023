import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import Category from '@ui/Category/Category';

describe.skipIf(skipTestCondition('FRONTEND'))('Services` category', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Category index={0} />, {
        useRedux: true,
        useRouter: true,
      }),
    ).toMatchSnapshot();
  });
});
