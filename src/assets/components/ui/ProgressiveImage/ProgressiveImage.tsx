import cn from 'classnames';
import { CSSProperties, FC, ReactElement, useEffect, useState } from 'react';

import CircleLoader from '@ui/CircleLoader/CircleLoader';

import styles from './ProgressiveImage.module.scss';
import { ProgressiveImageProps } from './ProgressiveImage.props';

const ProgressiveImage: FC<ProgressiveImageProps> = ({
	src,
	alt,
	className,
	loaderColorScheme,
}) => {
	const getInlineVariables = (): CSSProperties => {
		const { backgroundColor, loaderColor } = loaderColorScheme;

		return {
			'--loader-background': backgroundColor,
			'--loader-color': loaderColor,
		} as CSSProperties;
	};

	// prettier-ignore
	const [element, setElement] = useState<ReactElement>(
    <div style={getInlineVariables()} className={cn(styles.loader)}>
      <CircleLoader className={cn(styles.circleLoader)} />
    </div>
  );

	useEffect(() => {
		const img = new Image();
		img.src = src ? src : '';
		img.onload = () => {
			setElement(<img className={cn(className)} src={src} alt={alt} />);
		};
	}, [src]);

	return element;
};

export default ProgressiveImage;
