import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './ServiceArticle.module.scss';
import { ServiceArticleProps } from './ServiceArticle.props';
import useServiceId from '@hooks/useServiceId';
import useLocalization from '@hooks/useLocalization';
import { ServiceLocale } from '@localization/Localization';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { toggleStar } from '@redux/reducers/serviceListSlice';

const ServiceArticle: FC<ServiceArticleProps> = ({}) => {
  const serviceId = useServiceId();
  const loc = useLocalization();

  const serviceStates = useSelector(
    (state: IStore) => state.serviceList.services,
  );
  const dispatch = useDispatch();

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

  return (
    <>
      {serviceId === -1 ? (
        <div className={cn(styles.noSelectedService)}>
          <h2>{loc.servicePage.notSelectedLabel}</h2>
        </div>
      ) : (
        <article className={cn(styles.service)}>
          <div className={cn(styles.scrollable)}>
            <h2>{getLocales()?.name}</h2>

            <i className={cn(styles.desc)}>{getLocales()?.desc}</i>

            <div className={cn(styles.cards)}></div>
          </div>

          <div className={cn(styles.bottomControl)}>
            <div className={cn(styles.button, styles.orderButton)}>
              {loc.servicePage.labels.orderButton}
            </div>

            <div
              className={cn(styles.button, styles.star)}
              onClick={() => {
                dispatch(toggleStar(serviceId));
              }}
            >
              {serviceStates[serviceId].isFavorite ? (
                <svg
                  className={cn(styles.favorite)}
                  width='36'
                  height='34'
                  viewBox='0 0 36 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M13.0787 22.4928C12.6246 24.4551 12.3976 25.4363 12.9333 25.8256C13.4691 26.2148 14.3321 25.6957 16.0581 24.6575L16.9623 24.1136C17.4677 23.8097 17.7204 23.6577 17.9995 23.6585C18.2786 23.6593 18.5304 23.8127 19.034 24.1196L19.932 24.6669C21.6609 25.7205 22.5253 26.2473 23.0637 25.8591C23.6022 25.4709 23.3754 24.4843 22.922 22.5111L22.6875 21.4908C22.556 20.9184 22.4902 20.6323 22.5768 20.368C22.6634 20.1037 22.8858 19.9119 23.3305 19.5284L24.1091 18.8569C25.6373 17.5388 26.4015 16.8797 26.1983 16.2488C25.9951 15.6179 24.99 15.5287 22.9797 15.3502L21.9466 15.2584C21.366 15.2069 21.0756 15.1811 20.852 15.0189C20.6284 14.8567 20.5138 14.5887 20.2846 14.0527L19.8321 12.9946C19.0487 11.1627 18.6569 10.2467 17.9979 10.2458C17.339 10.2449 16.9448 11.1598 16.1564 12.9897L15.7169 14.0099C15.4869 14.5437 15.3719 14.8106 15.1487 14.9721C14.9255 15.1336 14.636 15.1593 14.057 15.2108L12.9868 15.3058C10.9889 15.4832 9.99001 15.5719 9.78578 16.2005C9.58154 16.8291 10.3376 17.488 11.8497 18.8057L12.6773 19.5269C13.1183 19.9113 13.3388 20.1034 13.4242 20.3671C13.5096 20.6307 13.4437 20.9157 13.3118 21.4856L13.0787 22.4928ZM10.3137 32.5659C8.58654 33.6049 7.72295 34.1244 7.18712 33.7349C6.65129 33.3454 6.87902 32.3637 7.33446 30.4002L9.08231 22.8651C9.21513 22.2924 9.28155 22.0061 9.19532 21.7415C9.10909 21.4769 8.88676 21.2846 8.44209 20.9002L2.58224 15.8339C1.0537 14.5124 0.289437 13.8517 0.493812 13.2207C0.698187 12.5898 1.70473 12.5027 3.7178 12.3284L11.4808 11.6564C12.065 11.6059 12.3571 11.5806 12.5818 11.4174C12.8065 11.2542 12.9209 10.9842 13.1497 10.4443L16.1586 3.34492C16.9447 1.49009 17.3377 0.562678 18 0.562678C18.6623 0.562678 19.0553 1.49009 19.8414 3.34492L22.8503 10.4443C23.0791 10.9842 23.1935 11.2542 23.4182 11.4174C23.6429 11.5806 23.935 11.6059 24.5192 11.6564L32.2822 12.3284C34.2953 12.5027 35.3018 12.5898 35.5062 13.2207C35.7106 13.8517 34.9463 14.5124 33.4178 15.8339L27.5579 20.9002C27.1132 21.2846 26.8909 21.4769 26.8047 21.7415C26.7185 22.0061 26.7849 22.2924 26.9177 22.8651L28.6655 30.4002C29.121 32.3637 29.3487 33.3454 28.8129 33.7349C28.277 34.1244 27.4135 33.6049 25.6863 32.5659L19.031 28.5623C18.5287 28.2602 18.2776 28.1091 18 28.1091C17.7224 28.1091 17.4713 28.2602 16.969 28.5623L10.3137 32.5659Z' />
                  <path d='M13.0787 22.4928C12.6246 24.4551 12.3976 25.4363 12.9333 25.8256C13.4691 26.2148 14.3321 25.6957 16.0581 24.6575L16.9623 24.1136C17.4677 23.8097 17.7204 23.6577 17.9995 23.6585C18.2786 23.6593 18.5304 23.8127 19.034 24.1196L19.932 24.6669C21.6609 25.7205 22.5253 26.2473 23.0637 25.8591C23.6022 25.4709 23.3754 24.4843 22.922 22.5111L22.6875 21.4908C22.556 20.9184 22.4902 20.6323 22.5768 20.368C22.6634 20.1037 22.8858 19.9119 23.3305 19.5284L24.1091 18.8569C25.6373 17.5388 26.4015 16.8797 26.1983 16.2488C25.9951 15.6179 24.99 15.5287 22.9797 15.3502L21.9466 15.2584C21.366 15.2069 21.0756 15.1811 20.852 15.0189C20.6284 14.8567 20.5138 14.5887 20.2846 14.0527L19.8321 12.9946C19.0487 11.1627 18.6569 10.2467 17.9979 10.2458C17.339 10.2449 16.9448 11.1598 16.1564 12.9897L15.7169 14.0099C15.4869 14.5437 15.3719 14.8106 15.1487 14.9721C14.9255 15.1336 14.636 15.1593 14.057 15.2108L12.9868 15.3058C10.9889 15.4832 9.99001 15.5719 9.78578 16.2005C9.58154 16.8291 10.3376 17.488 11.8497 18.8057L12.6773 19.5269C13.1183 19.9113 13.3388 20.1034 13.4242 20.3671C13.5096 20.6307 13.4437 20.9157 13.3118 21.4856L13.0787 22.4928Z' />
                </svg>
              ) : (
                <svg
                  className={cn(styles.notFavorite)}
                  width='36'
                  height='34'
                  viewBox='0 0 36 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M13.0787 22.4928C12.6246 24.4551 12.3976 25.4363 12.9333 25.8256C13.4691 26.2148 14.3321 25.6957 16.0581 24.6575L16.9623 24.1136C17.4677 23.8097 17.7204 23.6577 17.9995 23.6585C18.2786 23.6593 18.5304 23.8127 19.034 24.1196L19.932 24.6669C21.6609 25.7205 22.5253 26.2473 23.0637 25.8591C23.6022 25.4709 23.3754 24.4843 22.922 22.5111L22.6875 21.4908C22.556 20.9184 22.4902 20.6323 22.5768 20.368C22.6634 20.1037 22.8858 19.9119 23.3305 19.5284L24.1091 18.8569C25.6373 17.5388 26.4015 16.8797 26.1983 16.2488C25.9951 15.6179 24.99 15.5287 22.9797 15.3502L21.9466 15.2584C21.366 15.2069 21.0756 15.1811 20.852 15.0189C20.6284 14.8567 20.5138 14.5887 20.2846 14.0527L19.8321 12.9946C19.0487 11.1627 18.6569 10.2467 17.9979 10.2458C17.339 10.2449 16.9448 11.1598 16.1564 12.9897L15.7169 14.0099C15.4869 14.5437 15.3719 14.8106 15.1487 14.9721C14.9255 15.1336 14.636 15.1593 14.057 15.2108L12.9868 15.3058C10.9889 15.4832 9.99001 15.5719 9.78578 16.2005C9.58154 16.8291 10.3376 17.488 11.8497 18.8057L12.6773 19.5269C13.1183 19.9113 13.3388 20.1034 13.4242 20.3671C13.5096 20.6307 13.4437 20.9157 13.3118 21.4856L13.0787 22.4928ZM10.3137 32.5659C8.58654 33.6049 7.72295 34.1244 7.18712 33.7349C6.65129 33.3454 6.87902 32.3637 7.33446 30.4002L9.08231 22.8651C9.21513 22.2924 9.28155 22.0061 9.19532 21.7415C9.10909 21.4769 8.88676 21.2846 8.44209 20.9002L2.58224 15.8339C1.0537 14.5124 0.289437 13.8517 0.493812 13.2207C0.698187 12.5898 1.70473 12.5027 3.7178 12.3284L11.4808 11.6564C12.065 11.6059 12.3571 11.5806 12.5818 11.4174C12.8065 11.2542 12.9209 10.9842 13.1497 10.4443L16.1586 3.34492C16.9447 1.49009 17.3377 0.562678 18 0.562678C18.6623 0.562678 19.0553 1.49009 19.8414 3.34492L22.8503 10.4443C23.0791 10.9842 23.1935 11.2542 23.4182 11.4174C23.6429 11.5806 23.935 11.6059 24.5192 11.6564L32.2822 12.3284C34.2953 12.5027 35.3018 12.5898 35.5062 13.2207C35.7106 13.8517 34.9463 14.5124 33.4178 15.8339L27.5579 20.9002C27.1132 21.2846 26.8909 21.4769 26.8047 21.7415C26.7185 22.0061 26.7849 22.2924 26.9177 22.8651L28.6655 30.4002C29.121 32.3637 29.3487 33.3454 28.8129 33.7349C28.277 34.1244 27.4135 33.6049 25.6863 32.5659L19.031 28.5623C18.5287 28.2602 18.2776 28.1091 18 28.1091C17.7224 28.1091 17.4713 28.2602 16.969 28.5623L10.3137 32.5659Z' />
                </svg>
              )}
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ServiceArticle;
