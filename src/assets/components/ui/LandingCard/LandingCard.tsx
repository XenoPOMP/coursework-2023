import cn from 'classnames';
import { FC } from 'react';

import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import styles from './LandingCard.module.scss';
import { LandingCardProps } from './LandingCard.props';

const LandingCard: FC<LandingCardProps> = ({ img, locales }) => {
	return (
		<div className={cn(styles.card)}>
			<div className={cn(styles.imageBlock)}>
				<ProgressiveImage
					loaderColorScheme={{
						backgroundColor: 'transparent',
						loaderColor: 'var(--main-card-content-font)',
					}}
					className={cn(styles.block)}
					src={img}
				/>

				<div className={cn(styles.textContent)}>{locales.imageTitle}</div>
			</div>

			<div className={cn(styles.contentBlock)}>
				<div className={cn(styles.line)}></div>

				<div className={cn(styles.title)}>{locales.title}</div>

				<div className={cn(styles.content)}>{locales.content}</div>

				<div className={cn(styles.arrow)}>
					<svg
						width='19'
						height='19'
						viewBox='0 0 19 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M1 9C0.447715 9 0 9.44772 0 10C0 10.5523 0.447715 11 1 11V9ZM18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289L12.3431 2.92893C11.9526 2.53841 11.3195 2.53841 10.9289 2.92893C10.5384 3.31946 10.5384 3.95262 10.9289 4.34315L16.5858 10L10.9289 15.6569C10.5384 16.0474 10.5384 16.6805 10.9289 17.0711C11.3195 17.4616 11.9526 17.4616 12.3431 17.0711L18.7071 10.7071ZM1 11H18V9H1V11Z' />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default LandingCard;
