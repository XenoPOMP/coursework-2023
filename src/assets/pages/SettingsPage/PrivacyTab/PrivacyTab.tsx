import cn from 'classnames';
import { FC } from 'react';

import SelectButton from '@ui/SelectButton/SelectButton';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';

import useAnalyticsAllowed from '@hooks/useAnalyticsAllowed';
import useLocalization from '@hooks/useLocalization';

import styles from './PrivacyTab.module.scss';
import { PrivacyTabProps } from './PrivacyTab.props';

const PrivacyTab: FC<PrivacyTabProps> = ({}) => {
	const loc = useLocalization();
	const { isAllowed, allow, disallow } = useAnalyticsAllowed();

	return (
		<>
			<SetTitleBlock locales={loc.settingsPage.confidentiality.title} />

			<SetItemBlock
				locales={loc.settingsPage.confidentiality.items.allowed}
				flexWrap
			>
				<SelectButton isTriggered={!isAllowed} onClick={() => disallow()}>
					{loc.settingsPage.confidentiality.items.allowVariants.disallow}
				</SelectButton>

				<SelectButton isTriggered={isAllowed} onClick={() => allow()}>
					{loc.settingsPage.confidentiality.items.allowVariants.allow}
				</SelectButton>
			</SetItemBlock>
		</>
	);
};

export default PrivacyTab;
