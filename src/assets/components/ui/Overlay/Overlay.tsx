import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './Overlay.module.scss';
import { OverlayProps } from './Overlay.props';

interface OverlayStyles extends CSSProperties {
	'--blur-amount'?: string;
	'--blur-color'?: string;
}

const Overlay: FC<OverlayProps> = ({
	className,
	backdrop,
	trigger,
	flexCenter,
	children,
}) => {
	const getStyles = (): OverlayStyles => {
		const { blurColor, blurAmount } = backdrop;

		return {
			'--blur-amount': blurAmount ? `${blurAmount}px` : '2px',
			background: blurColor,
		};
	};

	return (
		<>
			{trigger && (
				<div
					style={getStyles()}
					className={cn(
						className,
						styles.overlay,
						flexCenter ? styles.flexCenter : ''
					)}
				>
					{children}
				</div>
			)}
		</>
	);
};

export default Overlay;
