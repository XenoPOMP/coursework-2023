import { ChangelogRecord } from '@type/ChangelogRecord';
import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import useLocalization from '@hooks/useLocalization';

import styles from './ChangelogTab.module.scss';
import { ChangelogTabProps } from './ChangelogTab.props';

const ChangelogTab: FC<ChangelogTabProps> = ({}) => {
	const loc = useLocalization();

	const Record: FC<{
		recordLocale: ChangelogRecord;
	}> = ({ recordLocale }) => {
		return (
			<div className={cn(styles.record)}>
				<h3 className={cn(styles.title)}>v{recordLocale.version}</h3>

				<div className={cn(styles.paragraphGroup)}>
					{recordLocale.paragraphs?.map(paragraph => {
						return <p>{paragraph.replace(/^\*/i, ' • ')}</p>;
					})}
				</div>
			</div>
		);
	};

	const RecordGroup: FC<{
		groupLocale: ChangelogRecord[];
	}> = ({ groupLocale }) => {
		return (
			<div className={cn(styles.recordGroup)}>
				{groupLocale.map(record => (
					<Record recordLocale={record} />
				))}
			</div>
		);
	};

	return (
		<section className={cn(styles.tab)}>
			<h2>{loc.settingsPage.changeLogTab.title}</h2>

			{loc.settingsPage.changeLogTab.records?.map(group => (
				<RecordGroup groupLocale={group} />
			))}
		</section>
	);
};

export default ChangelogTab;
