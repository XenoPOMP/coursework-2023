import cn from 'classnames';
import { FC } from 'react';
import styles from './LocalizationTab.module.scss';
import { LocalizationTabProps } from './LocalizationTab.props';
import useLocalization from '@hooks/useLocalization';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SelectButton from '@ui/SelectButton/SelectButton';

const LocalizationTab: FC<LocalizationTabProps> = ({ states }) => {
  const loc = useLocalization();

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
            // states.theme.setState('light');
            // theme.set('light');
          }}
        >
          {loc.settingsPage.localization.items.languageVariants.russian}
        </SelectButton>
      </SetItemBlock>
    </>
  );
};

export default LocalizationTab;
