import cn from 'classnames';
import { FC } from 'react';
import Emoji from 'react-ios-emojis';

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
				<SelectButton
					isTriggered={!isAllowed}
					onClick={() => disallow()}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.confidentiality.items.allowVariants.disallow}{' '}
					<Emoji name={'prohibited'} />
				</SelectButton>

				<SelectButton
					isTriggered={isAllowed}
					onClick={() => allow()}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.confidentiality.items.allowVariants.allow}{' '}
					<Emoji name={'checkMarkButton'} />
				</SelectButton>
			</SetItemBlock>
		</>
	);
};

export default PrivacyTab;
