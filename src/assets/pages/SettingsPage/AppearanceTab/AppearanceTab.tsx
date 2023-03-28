import cn from 'classnames';
import { FC } from 'react';
import styles from './AppearanceTab.module.scss';
import { AppearanceTabProps } from './AppearanceTab.props';
import useLocalization from '@hooks/useLocalization';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SelectButton from '@ui/SelectButton/SelectButton';
import { Themes } from '@pages/SettingsPage/SettingsPage';

const AppearanceTab: FC<AppearanceTabProps> = ({ states }) => {
  const loc = useLocalization();

  return (
    <>
      <SetTitleBlock locales={loc.settingsPage.appearance.title} />

      <SetItemBlock locales={loc.settingsPage.appearance.items.theme}>
        <div className={cn(styles.tab)}>
          <SelectButton
            isTriggered={states.theme.state === Themes.LIGHT}
            onClick={() => states.theme.setState(Themes.LIGHT)}
          >
            {loc.settingsPage.appearance.items.themeVariants.light}
          </SelectButton>

          <SelectButton
            isTriggered={states.theme.state === Themes.DARK}
            onClick={() => states.theme.setState(Themes.DARK)}
          >
            {loc.settingsPage.appearance.items.themeVariants.dark}
          </SelectButton>
        </div>
      </SetItemBlock>
    </>
  );
};

export default AppearanceTab;
