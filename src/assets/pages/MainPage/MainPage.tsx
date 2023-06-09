import cn from 'classnames';

import Page from '@components/Page/Page';

import LandingCard from '@ui/LandingCard/LandingCard';
import Patch from '@ui/Patch/Patch';

import useLocalization from '@hooks/useLocalization';

import numericGenerator from '@utils/numericGenerator';

import imageZero from '@media/images/landing/image0.png';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const loc = useLocalization();

	return (
		<Page
			meta={loc.meta.mainPage}
			header={{
				tabIndex: 0,
			}}
		>
			<div className={cn(styles.page)}>
				<section className={cn(styles.somethingSpecial)}>
					<div className={cn(styles.label)}>{loc.mainPage.leftPart.label}</div>
					<div className={cn(styles.subLabel)}>
						{loc.mainPage.leftPart.subLabel}
					</div>
				</section>

				<div className={cn(styles.patchPlaceholder)}>
					<Patch />
				</div>

				<section className={cn(styles.cards)}>
					<div className={cn(styles.content)}>
						{numericGenerator(3).map(key => (
							<LandingCard
								img={imageZero}
								locales={loc.mainPage.rightPart.cards[0]}
								key={`landing-card-${key}`}
							/>
						))}
					</div>
				</section>
			</div>
		</Page>
	);
};

export default MainPage;
