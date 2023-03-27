import cn from 'classnames';
import { FC } from 'react';
import styles from './LandingCard.module.scss';
import { LandingCardProps } from './LandingCard.props';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

const LandingCard: FC<LandingCardProps> = ({ img }) => {
  return (
    <div className={cn(styles.card)}>
      <div className={cn(styles.imageBlock)}>
        <ProgressiveImage
          loaderColorScheme={{
            backgroundColor: 'transparent',
            loaderColor: 'red',
          }}
          className={cn(styles.block)}
          src={img}
        />

        <div className={cn(styles.textContent)}>12</div>
      </div>
    </div>
  );
};

export default LandingCard;
