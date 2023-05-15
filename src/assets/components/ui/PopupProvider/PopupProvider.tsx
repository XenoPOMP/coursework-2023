import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import useAppSettings from '@hooks/useAppSettings';

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
	const { popups } = useAppSettings();

	return (
		<motion.div
			initial={'initial'}
			whileHover={popups.get() ? 'appear' : 'initial'}
		>
			{children}
		</motion.div>
	);
};

export default PopupProvider;
