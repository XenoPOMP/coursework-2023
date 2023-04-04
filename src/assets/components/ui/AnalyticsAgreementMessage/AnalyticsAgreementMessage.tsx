import cn from 'classnames';
import { FC } from 'react';
import styles from './AnalyticsAgreementMessage.module.scss';
import { AnalyticsAgreementMessageProps } from './AnalyticsAgreementMessage.props';
import useLocalization from '@hooks/useLocalization';

const AnalyticsAgreementMessage: FC<AnalyticsAgreementMessageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <div className={cn(styles.message)}>
      <div className={cn(styles.text)}>
        {loc.agreementMessage.text.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsAgreementMessage;
