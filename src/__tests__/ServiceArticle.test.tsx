import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import ServiceArticle from '@components/ServiceArticle/ServiceArticle';

describe.skipIf(skipTestCondition('FRONTEND'))('Service article', () => {
  const defaultOptions: RenderOptions = {
    useRedux: true,
    useRouter: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<ServiceArticle />, {
        ...defaultOptions,
      }),
    ).toMatchSnapshot();
  });
});
