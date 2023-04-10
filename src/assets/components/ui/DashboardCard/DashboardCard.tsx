import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './DashboardCard.module.scss';
import { DashboardCardProps } from './DashboardCard.props';
import { DatePart } from '@redux/reducers/adminSlice';
import { useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import useAuth from '@hooks/useAuth';
import { useQuery } from 'react-query';
import DashboardService from '@services/Dashboard.service';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import useFormattedTime from '@hooks/useFormattedTime';

const DashboardCard: FC<DashboardCardProps> = ({ query, labels }) => {
  const currentDatePart: DatePart = useSelector(
    (state: IStore) => state.admin.datePart,
  );
  const { uuid } = useAuth();
  const formattedQuery = query.replace(/{{datepart}}/gi, currentDatePart);

  const { isLoading, error, data, refetch, isRefetching } = useQuery(
    `Query for ${query}`,
    () => DashboardService.execQuery(formattedQuery, uuid),
  );
  const numericData = useFormattedTime(data?.data);

  useEffect(() => {
    refetch();
  }, [currentDatePart]);

  return (
    <div className={cn(styles.card)}>
      <div className={cn(styles.body)}>
        {!error ? (
          isLoading || isRefetching ? (
            <CircleLoader className={cn(styles.loader)} />
          ) : (
            <div>{labels?.data?.replace(/XX/gi, `${numericData}`)}</div>
          )
        ) : (
          <svg
            className={cn(styles.error)}
            viewBox='0 0 82 82'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0_177_995'
              style={{ maskType: 'alpha' }}
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='82'
              height='82'
            >
              <rect width='82' height='82' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_177_995)'>
              <path d='M3.4165 71.7499L40.9998 6.83325L78.5832 71.7499H3.4165ZM15.204 64.9166H66.7957L40.9998 20.4999L15.204 64.9166ZM40.9998 61.4999C41.9679 61.4999 42.7794 61.1725 43.4342 60.5176C44.0891 59.8628 44.4165 59.0513 44.4165 58.0832C44.4165 57.1152 44.0891 56.3037 43.4342 55.6489C42.7794 54.994 41.9679 54.6666 40.9998 54.6666C40.0318 54.6666 39.2203 54.994 38.5655 55.6489C37.9106 56.3037 37.5832 57.1152 37.5832 58.0832C37.5832 59.0513 37.9106 59.8628 38.5655 60.5176C39.2203 61.1725 40.0318 61.4999 40.9998 61.4999ZM37.5832 51.2499H44.4165V34.1666H37.5832V51.2499Z' />
            </g>
          </svg>
        )}
      </div>

      <div className={cn(styles.title)}>{labels?.title}</div>
    </div>
  );
};

export default DashboardCard;
