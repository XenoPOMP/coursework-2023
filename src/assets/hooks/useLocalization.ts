import Localization from '@localization/Localization';
import useAppSettings from '@hooks/useAppSettings';
import ru from '@locales/ru';
import en from '@locales/en';

const useLocalization = (): Localization => {
  const { language } = useAppSettings();

  switch (language.get()) {
    case 'ru':
      return ru;
    case 'en':
      return en;
    default:
      return ru;
  }
};

export default useLocalization;
