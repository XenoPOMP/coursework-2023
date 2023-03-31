import cn from 'classnames';
import { FC } from 'react';
import styles from './LocalizationTab.module.scss';
import { LocalizationTabProps } from './LocalizationTab.props';
import useLocalization from '@hooks/useLocalization';
import SetTitleBlock from '@ui/SetTitleBlock/SetTitleBlock';
import SetItemBlock from '@ui/SetItemBlock/SetItemBlock';
import SelectButton from '@ui/SelectButton/SelectButton';
import useAppSettings from '@hooks/useAppSettings';

const LocalizationTab: FC<LocalizationTabProps> = () => {
  const loc = useLocalization();
  const { language, currency } = useAppSettings();

  return (
    <>
      <SetTitleBlock locales={loc.settingsPage.localization.title} />

      <SetItemBlock
        locales={loc.settingsPage.localization.items.languageTitle}
        flexWrap
      >
        <SelectButton
          isTriggered={language.get() === 'ru'}
          onClick={() => {
            language.set('ru');
            currency.set('rub');
          }}
        >
          {loc.settingsPage.localization.items.languageVariants.russian}
        </SelectButton>

        <SelectButton
          isTriggered={language.get() === 'en'}
          onClick={() => {
            language.set('en');
            currency.set('usd');
          }}
        >
          {loc.settingsPage.localization.items.languageVariants.english}
        </SelectButton>
      </SetItemBlock>

      <SetItemBlock
        locales={loc.settingsPage.localization.items.currency}
        flexWrap
      >
        <SelectButton
          isTriggered={currency.get() === 'rub'}
          onClick={() => {
            currency.set('rub');
          }}
        >
          {loc.settingsPage.localization.items.currencyVariants.rub}
        </SelectButton>

        <SelectButton
          isTriggered={currency.get() === 'usd'}
          onClick={() => {
            currency.set('usd');
          }}
        >
          {loc.settingsPage.localization.items.currencyVariants.usd}
        </SelectButton>
      </SetItemBlock>
    </>
  );
};

export default LocalizationTab;
