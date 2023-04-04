import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './AnalyticsAgreementMessage.module.scss';
import { AnalyticsAgreementMessageProps } from './AnalyticsAgreementMessage.props';
import useLocalization from '@hooks/useLocalization';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import {
  Analytics,
  AnalyticsAgreement,
  analyticsInitial,
  loadAnalyticsAgreement,
  switchAllow,
} from '@redux/reducers/analyticsSlice';
import { motion } from 'framer-motion';
import { useLocalStorage } from '@hooks/useLocalStorage';
import useAppSettings from '@hooks/useAppSettings';

const AnalyticsAgreementMessage: FC<AnalyticsAgreementMessageProps> = ({}) => {
  const loc = useLocalization();
  const dispatch = useDispatch();
  const { cookiePrefix } = useAppSettings();

  const { agreement }: Analytics = useSelector(
    (state: IStore) => state.analytics,
  );

  const { everShown } = agreement;

  const [getCookieAgreement, setCookieAgreement] =
    useLocalStorage<AnalyticsAgreement>(
      `${cookiePrefix.get()}-ag-ever-changed`,
      analyticsInitial.agreement,
    );

  useEffect(() => {
    dispatch(loadAnalyticsAgreement(getCookieAgreement));
  }, []);

  useEffect(() => {
    setCookieAgreement(agreement);
  }, [agreement]);

  return (
    <motion.div
      initial={{
        x: '200%',
      }}
      animate={{
        x: everShown ? '200%' : '0%',
      }}
      transition={{
        duration: 0.5,
        ease: everShown ? 'easeIn' : 'easeOut',
      }}
      className={cn(styles.message)}
    >
      <div className={cn(styles.text)}>
        {loc.agreementMessage.text.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>

      <div className={cn(styles.buttons)}>
        <div
          className={cn(styles.button, styles.disallow)}
          onClick={() => dispatch(switchAllow(false))}
        >
          {loc.agreementMessage.disallow}
        </div>

        <div
          className={cn(styles.button, styles.allow)}
          onClick={() => dispatch(switchAllow(true))}
        >
          {loc.agreementMessage.allow}
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsAgreementMessage;
