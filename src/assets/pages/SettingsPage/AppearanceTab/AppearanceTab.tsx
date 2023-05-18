import cn from 'classnames';
import { FC } from 'react';
import Emoji from 'react-ios-emojis';

import SelectButton from '@ui/SelectButton/SelectButton';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';

import useAppSettings from '@hooks/useAppSettings';
import useLocalization from '@hooks/useLocalization';

import styles from './AppearanceTab.module.scss';
import { AppearanceTabProps } from './AppearanceTab.props';

const AppearanceTab: FC<AppearanceTabProps> = () => {
	const loc = useLocalization();
	const { theme, popups } = useAppSettings();

	return (
		<>
			<SetTitleBlock locales={loc.settingsPage.appearance.title} />

			<SetItemBlock locales={loc.settingsPage.appearance.items.theme} flexWrap>
				<SelectButton
					isTriggered={theme.get() === 'light'}
					onClick={() => {
						theme.set('light');
					}}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.appearance.items.themeVariants.light}{' '}
					<Emoji name={'sunWithFace'} />
				</SelectButton>

				<SelectButton
					isTriggered={theme.get() === 'dark'}
					onClick={() => {
						theme.set('dark');
					}}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.appearance.items.themeVariants.dark}{' '}
					<Emoji name={'newMoonFace'} />
				</SelectButton>

				<SelectButton
					isTriggered={theme.get() === 'retroWave'}
					onClick={() => {
						theme.set('retroWave');
					}}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.appearance.items.themeVariants.retroWave}{' '}
					<Emoji name={'sunset'} />
				</SelectButton>
			</SetItemBlock>

			<SetItemBlock locales={loc.settingsPage.appearance.items.popups} flexWrap>
				<SelectButton
					isTriggered={!popups.get()}
					onClick={() => {
						popups.set(false);
					}}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.appearance.items.popupVariants.prohibited}{' '}
					<Emoji name={'prohibited'} />
				</SelectButton>

				<SelectButton
					isTriggered={popups.get()}
					onClick={() => {
						popups.set(true);
					}}
					variant={'with-icon-right'}
				>
					{loc.settingsPage.appearance.items.popupVariants.allowed}{' '}
					<Emoji name={'checkMarkButton'} />
				</SelectButton>
			</SetItemBlock>
		</>
	);
};

export default AppearanceTab;
