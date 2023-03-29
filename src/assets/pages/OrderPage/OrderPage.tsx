import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './OrderPage.module.scss';
import { OrderPageProps } from './OrderPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ServiceLocale } from '@localization/Localization';

const OrderPage: FC<OrderPageProps> = ({}) => {
  const loc = useLocalization();
  // @ts-ignore
  const serviceId = parseInt(useSearchParams()[0].get('service'));
  const orderId = uuid();

  const getLocales = (): ServiceLocale | undefined => {
    let locales: ServiceLocale | undefined = undefined;

    loc.servicePage.categories.map((cat) => {
      cat.services.map((service) => {
        if (service.index === serviceId) {
          locales = service;
        }
      });
    });

    return locales;
  };

  enum Stages {
    NAME,
    CONTACTS,
    FINAL,
  }

  const [stage, setStage] = useState<Stages>(Stages.NAME);

  const checkCorrect = (): boolean => {
    switch (stage) {
      case Stages.NAME: {
        break;
      }

      case Stages.CONTACTS: {
        break;
      }

      case Stages.FINAL: {
        break;
      }
    }

    return true;
  };

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
        <div className={cn(styles.placeholder)}>
          <div className={cn(styles.form)}>
            <h2>{getLocales()?.name}</h2>

            <div></div>

            <div className={cn(styles.bottomControl)}>
              <div
                className={cn(
                  styles.arrowButton,
                  stage === Stages.NAME && styles.blocked,
                )}
                onClick={() => {
                  if (checkCorrect()) {
                    setStage((prev) => prev - 1);
                  }
                }}
              >
                <svg
                  viewBox='0 0 30 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807611 17.9792 0.807611 17.3934 1.3934C16.8076 1.97919 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM0 13.5H28V10.5H0V13.5Z' />
                </svg>
              </div>

              <div></div>

              <div
                className={cn(
                  styles.arrowButton,
                  stage === Stages.FINAL && styles.blocked,
                )}
                onClick={() => {
                  if (checkCorrect()) {
                    setStage((prev) => prev + 1);
                  }
                }}
              >
                <svg
                  viewBox='0 0 30 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807611 17.9792 0.807611 17.3934 1.3934C16.8076 1.97919 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM0 13.5H28V10.5H0V13.5Z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default OrderPage;
