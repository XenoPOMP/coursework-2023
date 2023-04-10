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
            <div>{labels?.data?.replace(/XX/gi, `${data?.data}`)}</div>
          )
        ) : (
          <div></div>
        )}
      </div>

      <div className={cn(styles.title)}>{labels?.title}</div>
    </div>
  );
};

export default DashboardCard;
