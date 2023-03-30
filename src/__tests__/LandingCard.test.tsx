import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import LandingCard from '@ui/LandingCard/LandingCard';
import useLocalization from '@hooks/useLocalization';

describe.skipIf(skipTestCondition('FRONTEND'))('Landing card', () => {
  test('Match snapshot', () => {
    expect(
      renderWithProviders(
        <LandingCard
          locales={{
            imageTitle: '',
            title: '',
            content: '',
          }}
        />,
        {
          useRedux: true,
        },
      ),
    ).toMatchSnapshot();
  });
});
