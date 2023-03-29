import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '@components/Layout/Layout';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';

describe.skipIf(skipTestCondition('FRONTEND'))('App layout', () => {
  test('Render child', () => {
    renderWithProviders(
      <Layout
        header={{
          tabIndex: 0,
        }}
      >
        Testing: 12
      </Layout>,
      {
        useRedux: true,
        useRouter: true,
      },
    );

    expect(screen.getByText(/Testing: 12/i)).toBeDefined();
  });
});
