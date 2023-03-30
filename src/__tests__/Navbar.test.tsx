import { describe, expect, test } from 'vitest';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import Navbar from '@ui/Navbar/Navbar';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Navbar', () => {
  const defaultOptions: RenderOptions = {
    useRouter: true,
    useRedux: true,
  };

  test('Match snapshot', () => {
    expect(
      renderWithProviders(<Navbar tabIndex={0} />, {
        ...defaultOptions,
      }),
    ).toMatchSnapshot();
  });
});
