import { describe, expect, test } from 'vitest';

import Overlay from '@ui/Overlay/Overlay';

import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Overlay component', () => {
	const defaultOptions: RenderOptions = {
		useRedux: true,
	};

	test('Match snapshot', () => {
		const component = renderWithProviders(
			<Overlay
				backdrop={{
					blurAmount: 0.5,
					blurColor: 'rgba(255,255,255,.6)',
				}}
				flexCenter={true}
				trigger={true}
			/>,
			{
				...defaultOptions,
			}
		);

		expect(component).toMatchSnapshot();
	});

	test('Match snapshot if blur amount is not defined', () => {
		const component = renderWithProviders(
			<Overlay
				backdrop={{
					blurColor: 'rgba(255,255,255,.6)',
				}}
				flexCenter={true}
				trigger={true}
			/>,
			{
				...defaultOptions,
			}
		);

		expect(component).toMatchSnapshot();
	});

	test('Match snapshot if flex center is not defined', () => {
		const component = renderWithProviders(
			<Overlay
				backdrop={{
					blurColor: 'rgba(255,255,255,.6)',
				}}
				trigger={true}
			/>,
			{
				...defaultOptions,
			}
		);

		expect(component).toMatchSnapshot();
	});
});
