import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';
import SelectButton from '@ui/SelectButton/SelectButton';

describe.skipIf(skipTestCondition('FRONTEND'))(
  'Select button from settings page',
  () => {
    test('Match snapshot', () => {
      expect(
        renderWithProviders(
          <SelectButton isTriggered={false} onClick={() => {}} />,
        ),
      ).toMatchSnapshot();

      expect(
        renderWithProviders(<SelectButton isTriggered onClick={() => {}} />),
      ).toMatchSnapshot();
    });
  },
);
