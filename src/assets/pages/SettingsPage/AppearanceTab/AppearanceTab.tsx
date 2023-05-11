import cn from 'classnames';
import { FC } from 'react';

import SelectButton from '@ui/SelectButton/SelectButton';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';

import useAppSettings from '@hooks/useAppSettings';
import useLocalization from '@hooks/useLocalization';

import styles from './AppearanceTab.module.scss';
import { AppearanceTabProps } from './AppearanceTab.props';

const AppearanceTab: FC<AppearanceTabProps> = () => {
	const loc = useLocalization();
	const { theme } = useAppSettings();

	return (
		<>
			<SetTitleBlock locales={loc.settingsPage.appearance.title} />

			<SetItemBlock locales={loc.settingsPage.appearance.items.theme} flexWrap>
				<SelectButton
					isTriggered={theme.get() === 'light'}
					onClick={() => {
						theme.set('light');
					}}
				>
					{loc.settingsPage.appearance.items.themeVariants.light}
				</SelectButton>

				<SelectButton
					isTriggered={theme.get() === 'dark'}
					onClick={() => {
						theme.set('dark');
					}}
				>
					{loc.settingsPage.appearance.items.themeVariants.dark}
				</SelectButton>
			</SetItemBlock>
		</>
	);
};

export default AppearanceTab;
