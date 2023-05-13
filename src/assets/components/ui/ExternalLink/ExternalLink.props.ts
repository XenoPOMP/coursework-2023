import { CSSProperties } from 'react';

export interface ExternalLinkProps {
	href?: string;
	callback?: () => void;
	className?: string;
	style?: CSSProperties;
}

export interface ExternalRouterLinkProps
	extends Omit<ExternalLinkProps, 'href'> {
	to: string;
}
