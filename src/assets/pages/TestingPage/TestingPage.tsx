import { FC } from 'react';
import { TestingPageProps } from './TestingPage.props';
import useAppSettings from '@hooks/useAppSettings';

const TestingPage: FC<TestingPageProps> = ({}) => {
  const { appVersion } = useAppSettings();

  return (
    <div>
      <>App version: {appVersion.get()}</>
    </div>
  );
};

export default TestingPage;
