import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.props';

/**
 * Pop-up component.
 *
 * Place it in parent with "position: relative" style.
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
	return (
		<motion.div
			whileHover={{
				opacity: 0.5,
			}}
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
