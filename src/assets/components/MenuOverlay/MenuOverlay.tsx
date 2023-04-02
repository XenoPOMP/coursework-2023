import cn from 'classnames';
import { FC } from 'react';
import styles from './MenuOverlay.module.scss';
import { MenuOverlayProps } from './MenuOverlay.props';
import { motion } from 'framer-motion';

const MenuOverlay: FC<MenuOverlayProps> = ({ isOpened }) => {
  return (
    <motion.div
      initial={{
        opacity: isOpened ? 1 : 0,
        pointerEvents: isOpened ? 'all' : 'none',
      }}
      animate={{
        opacity: isOpened ? 1 : 0,
        pointerEvents: isOpened ? 'all' : 'none',
      }}
      transition={{
        duration: 0.15,
      }}
      className={cn(styles.overlay)}
    ></motion.div>
  );
};

export default MenuOverlay;
