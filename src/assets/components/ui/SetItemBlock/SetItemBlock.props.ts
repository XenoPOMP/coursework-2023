import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';
import { SettingsTabTitleLocale } from '@localization/Localization';

export interface SetItemBlockProps
  extends Pick<SimpleReactComponent, 'children'> {
  locales: SettingsTabTitleLocale;
}
