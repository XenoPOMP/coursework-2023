import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '@components/Layout/Layout';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('App layout', () => {
  test('Render child', () => {
    render(<Layout>Testing: 12</Layout>);

    expect(screen.getByText(/Testing: 12/i)).toBeDefined();
  });
});
