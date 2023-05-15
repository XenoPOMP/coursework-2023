import cn from 'classnames';
import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.props';

/**
 * Pop-up component.
 *
 * Place it in parent with "position: relative" style.
 *
 * Only works in desktop browsers because it uses Framer Motion gestures.
 *
 * @param {ReactNode} children      popup content element of type {@link ReactNode}.
 * @param position                  determines placement of popup.
 * @constructor
 */
const Popup: FC<PropsWithChildren<PopupProps>> = ({
	children,
	positionX,
	positionY,
}) => {
	/**
	 * Popup animation variants.
	 */
	const popupAnimationVariants: Variants = {
		initial: {
			opacity: 0,
			// pointerEvents: 'none',
			transition: {
				ease: 'easeIn',
				delay: 0.1,
				duration: 0.15,
			},
		},

		appear: {
			opacity: 1,
			// pointerEvents: 'all',
			transition: {
				ease: 'easeOut',
				delay: 0.35,
				duration: 0.15,
			},
		},
	};

	return (
		<motion.div
			variants={popupAnimationVariants}
			className={cn(
				styles.popup,
				styles[`${positionX}X`],
				styles[`${positionY}Y`]
			)}
		>
			{children}
		</motion.div>
	);
};

export default Popup;
