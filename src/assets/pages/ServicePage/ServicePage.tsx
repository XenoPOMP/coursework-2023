import cn from 'classnames';
import { FC } from 'react';
import styles from './ServicePage.module.scss';
import { ServicePageProps } from './ServicePage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';

const ServicePage: FC<ServicePageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={loc.meta.servicePage.initial}
      header={{
        tabIndex: 1,
      }}
    ></Page>
  );
};

export default ServicePage;
