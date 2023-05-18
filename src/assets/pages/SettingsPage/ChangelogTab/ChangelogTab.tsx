import { ChangelogRecord } from '@type/ChangelogRecord';
import cn from 'classnames';
import { FC, ReactNode, useContext } from 'react';

import { SettingsTabs, TabContext } from '@pages/SettingsPage/SettingsPage';

import ExternalLink, {
	ExternalRouterLink,
} from '@ui/ExternalLink/ExternalLink';

import useLocalization from '@hooks/useLocalization';

import styles from './ChangelogTab.module.scss';
import { ChangelogTabProps } from './ChangelogTab.props';

const ChangelogTab: FC<ChangelogTabProps> = ({}) => {
	const loc = useLocalization();
	const [tab, setTab] = useContext(TabContext);

	const Record: FC<{
		recordLocale: ChangelogRecord;
	}> = ({ recordLocale }) => {
		const { day, month, year } = recordLocale.date;

		const formattedDate = new Intl.DateTimeFormat(
			loc.settingsPage.changeLogTab.datetimeLocale,
			{
				dateStyle: 'long',
			}
		).format(new Date(Date.UTC(year, month - 1, day)));

		return (
			<div className={cn(styles.record)}>
				<h3 className={cn(styles.title)}>v{recordLocale.version}</h3>

				<div className={cn(styles.paragraphGroup)}>
					{recordLocale.paragraphs?.map((paragraph, index) => {
						const replacedText = paragraph.replace(/^\*(?!\*)/i, ' • ');

						// Replace text styles
						let output: ReactNode[] = replacedText
							.split(
								/(``.*``)|(\|.*\|)|(\*\*.*\*\*)|(\/\/.*\/\/)|(\[.*\]\(.*\))/g
							)
							.map(res => {
								// Replace `` `` with <mark/> (marked)
								if (/(``.*``)/g.test(res)) {
									return (
										<mark key={`fragment-${res}`}>
											{res.replace(/(^``)|(``$)/gi, '')}
										</mark>
									);
								}

								// Replace | | with <u/> (underscored)
								if (/(\|.*\|)/g.test(res)) {
									return <u>{res.replace(/(^\|)|(\|$)/gi, '')}</u>;
								}

								// Replace ** ** with <b/> (bold)
								if (/(\*\*.*\*\*)/g.test(res)) {
									return <b>{res.replace(/(^\*\*)|(\*\*$)/gi, '')}</b>;
								}

								// Replace // // with <i/> (italic)
								if (/(\/\/.*\/\/)/g.test(res)) {
									return <i>{res.replace(/(^\/\/)|(\/\/$)/g, '')}</i>;
								}

								if (/(\[.*\]\(.*\))/g.test(res)) {
									const editedStringArray = res
										.replace(/[\[\]\(\)]/g, '')
										.split(/(((\/{2})|(~)).*)/gi);

									const text = editedStringArray[0];
									const link = editedStringArray[1];

									// External link to other site
									if (/^\/.*/.test(link)) {
										return (
											<ExternalLink href={link.replace(/^\//g, '')}>
												{text}
											</ExternalLink>
										);
									}

									// Return external link
									return (
										<ExternalLink href={link.replace('~', '')}>
											{text}
										</ExternalLink>
									);
								}

								return res;
							});

						return (
							<p key={`record-paragraph-${index}`}>
								{output.map(item => item)}
							</p>
						);
					})}
				</div>

				<div className={cn(styles.date)}>{formattedDate}</div>
			</div>
		);
	};

	const RecordGroup: FC<{
		groupLocale: ChangelogRecord[];
	}> = ({ groupLocale }) => {
		return (
			<div className={cn(styles.recordGroup)}>
				{groupLocale
					.map((record, recordIndex) => (
						<Record recordLocale={record} key={`record-${recordIndex}`} />
					))
					.reverse()}
			</div>
		);
	};

	return (
		<section className={cn(styles.tab)}>
			<h2>{loc.settingsPage.changeLogTab.title}</h2>

			{loc.settingsPage.changeLogTab.records
				?.map((group, groupIndex) => (
					<RecordGroup groupLocale={group} key={`record-group-${groupIndex}`} />
				))
				.reverse()}
		</section>
	);
};

export default ChangelogTab;
