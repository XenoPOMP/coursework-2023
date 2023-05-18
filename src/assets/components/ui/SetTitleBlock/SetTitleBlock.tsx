import cn from 'classnames';
import { FC } from 'react';

import { SettingsTabTitleLocale } from '@localization/Localization';

import styles from './SetTitleBlock.module.scss';
import { SetTitleBlockProps } from './SetTitleBlock.props';

/**
 * Settings page title block.
 *
 * @param {SettingsTabTitleLocale} locales         block locales of type {@link SettingsTabTitleLocale}.
 * @constructor
 */
const SetTitleBlock: FC<SetTitleBlockProps> = ({ locales }) => {
	// Get locales from argument
	const { title, desc } = locales;

	return (
		<div className={cn(styles.block)}>
			<h2>{title}</h2>

			<div className={cn(styles.desc)}>{desc}</div>
		</div>
	);
};

export default SetTitleBlock;
