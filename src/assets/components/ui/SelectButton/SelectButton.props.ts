import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';
import { CSSProperties } from 'react';

export interface SelectButtonProps {
	isTriggered: boolean;
	onClick: () => void;
	className?: string;
	style?: CSSProperties;
	variant?: 'normal' | 'with-icon-right' | 'with-icon-left';
}
