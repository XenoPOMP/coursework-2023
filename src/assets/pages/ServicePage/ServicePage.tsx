import cn from 'classnames';
import { FC } from 'react';
import styles from './ServicePage.module.scss';
import { ServicePageProps } from './ServicePage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import { useSearchParams } from 'react-router-dom';

const ServicePage: FC<ServicePageProps> = ({}) => {
  const loc = useLocalization();
  const [params, setParams] = useSearchParams();

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
