import cn from 'classnames';
import { FC } from 'react';
import styles from './ServiceBadge.module.scss';
import { ServiceBadgeProps } from './ServiceBadge.props';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { ServiceList } from '@redux/reducers/serviceListSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useServiceId from '@hooks/useServiceId';
import { changeLastServicePage } from '@redux/reducers/lastPageSlice';

const ServiceBadge: FC<ServiceBadgeProps> = ({ locales }) => {
  const { index, name } = locales;

  const { search, services }: ServiceList = useSelector(
    (state: IStore) => state.serviceList,
  );
  const dispatch = useDispatch();

  const getIcon = (): JSX.Element => {
    switch (services[index]?.icon) {
      case 'thunderbolt':
        return (
          <svg
            className={cn(styles.icon)}
            width='15'
            height='19'
            viewBox='0 0 15 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.14062 15.1875L10.9922 9.375H7.24219L7.92188 4.05469L3.58594 10.3125H6.84375L6.14062 15.1875ZM3.75 18.75L4.6875 12.1875H0L8.4375 0H10.3125L9.375 7.5H15L5.625 18.75H3.75Z' />
          </svg>
        );
    }
  };

  const nameIsMatch = (): boolean => {
    const pattern: RegExp = new RegExp(`${search}`, 'gi');

    return pattern.test(name);
  };

  const getDisplayMode = (): string => {
    if (useServiceId() === index || services[index]?.isFavorite) {
      return '';
    }

    return nameIsMatch() || search === '' ? '' : 'none';
  };

  const Content = (): JSX.Element => {
    if (useServiceId() === index || search === '') {
      return <>{name}</>;
    }

    if (nameIsMatch()) {
      const pattern: RegExp = new RegExp(`(${search})|(\w+)`, 'gi');
      const correctPattern: RegExp = new RegExp(`${search}`, 'gi');
      let output = name.split(pattern);

      return (
        <>
          {output.map((item) => {
            return (
              <span
                className={cn(correctPattern.test(item) && styles.highlight)}
              >
                {item}
              </span>
            );
          })}
        </>
      );
    }

    return <>{name}</>;
  };

  return (
    <Link
      to={`/services?serviceId=${index}`}
      style={{
        display: getDisplayMode(),
      }}
      className={cn(
        styles.badge,
        useServiceId() === index ? styles.active : '',
      )}
      onClick={() => {
        dispatch(changeLastServicePage(index));
      }}
    >
      {getIcon()}

      <div className={cn(styles.name)}>
        <Content />
      </div>

      <motion.svg
        initial={{
          opacity: services[index]?.isFavorite ? 1 : 0,
        }}
        animate={{
          opacity: services[index]?.isFavorite ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
        className={cn(styles.star)}
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M7.69146 13.3046C7.46483 14.2867 7.35152 14.7777 7.61966 14.9721C7.88781 15.1666 8.31932 14.9063 9.18234 14.3858L9.95644 13.9188C10.2096 13.7661 10.3362 13.6898 10.4761 13.6902C10.616 13.6906 10.7421 13.7677 10.9944 13.9219L11.7654 14.393C12.6298 14.9213 13.062 15.1854 13.3315 14.9915C13.601 14.7976 13.4878 14.3038 13.2615 13.3163L13.0581 12.4284C12.9926 12.1428 12.9599 12 13.003 11.8681C13.0462 11.7362 13.157 11.6403 13.3786 11.4486L14.0604 10.859C14.8222 10.2002 15.203 9.87078 15.1014 9.55566C14.9997 9.24054 14.4981 9.19588 13.495 9.10656L12.5989 9.02678C12.3084 9.00091 12.1631 8.98797 12.0513 8.90673C11.9394 8.82549 11.8822 8.69133 11.7678 8.42301L11.3928 7.54366C11.001 6.62507 10.8052 6.16578 10.4753 6.16534C10.1454 6.1649 9.94834 6.62367 9.55414 7.5412L9.18561 8.39898C9.0708 8.66623 9.01339 8.79985 8.90174 8.88073C8.79009 8.96161 8.64523 8.97451 8.35551 9.0003L7.44101 9.08173C6.44405 9.1705 5.94556 9.21489 5.84336 9.52887C5.74116 9.84285 6.118 10.1722 6.87168 10.8308L7.5779 11.4479C7.79768 11.64 7.90757 11.736 7.95014 11.8676C7.99271 11.9992 7.95989 12.1414 7.89426 12.4258L7.69146 13.3046ZM5.99967 18.7794C5.13608 19.3004 4.70429 19.5609 4.43611 19.3663C4.16792 19.1717 4.28157 18.6804 4.50886 17.6978L5.55117 13.1918C5.61727 12.9061 5.65032 12.7632 5.60734 12.6311C5.56435 12.4991 5.45356 12.403 5.23196 12.2109L1.73499 9.17911C0.973115 8.51858 0.592177 8.18832 0.694454 7.8732C0.796731 7.55808 1.29901 7.51448 2.30357 7.42728L6.92884 7.02578C7.22117 7.0004 7.36734 6.98771 7.47973 6.90598C7.59211 6.82425 7.64923 6.68911 7.76347 6.41882L9.55522 2.17941C9.94829 1.24938 10.1448 0.784357 10.4763 0.784357C10.8078 0.784357 11.0044 1.24938 11.3974 2.17941L13.1892 6.41883C13.3034 6.68911 13.3605 6.82425 13.4729 6.90598C13.5853 6.98771 13.7315 7.0004 14.0238 7.02578L18.6491 7.42728C19.6536 7.51448 20.1559 7.55808 20.2582 7.8732C20.3605 8.18832 19.9795 8.51858 19.2177 9.1791L15.7207 12.2109C15.4991 12.403 15.3883 12.4991 15.3453 12.6311C15.3023 12.7632 15.3354 12.9061 15.4015 13.1918L16.4438 17.6978C16.6711 18.6804 16.7847 19.1717 16.5165 19.3663C16.2484 19.5609 15.8166 19.3004 14.953 18.7794L10.9929 16.3905C10.7413 16.2388 10.6155 16.1629 10.4763 16.1629C10.3372 16.1629 10.2114 16.2388 9.95979 16.3905L5.99967 18.7794Z' />
        <path d='M7.69146 13.3046C7.46483 14.2867 7.35152 14.7777 7.61966 14.9721C7.88781 15.1666 8.31932 14.9063 9.18234 14.3858L9.95644 13.9188C10.2096 13.7661 10.3362 13.6898 10.4761 13.6902C10.616 13.6906 10.7421 13.7677 10.9944 13.9219L11.7654 14.393C12.6298 14.9213 13.062 15.1854 13.3315 14.9915C13.601 14.7976 13.4878 14.3038 13.2615 13.3163L13.0581 12.4284C12.9926 12.1428 12.9599 12 13.003 11.8681C13.0462 11.7362 13.157 11.6403 13.3786 11.4486L14.0604 10.859C14.8222 10.2002 15.203 9.87078 15.1014 9.55566C14.9997 9.24054 14.4981 9.19588 13.495 9.10656L12.5989 9.02678C12.3084 9.00091 12.1631 8.98797 12.0513 8.90673C11.9394 8.82549 11.8822 8.69133 11.7678 8.42301L11.3928 7.54366C11.001 6.62507 10.8052 6.16578 10.4753 6.16534C10.1454 6.1649 9.94834 6.62367 9.55414 7.5412L9.18561 8.39898C9.0708 8.66623 9.01339 8.79985 8.90174 8.88073C8.79009 8.96161 8.64523 8.97451 8.35551 9.0003L7.44101 9.08173C6.44405 9.1705 5.94556 9.21489 5.84336 9.52887C5.74116 9.84285 6.118 10.1722 6.87168 10.8308L7.5779 11.4479C7.79768 11.64 7.90757 11.736 7.95014 11.8676C7.99271 11.9992 7.95989 12.1414 7.89426 12.4258L7.69146 13.3046Z' />
      </motion.svg>
    </Link>
  );
};

export default ServiceBadge;
