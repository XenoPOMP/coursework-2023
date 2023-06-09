import cn from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import IStore from '@redux/types/redux-types';

import useLocalization from '@hooks/useLocalization';

import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({ tabIndex }) => {
	const loc = useLocalization();
	const lastServicePage = useSelector(
		(state: IStore) => state.lastPage.service
	);

	return (
		<nav className={cn(styles.headerNav)}>
			<NavLink
				to={'/'}
				className={cn(styles.item, tabIndex === 0 ? styles.active : '')}
			>
				{loc.header.nav.mainPage}
			</NavLink>

			<NavLink
				to={`/services${
					lastServicePage !== null ? `?serviceId=${lastServicePage}` : ''
				}`}
				className={cn(styles.item, tabIndex === 1 ? styles.active : '')}
			>
				{loc.header.nav.services}
			</NavLink>

			<NavLink
				to={'/blog'}
				className={cn(styles.item, tabIndex === 2 ? styles.active : '')}
			>
				{loc.header.nav.blog}
			</NavLink>
		</nav>
	);
};

export default Navbar;
