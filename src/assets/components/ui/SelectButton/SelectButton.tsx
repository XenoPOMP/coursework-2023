import cn from 'classnames';
import { FC, PropsWithChildren, useEffect } from 'react';

import styles from './SelectButton.module.scss';
import { SelectButtonProps } from './SelectButton.props';

const SelectButton: FC<PropsWithChildren<SelectButtonProps>> = ({
	children,
	isTriggered,
	onClick,
	className,
	style,
	variant,
}) => {
	const getInlineClasses = (): string => {
		const classList: string[] = [];

		if (variant === 'with-icon-left') {
			classList.push(styles.withIcon, styles.left);
		}

		if (variant === 'with-icon-right') {
			classList.push(styles.withIcon, styles.right);
		}

		return cn(...classList);
	};

	return (
		<div
			className={cn(
				styles.button,
				className,
				isTriggered ? styles.active : '',
				getInlineClasses()
			)}
			style={style}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default SelectButton;
