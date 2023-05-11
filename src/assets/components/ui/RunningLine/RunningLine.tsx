import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './RunningLine.module.scss';
import { RunningLineProps } from './RunningLine.props';

const RunningLine: FC<RunningLineProps> = props => {
	const defaultProps: RunningLineProps = {
		behavior: 'scroll',
		direction: 'left',
		loop: false,
		scrollSpeed: 6,
		scrollDelay: 85,
		verticalAlign: false,
		...props,
	};

	const {
		behavior,
		direction,
		loop,
		scrollSpeed,
		scrollDelay,
		style,
		className,
		verticalAlign,
		children,
	} = defaultProps;

	return (
		// @ts-ignore
		<marquee
			behavior={behavior}
			direction={direction}
			loop={loop}
			scrollamount={scrollSpeed}
			scrolldelay={
				scrollDelay !== undefined && scrollDelay >= 60 ? scrollDelay : undefined
			}
			truespeed={
				scrollDelay !== undefined && scrollDelay < 60 ? scrollDelay : undefined
			}
			style={style}
			className={cn(
				className,
				styles.runningLine,
				verticalAlign ? styles.vAlign : ''
			)}
		>
			{children}
			{/*
      // @ts-ignore */}
		</marquee>
	);
};

export default RunningLine;
