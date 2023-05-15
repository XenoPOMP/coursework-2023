import cn from 'classnames';
import { FC, useEffect } from 'react';
import { isFirefox, isMobile } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import MenuOverlay from '@components/MenuOverlay/MenuOverlay';

import Logotype from '@ui/Logotype/Logotype';
import Navbar from '@ui/Navbar/Navbar';
import Popup from '@ui/Popup/Popup';

import useAuth from '@hooks/useAuth';
import useBoolean from '@hooks/useBoolean';
import useLocalization from '@hooks/useLocalization';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = props => {
	const {
		tabIndex,
		renderNav,
		renderRightButtons,
		renderBackButton,
		renderHeader,
		renderSignOutButton,
	}: HeaderProps = {
		tabIndex: 0,
		renderNav: true,
		renderBackButton: false,
		renderRightButtons: true,
		renderHeader: true,
		renderSignOutButton: false,
		...props,
	};

	const navigate = useNavigate();
	const { isLogged, signUp } = useAuth();
	const [menuOpened, toggleMenu] = useBoolean(false);
	const dispatch = useDispatch();

	const loc = useLocalization();

	useEffect(() => {
		if (renderNav && renderBackButton) {
			throw new Error('Can`t render navbar and back button at the same time');
		}

		if (renderNav && renderBackButton && renderSignOutButton) {
			throw new Error('Can render only one instance at once');
		}

		if (renderBackButton && renderSignOutButton) {
			throw new Error(
				'Can`t render back button and sign out button at the same time`'
			);
		}
	}, []);

	return (
		<>
			{renderHeader && (
				<header
					className={cn(
						styles.appHeader,
						isFirefox && styles.firefox,
						isMobile && styles.mobile
					)}
				>
					<MenuOverlay isOpened={menuOpened} onLinkClick={toggleMenu} />

					<div className={cn(styles.container, styles.left)}>
						{renderNav && <Navbar tabIndex={tabIndex} />}

						{renderBackButton && (
							<div
								className={cn(styles.squareButton)}
								onClick={() => {
									navigate(-1);
								}}
							>
								<svg
									width='31'
									height='24'
									viewBox='0 0 31 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM31 10.5L2 10.5L2 13.5L31 13.5L31 10.5Z' />
								</svg>
							</div>
						)}

						{renderSignOutButton && isLogged && (
							<div
								className={cn(styles.squareButton)}
								onClick={() => {
									signUp(null);
									// navigate('/');
								}}
							>
								<svg
									width='21'
									height='21'
									viewBox='0 0 21 21'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M0.43934 0.43934C1.02513 -0.146446 1.97487 -0.146446 2.56066 0.43934L20.2383 18.117C20.8241 18.7028 20.8241 19.6525 20.2383 20.2383C19.6525 20.8241 18.7028 20.8241 18.117 20.2383L0.43934 2.56066C-0.146446 1.97487 -0.146446 1.02513 0.43934 0.43934Z' />
									<path d='M20.2383 0.43934C20.8241 1.02513 20.8241 1.97487 20.2383 2.56066L2.56066 20.2383C1.97487 20.8241 1.02513 20.8241 0.43934 20.2383C-0.146447 19.6525 -0.146447 18.7028 0.43934 18.117L18.117 0.439339C18.7028 -0.146447 19.6525 -0.146446 20.2383 0.43934Z' />
								</svg>
							</div>
						)}
					</div>

					<div className={cn(styles.container, styles.center)}>
						<Logotype variant={'monochrome'} />
					</div>

					<div className={cn(styles.container, styles.right)}>
						{renderRightButtons && (
							<>
								{isLogged && (
									<Link
										to={'/admin/dashboard'}
										className={cn(styles.squareButton, styles.dashboard)}
									>
										<svg
											width='30'
											height='30'
											viewBox='0 0 30 30'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M0 30V26.6667L3.33333 23.3333V30H0ZM6.66667 30V20L10 16.6667V30H6.66667ZM13.3333 30V16.6667L16.6667 20.0417V30H13.3333ZM20 30V20.0417L23.3333 16.7083V30H20ZM26.6667 30V13.3333L30 10V30H26.6667ZM0 21.375V16.6667L11.6667 5L18.3333 11.6667L30 0V4.70833L18.3333 16.375L11.6667 9.70833L0 21.375Z' />
										</svg>
									</Link>
								)}

								<Link
									to={'/settings'}
									className={cn(styles.squareButton, styles.settings)}
								>
									<svg
										width='31'
										height='30'
										viewBox='0 0 31 30'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M12.7119 29.99C11.7033 29.99 10.8525 29.239 10.7274 28.2381L10.4736 26.2078C10.3954 25.5822 9.96669 25.0696 9.42812 24.7418V24.7418V24.7418C8.89045 24.4145 8.23012 24.3284 7.64981 24.5723L5.74698 25.3718C4.81895 25.7617 3.74575 25.4011 3.2414 24.53L0.885509 20.4607C0.379756 19.5872 0.604235 18.4736 1.40894 17.8643L3.45632 16.3138C3.70619 16.1246 3.82373 15.8145 3.82373 15.5011V15.5011V14.4889V14.4889C3.82373 14.1755 3.70619 13.8655 3.45632 13.6762L1.40894 12.1258C0.604235 11.5164 0.379756 10.4029 0.885509 9.52931L3.2414 5.46005C3.74575 4.5889 4.81896 4.22835 5.74698 4.61827L7.63524 5.41166C8.22459 5.65929 8.89469 5.57036 9.44687 5.24826V5.24826V5.24826C9.98455 4.93461 10.3942 4.41721 10.4714 3.79954L10.7274 1.75193C10.8525 0.751073 11.7033 0 12.7119 0H17.4281C18.4367 0 19.2875 0.751073 19.4126 1.75193L19.6664 3.78224C19.7446 4.40787 20.1733 4.92043 20.7119 5.24826V5.24826V5.24826C21.2496 5.57554 21.9099 5.66161 22.4902 5.41778L24.393 4.61827C25.321 4.22835 26.3943 4.5889 26.8986 5.46005L29.2545 9.52932C29.7602 10.4029 29.5358 11.5164 28.7311 12.1258L26.6837 13.6762C26.4338 13.8655 26.3163 14.1755 26.3163 14.4889V14.4889V15.5011V15.5011C26.3163 15.8105 26.4038 16.1303 26.6505 16.3171L28.6936 17.8643C29.4983 18.4736 29.7228 19.5872 29.217 20.4607L26.8638 24.5253C26.3583 25.3985 25.2816 25.7584 24.3527 25.3648L22.5035 24.5813C21.9152 24.332 21.2451 24.4198 20.6931 24.7418V24.7418V24.7418C20.1554 25.0554 19.7458 25.5728 19.6686 26.1905L19.4126 28.2381C19.2875 29.239 18.4367 29.99 17.4281 29.99H12.7119ZM15.145 20.2433C16.5945 20.2433 17.8316 19.731 18.8562 18.7063C19.8809 17.6816 20.3932 16.4445 20.3932 14.995C20.3932 13.5455 19.8809 12.3084 18.8562 11.2838C17.8316 10.2591 16.5945 9.74677 15.145 9.74677C13.6705 9.74677 12.4271 10.2591 11.415 11.2838C10.4028 12.3084 9.89672 13.5455 9.89672 14.995C9.89672 16.4445 10.4028 17.6816 11.415 18.7063C12.4271 19.731 13.6705 20.2433 15.145 20.2433ZM15.145 17.2443C14.5202 17.2443 13.9891 17.0256 13.5518 16.5882C13.1144 16.1509 12.8957 15.6198 12.8957 14.995C12.8957 14.3702 13.1144 13.8392 13.5518 13.4018C13.9891 12.9644 14.5202 12.7458 15.145 12.7458C15.7698 12.7458 16.3008 12.9644 16.7382 13.4018C17.1756 13.8392 17.3942 14.3702 17.3942 14.995C17.3942 15.6198 17.1756 16.1509 16.7382 16.5882C16.3008 17.0256 15.7698 17.2443 15.145 17.2443ZM13.3894 25.5144C13.4928 26.3575 14.2088 26.991 15.0582 26.991V26.991C15.9016 26.991 16.6146 26.3661 16.725 25.5299L16.8802 24.3549C16.9869 23.5466 17.584 22.9055 18.3323 22.5818C18.6359 22.4504 18.9293 22.302 19.2124 22.1364C19.4916 21.9731 19.7608 21.7953 20.02 21.6032C20.6698 21.1214 21.5178 20.9324 22.2651 21.2419L23.3854 21.7059C24.161 22.0271 25.0545 21.7223 25.4722 20.9941V20.9941C25.8904 20.2649 25.7012 19.3386 25.0307 18.8318L23.8884 17.9684C23.3477 17.5598 23.1556 16.848 23.2423 16.1759V16.1759C23.2923 15.7885 23.3173 15.3949 23.3173 14.995C23.3173 14.5952 23.2923 14.2015 23.2423 13.8142V13.8142C23.1556 13.1421 23.3477 12.4303 23.8884 12.0216L25.0357 11.1544C25.7034 10.6498 25.8917 9.72748 25.4754 9.0015V9.0015C25.0568 8.27168 24.1589 7.96972 23.3844 8.2983L22.3021 8.75745C21.5368 9.08214 20.6644 8.87925 20.0005 8.3788C19.7473 8.18792 19.4846 8.01286 19.2124 7.85364C18.9332 7.69033 18.644 7.54368 18.3448 7.41368C17.5907 7.08607 16.991 6.43612 16.891 5.6201L16.7506 4.47563C16.6472 3.63254 15.9312 2.999 15.0818 2.999V2.999C14.2384 2.999 13.5254 3.62395 13.415 4.46015L13.2598 5.63513C13.1531 6.44347 12.556 7.0846 11.8077 7.40829C11.5041 7.53962 11.2107 7.68807 10.9276 7.85364C10.6484 8.01696 10.3792 8.19471 10.12 8.3869C9.47019 8.86864 8.62222 9.05763 7.8749 8.74814L6.74953 8.28208C5.97681 7.96206 5.08664 8.26569 4.67053 8.9912V8.9912C4.25158 9.72169 4.44475 10.65 5.12031 11.1528L6.23229 11.9803C6.78597 12.3924 6.98893 13.1113 6.89771 13.7954V13.7954C6.84773 14.1703 6.82274 14.5702 6.82274 14.995C6.82274 15.3949 6.84773 15.7823 6.89771 16.1571V16.1571C6.98906 16.8423 6.78887 17.5624 6.23745 17.9791L5.10425 18.8356C4.4366 19.3402 4.24826 20.2626 4.66463 20.9886V20.9886C5.0832 21.7184 5.98109 22.0203 6.7556 21.6917L7.83788 21.2326C8.60322 20.9079 9.47562 21.1108 10.1395 21.6112C10.3927 21.8021 10.6554 21.9772 10.9276 22.1364C11.2068 22.2997 11.496 22.4464 11.7952 22.5764C12.5493 22.904 13.149 23.5539 13.249 24.3699L13.3894 25.5144Z' />
									</svg>

									<Popup positionX={'center'} positionY={'bottom'}>
										{loc.header.nav.settings}
									</Popup>
								</Link>

								<div
									className={cn(styles.squareButton, styles.menu)}
									onClick={toggleMenu}
								>
									<svg
										width='31'
										height='15'
										viewBox='0 0 31 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect y='6' width='30' height='3' rx='1.5' />
										<rect x='13' width='17.1429' height='3' rx='1.5' />
										<rect y='12' width='17.1429' height='3' rx='1.5' />
									</svg>
								</div>
							</>
						)}
					</div>
				</header>
			)}
		</>
	);
};

export default Header;
