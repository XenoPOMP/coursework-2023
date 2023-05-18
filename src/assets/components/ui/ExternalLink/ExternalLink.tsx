import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

import styles from './ExternalLink.module.scss';
import {
	ExternalLinkProps,
	ExternalRouterLinkProps,
} from './ExternalLink.props';

/**
 * External link component.
 *
 * @param children
 * @param style
 * @param className
 * @param href
 * @param callback
 * @constructor
 */
const ExternalLink: FC<PropsWithChildren<ExternalLinkProps>> = ({
	children,
	style,
	className,
	href,
	callback,
}) => {
	return (
		<a
			href={href}
			style={{
				display: 'inline-flex',
				margin: '0 .15em',
				...style,
			}}
			onClick={callback}
			className={cn(className, styles.link)}
		>
			{children}

			<svg viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M1.11111 10C0.805556 10 0.543982 9.8912 0.326389 9.67361C0.108796 9.45602 0 9.19444 0 8.88889V0H1.11111V8.88889H10V10H1.11111Z' />
				<path d='M3.16667 7.61111L2.38889 6.83333L8.11111 1.11111H5V0H10V5H8.88889V1.88889L3.16667 7.61111Z' />
			</svg>
		</a>
	);
};

export const ExternalRouterLink: FC<
	PropsWithChildren<ExternalRouterLinkProps>
> = ({ children, style, className, to, callback }) => {
	const navigate = useNavigate();

	return (
		<Link
			to={to}
			style={{
				display: 'inline-flex',
				margin: '0 .15em',
				...style,
			}}
			onClick={() => {
				// Execute callback
				if (callback) {
					callback();
				}
			}}
			className={cn(className, styles.link)}
		>
			{children}

			<svg viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M1.11111 10C0.805556 10 0.543982 9.8912 0.326389 9.67361C0.108796 9.45602 0 9.19444 0 8.88889V0H1.11111V8.88889H10V10H1.11111Z' />
				<path d='M3.16667 7.61111L2.38889 6.83333L8.11111 1.11111H5V0H10V5H8.88889V1.88889L3.16667 7.61111Z' />
			</svg>
		</Link>
	);
};

export default ExternalLink;
