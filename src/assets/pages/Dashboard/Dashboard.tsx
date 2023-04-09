import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import { DashboardProps } from './Dashboard.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import useAuth from '@hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import SelectButton from '@ui/SelectButton/SelectButton';
import numericGenerator from '@utils/numericGenerator';
import { changeDatePart, DatePart } from '@redux/reducers/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';

const Dashboard: FC<DashboardProps> = ({}) => {
  const loc = useLocalization();
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentDatePart: DatePart = useSelector(
    (state: IStore) => state.admin.datePart,
  );

  return (
    <Page
      header={{
        tabIndex: -1,
        renderNav: false,
      }}
      meta={loc.meta.dashboard}
    >
      {isLogged ? (
        <div className={cn(styles.page)}>
          <div className={cn(styles.content)}>
            <div className={cn(styles.datepart)}>
              <SelectButton
                isTriggered={currentDatePart === 'day'}
                onClick={() => dispatch(changeDatePart('day'))}
              >
                {loc.dashboard.dateParts.day}
              </SelectButton>

              <SelectButton
                isTriggered={currentDatePart === 'week'}
                onClick={() => dispatch(changeDatePart('week'))}
              >
                {loc.dashboard.dateParts.week}
              </SelectButton>

              <SelectButton
                isTriggered={currentDatePart === 'month'}
                onClick={() => dispatch(changeDatePart('month'))}
              >
                {loc.dashboard.dateParts.month}
              </SelectButton>

              <SelectButton
                isTriggered={currentDatePart === 'year'}
                onClick={() => dispatch(changeDatePart('year'))}
              >
                {loc.dashboard.dateParts.year}
              </SelectButton>
            </div>

            <div className={cn(styles.grid)}></div>
          </div>
        </div>
      ) : (
        <div className={cn(styles.denied)}>
          <svg
            width='281'
            height='281'
            viewBox='0 0 281 281'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0_171_975'
              style={{
                maskType: 'alpha',
              }}
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='281'
              height='281'
            >
              <rect width='281' height='281' fill='black' />
            </mask>
            <g mask='url(#mask0_171_975)'>
              <path
                d='M231.194 264.322L142.796 175.925C136.551 186.462 128.063 194.902 117.33 201.244C106.598 207.586 94.7918 210.757 81.9126 210.757C62.3987 210.757 45.8119 203.927 32.1522 190.267C18.4925 176.608 11.6626 160.021 11.6626 140.507C11.6626 127.628 14.8336 115.822 21.1756 105.089C27.5176 94.3565 35.9574 85.868 46.4949 79.6235L16.6386 49.7673L33.323 33.3756L247.586 247.931L231.194 264.322ZM245.829 105.382L280.954 140.507L227.389 194.072L190.215 157.191L204.85 146.361L225.925 162.167L247.878 140.507L236.17 128.799H161.822L138.405 105.382H245.829ZM81.9126 187.34C91.8647 187.34 100.695 184.657 108.403 179.291C116.111 173.924 121.721 166.948 125.233 158.362L64.0574 97.186C55.4713 100.699 48.4951 106.309 43.1287 114.017C37.7624 121.725 35.0793 130.555 35.0793 140.507C35.0793 153.386 39.665 164.411 48.8366 173.583C58.0081 182.754 69.0334 187.34 81.9126 187.34ZM81.9126 163.924C75.473 163.924 69.9603 161.631 65.3746 157.045C60.7888 152.459 58.4959 146.946 58.4959 140.507C58.4959 134.067 60.7888 128.555 65.3746 123.969C69.9603 119.383 75.473 117.09 81.9126 117.09C88.3522 117.09 93.8649 119.383 98.4506 123.969C103.036 128.555 105.329 134.067 105.329 140.507C105.329 146.946 103.036 152.459 98.4506 157.045C93.8649 161.631 88.3522 163.924 81.9126 163.924Z'
                fill='black'
              />
            </g>
          </svg>

          <div className={cn(styles.text)}>{loc.dashboard.accessDenied}</div>
        </div>
      )}
    </Page>
  );
};

export default Dashboard;
