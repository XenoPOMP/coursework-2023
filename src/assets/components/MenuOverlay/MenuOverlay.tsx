import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import IStore from '@redux/types/redux-types';

import useAuth from '@hooks/useAuth';
import useLocalization from '@hooks/useLocalization';

import styles from './MenuOverlay.module.scss';
import { MenuOverlayProps } from './MenuOverlay.props';

/**
 * Menu overlay contains doubled nav links.
 *
 * @param {boolean} isOpened       show overlay if true
 * @param {void} [onLinkClick]     link callback
 * @constructor
 */
const MenuOverlay: FC<MenuOverlayProps> = ({ isOpened, onLinkClick }) => {
	const loc = useLocalization();
	const lastServicePage = useSelector(
		(state: IStore) => state.lastPage.service
	);
	const { isLogged } = useAuth();

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
		>
			<div className={cn(styles.blocks)}>
				<div className={cn(styles.block)}>
					<Link
						to={'/'}
						onClick={() => {
							if (onLinkClick) {
								onLinkClick();
							}
						}}
					>
						{loc.header.nav.mainPage}
					</Link>

					<Link
						to={`/services${
							lastServicePage !== null ? `?serviceId=${lastServicePage}` : ''
						}`}
						onClick={() => {
							if (onLinkClick) {
								onLinkClick();
							}
						}}
					>
						{loc.header.nav.services}
					</Link>

					<Link
						to={`/blog`}
						onClick={() => {
							if (onLinkClick) {
								onLinkClick();
							}
						}}
					>
						{loc.header.nav.blog}
					</Link>
				</div>

				<div className={cn(styles.block)}>
					<Link
						to={`/settings`}
						onClick={() => {
							if (onLinkClick) {
								onLinkClick();
							}
						}}
						className={cn(styles.toSettings)}
					>
						{loc.header.nav.settings}
					</Link>

					{isLogged && (
						<Link
							to={`/admin/dashboard`}
							onClick={() => {
								if (onLinkClick) {
									onLinkClick();
								}
							}}
							className={cn(styles.toDashboard)}
						>
							{loc.header.nav.analytics}
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default MenuOverlay;
