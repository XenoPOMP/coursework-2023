import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@components/Page/Page';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders from '@utils/renderWithProviders';

describe.skipIf(skipTestCondition('FRONTEND'))('Page component', () => {
  test('Child render', () => {
    renderWithProviders(
      <Page
        header={{
          tabIndex: 0,
        }}
        meta={{ pageTitle: 'Testing', pageDescription: '', keywords: '' }}
      >
        <h1>Main page testing</h1>
      </Page>,
      {
        useRedux: true,
        useRouter: true,
      },
    );

    expect(screen.getByText(/Main page testing/i)).toBeDefined();
  });
});
