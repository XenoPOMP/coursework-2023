import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './OrderPage.module.scss';
import { OrderPageProps } from './OrderPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const OrderPage: FC<OrderPageProps> = ({}) => {
  const loc = useLocalization();
  const serviceId = useSearchParams()[0].get('service');
  const orderId = uuid();

  useEffect(() => {
    console.log(orderId);
  }, []);

  return (
    <Page
      meta={loc.meta.orderPage}
      header={{
        tabIndex: 0,
        renderNav: false,
        renderRightButtons: false,
      }}
    >
      <div className={cn(styles.page)}>
        <div className={cn(styles.placeholder)}></div>
      </div>
    </Page>
  );
};

export default OrderPage;
