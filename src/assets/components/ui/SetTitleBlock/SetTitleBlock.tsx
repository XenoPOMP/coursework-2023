import cn from 'classnames';
import { FC } from 'react';
import styles from './SetTitleBlock.module.scss';
import { SetTitleBlockProps } from './SetTitleBlock.props';

const SetTitleBlock: FC<SetTitleBlockProps> = ({ locales }) => {
  const { title, desc } = locales;

  return (
    <div className={cn(styles.block)}>
      <h2>{title}</h2>

      <div className={cn(styles.desc)}>{desc}</div>
    </div>
  );
};

export default SetTitleBlock;
