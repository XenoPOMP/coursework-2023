import cn from 'classnames';
import { FC } from 'react';
import styles from './Dashboard.module.scss';
import { DashboardProps } from './Dashboard.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';

const Dashboard: FC<DashboardProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      header={{
        tabIndex: -1,
      }}
      meta={loc.meta.dashboard}
    ></Page>
  );
};

export default Dashboard;
