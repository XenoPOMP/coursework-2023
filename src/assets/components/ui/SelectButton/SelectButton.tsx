import cn from 'classnames';
import { FC } from 'react';
import styles from './SelectButton.module.scss';
import { SelectButtonProps } from './SelectButton.props';

const SelectButton: FC<SelectButtonProps> = ({
  children,
  isTriggered,
  onClick,
}) => {
  return (
    <div
      className={cn(styles.button, isTriggered ? styles.active : '')}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SelectButton;
