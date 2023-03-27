import cn from 'classnames';
import { FC } from 'react';
import styles from './ServicePage.module.scss';
import { ServicePageProps } from './ServicePage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import { useSearchParams } from 'react-router-dom';
import Patch from '@ui/Patch/Patch';

const ServicePage: FC<ServicePageProps> = ({}) => {
  const loc = useLocalization();
  const [params, setParams] = useSearchParams();

  return (
    <Page
      meta={loc.meta.servicePage.initial}
      header={{
        tabIndex: 1,
      }}
    >
      <div className={cn(styles.page)}>
        <section className={cn(styles.serviceList)}></section>
        <section className={cn(styles.patch)}>
          <Patch />
        </section>
        <section className={cn(styles.body)}></section>
      </div>
    </Page>
  );
};

export default ServicePage;
