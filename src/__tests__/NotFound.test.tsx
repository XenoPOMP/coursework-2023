import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import NotFound from '@pages/NotFound/NotFound';

describe.skipIf(skipTestCondition('FRONTEND'))('404 page', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(<NotFound />, {
        useRouter: true,
        useRedux: true,
      }),
    );
  });
});
