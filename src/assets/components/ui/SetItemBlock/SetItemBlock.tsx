import cn from 'classnames';
import { FC } from 'react';
import styles from './SetItemBlock.module.scss';
import { SetItemBlockProps } from './SetItemBlock.props';

const SetItemBlock: FC<SetItemBlockProps> = ({
  children,
  locales,
  flexWrap,
}) => {
  const { title, desc } = locales;

  return (
    <div className={cn(styles.item)}>
      <div className={cn(styles.title)}>
        <h3>{title}</h3>

        <div className={cn(styles.desc)}>{desc}</div>
      </div>

      <div className={cn(styles.child)}>
        {flexWrap ? (
          <div className={cn(styles.flexWrap)}>{children}</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default SetItemBlock;
