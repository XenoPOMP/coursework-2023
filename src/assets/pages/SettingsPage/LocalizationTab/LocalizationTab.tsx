import cn from 'classnames';
import { FC } from 'react';
import styles from './LocalizationTab.module.scss';
import { LocalizationTabProps } from './LocalizationTab.props';
import useLocalization from '@hooks/useLocalization';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SelectButton from '@ui/SelectButton/SelectButton';
import useAppSettings from '@hooks/useAppSettings';

const LocalizationTab: FC<LocalizationTabProps> = ({ states }) => {
  const loc = useLocalization();
  const { language } = useAppSettings();

  return (
    <>
      <SetTitleBlock locales={loc.settingsPage.localization.title} />

      <SetItemBlock
        locales={loc.settingsPage.localization.items.languageTitle}
        flexWrap
      >
        <SelectButton
          isTriggered={states.language.state === 'ru'}
          onClick={() => {
            states.language.setState('ru');
            language.set('ru');
          }}
        >
          {loc.settingsPage.localization.items.languageVariants.russian}
        </SelectButton>

        <SelectButton
          isTriggered={states.language.state === 'en'}
          onClick={() => {
            states.language.setState('en');
            language.set('en');
          }}
        >
          {loc.settingsPage.localization.items.languageVariants.english}
        </SelectButton>
      </SetItemBlock>
    </>
  );
};

export default LocalizationTab;
