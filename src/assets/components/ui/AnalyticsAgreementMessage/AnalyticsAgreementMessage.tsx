import cn from 'classnames';
import { FC } from 'react';
import styles from './AnalyticsAgreementMessage.module.scss';
import { AnalyticsAgreementMessageProps } from './AnalyticsAgreementMessage.props';
import useLocalization from '@hooks/useLocalization';
import { useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { Analytics } from '@redux/reducers/analyticsSlice';
import { motion } from 'framer-motion';

const AnalyticsAgreementMessage: FC<AnalyticsAgreementMessageProps> = ({}) => {
  const loc = useLocalization();

  const { agreement }: Analytics = useSelector(
    (state: IStore) => state.analytics,
  );

  const { everShown } = agreement;

  return (
    <motion.div
      initial={{
        x: '200%',
      }}
      animate={{
        x: everShown ? '200%' : '0%',
      }}
      transition={{
        duration: 0.25,
        ease: everShown ? 'easeOut' : 'easeIn',
      }}
      className={cn(styles.message)}
    >
      <div className={cn(styles.text)}>
        {loc.agreementMessage.text.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>

      <div className={cn(styles.buttons)}>
        <div className={cn(styles.button, styles.disallow)}>
          {loc.agreementMessage.disallow}
        </div>

        <div className={cn(styles.button, styles.allow)}>
          {loc.agreementMessage.allow}
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsAgreementMessage;
