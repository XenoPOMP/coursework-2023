import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Layout from '@components/Layout/Layout';

import renderWithProviders from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

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
			}
		);

		expect(screen.getByText(/Testing: 12/i)).toBeDefined();
	});
});
