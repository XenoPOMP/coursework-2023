import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@components/Page/Page';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Page component', () => {
  test('Child render', () => {
    render(
      <Page meta={{ pageTitle: 'Testing', pageDescription: '', keywords: '' }}>
        <h1>Main page testing</h1>
      </Page>,
    );

    expect(screen.getByText(/Main page testing/i)).toBeDefined();
  });
});
