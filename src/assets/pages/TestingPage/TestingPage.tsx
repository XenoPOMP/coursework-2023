import { FC } from 'react';

import useAppSettings from '@hooks/useAppSettings';

import { TestingPageProps } from './TestingPage.props';

const TestingPage: FC<TestingPageProps> = ({}) => {
	const { appVersion } = useAppSettings();

	return (
		<div>
			<>App version: {appVersion.get()}</>
		</div>
	);
};

export default TestingPage;
