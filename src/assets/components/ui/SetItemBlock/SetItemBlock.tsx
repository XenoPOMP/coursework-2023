import cn from 'classnames';
import { FC } from 'react';
import styles from './SetItemBlock.module.scss';
import { SetItemBlockProps } from './SetItemBlock.props';

const SetItemBlock: FC<SetItemBlockProps> = ({ children, locales }) => {
  const { title, desc } = locales;

  return (
    <div className={cn(styles.item)}>
      <div className={cn(styles.title)}>
        <h3>{title}</h3>

        <div className={cn(styles.desc)}>{desc}</div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SetItemBlock;
