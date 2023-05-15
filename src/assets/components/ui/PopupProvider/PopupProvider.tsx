import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import styles from './PopupProvider.module.scss';
import { PopupProviderProps } from './PopupProvider.props';

/**
 * Popup provider component.
 *
 * Provides appear animation for popup.
 *
 * @example
 * <PopupProvider>
 *   <div style={{
 *     position: 'relative',
 *   }}>
 *   	<span>Hello world!</span>
 *
 *    <Popup positionX={'center'} positionY={'bottom'}>
 *    	Some popup text
 *    </Popup>
 *  </div>
 * </PopupProvider>
 *
 * @param children
 * @constructor
 */
const PopupProvider: FC<PropsWithChildren<PopupProviderProps>> = ({
	children,
}) => {
	return (
		<motion.div initial={'initial'} whileHover={'appear'}>
			{children}
		</motion.div>
	);
};

export default PopupProvider;
