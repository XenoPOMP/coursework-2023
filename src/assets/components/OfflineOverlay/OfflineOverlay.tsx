import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';
import Emoji from 'react-ios-emojis';
import { useIsOnline } from 'react-use-is-online';

import Overlay from '@ui/Overlay/Overlay';

import useBoolean from '@hooks/useBoolean';
import useLocalization from '@hooks/useLocalization';

import styles from './OfflineOverlay.module.scss';
import type { OfflineOverlayProps } from './OfflineOverlay.props';

const OfflineOverlay: FC<OfflineOverlayProps> = ({}) => {
	const { isOffline } = useIsOnline();
	const loc = useLocalization();

	return (
		<motion.div
			initial={{
				opacity: isOffline ? 1 : 0,
				pointerEvents: isOffline ? 'all' : 'none',
			}}
			animate={{
				opacity: isOffline ? 1 : 0,
				pointerEvents: isOffline ? 'all' : 'none',
			}}
			transition={{
				ease: isOffline ? 'easeOut' : 'easeIn',
				duration: 0.3,
			}}
			className={cn(styles.offlineOverlay)}
		>
			<svg
				className={cn(styles.icon)}
				viewBox='0 0 89 73'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M81.2125 30.601C76.4535 25.8695 70.9373 22.1673 64.6641 19.4943C58.3908 16.8213 51.6694 15.4848 44.5 15.4848C43.2021 15.4848 41.9505 15.5309 40.7453 15.6231C39.5401 15.7153 38.3194 15.8535 37.0833 16.0379L27.6271 6.63636C30.3465 5.89899 33.1123 5.34596 35.9245 4.97727C38.7366 4.60859 41.5951 4.42424 44.5 4.42424C53.2764 4.42424 61.4656 6.05261 69.0677 9.30934C76.6698 12.5661 83.3139 17.021 89 22.6742L81.2125 30.601ZM66.3792 45.1641L47.6521 26.5455C52.6583 27.037 57.3401 28.2967 61.6974 30.3245C66.0547 32.3523 69.9021 35.0253 73.2396 38.3434L66.3792 45.1641ZM73.2396 73L38.3813 38.1591C35.4764 38.835 32.7724 39.8489 30.2693 41.2008C27.7661 42.5526 25.5257 44.2424 23.5479 46.2702L15.7604 38.3434C17.7382 36.3771 19.8705 34.6566 22.1573 33.1818C24.4441 31.7071 26.8854 30.4167 29.4813 29.3106L21.1375 21.0152C18.6035 22.3056 16.2394 23.7342 14.0453 25.3011C11.8512 26.8681 9.76528 28.6347 7.7875 30.601L0 22.6742C1.97778 20.7079 4.03281 18.9413 6.1651 17.3744C8.2974 15.8075 10.5687 14.3173 12.9792 12.904L5.19167 5.16162L10.3833 0L78.6167 67.8384L73.2396 73ZM44.5 67.101L31.4281 54.0126C33.0969 52.3535 35.0437 51.0478 37.2687 50.0953C39.4937 49.1429 41.9042 48.6667 44.5 48.6667C47.0958 48.6667 49.5062 49.1429 51.7312 50.0953C53.9562 51.0478 55.9031 52.3535 57.5719 54.0126L44.5 67.101Z' />
			</svg>

			<div className={cn(styles.text)}>
				<p>{loc.offlineScreen.noConnectionLabel[0]}</p>
				<p>{loc.offlineScreen.noConnectionLabel[1]}</p>
			</div>

			<div className={cn(styles.retryButton)}>
				{loc.offlineScreen.retryLabel}
			</div>
		</motion.div>
	);
};

export default OfflineOverlay;
