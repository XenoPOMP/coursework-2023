import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './SettingsPage.module.scss';
import { SettingsPageProps } from './SettingsPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import AppearanceTab from '@pages/SettingsPage/AppearanceTab/AppearanceTab';
import LocalizationTab from '@pages/SettingsPage/LocalizationTab/LocalizationTab';
import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { changeLastSettingsPage } from '@redux/reducers/lastPageSlice';

export enum SettingsTabs {
  APPEARANCE,
  LOCALIZATION,
}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
  const loc = useLocalization();
  const dispatch = useDispatch();

  const [tab, setTab] = useState<SettingsTabs>(
    useSelector((state: IStore) => state.lastPage.settings),
  );

  // Set last page to local state`s page
  useEffect(() => {
    dispatch(changeLastSettingsPage(tab));
  }, [tab]);

  return (
    <Page
      meta={loc.meta.settingsPage}
      header={{
        renderNav: false,
      }}
    >
      <div className={cn(styles.page)}>
        <div className={cn(styles.sidebar)}>
          <div
            className={cn(
              styles.item,
              tab == SettingsTabs.APPEARANCE ? styles.active : '',
            )}
            onClick={() => {
              setTab(SettingsTabs.APPEARANCE);
            }}
          >
            <svg
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M20.4545 9.09091L19.0341 5.96591L15.9091 4.54545L19.0341 3.125L20.4545 0L21.875 3.125L25 4.54545L21.875 5.96591L20.4545 9.09091ZM20.4545 25L19.0341 21.875L15.9091 20.4545L19.0341 19.0341L20.4545 15.9091L21.875 19.0341L25 20.4545L21.875 21.875L20.4545 25ZM9.09091 21.5909L6.25 15.3409L0 12.5L6.25 9.65909L9.09091 3.40909L11.9318 9.65909L18.1818 12.5L11.9318 15.3409L9.09091 21.5909ZM9.09091 16.0795L10.2273 13.6364L12.6705 12.5L10.2273 11.3636L9.09091 8.92045L7.95455 11.3636L5.51136 12.5L7.95455 13.6364L9.09091 16.0795Z' />
            </svg>

            {loc.settingsPage.sidebar.appearance}
          </div>

          <div
            className={cn(
              styles.item,
              tab == SettingsTabs.LOCALIZATION ? styles.active : '',
            )}
            onClick={() => {
              setTab(SettingsTabs.LOCALIZATION);
            }}
          >
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.5 25C10.7917 25 9.17708 24.6719 7.65625 24.0156C6.13542 23.3594 4.80729 22.4635 3.67188 21.3281C2.53646 20.1927 1.64063 18.8646 0.984375 17.3438C0.328125 15.8229 0 14.2083 0 12.5C0 10.7708 0.328125 9.15104 0.984375 7.64062C1.64063 6.13021 2.53646 4.80729 3.67188 3.67188C4.80729 2.53646 6.13542 1.64063 7.65625 0.984375C9.17708 0.328125 10.7917 0 12.5 0C14.2292 0 15.849 0.328125 17.3594 0.984375C18.8698 1.64063 20.1927 2.53646 21.3281 3.67188C22.4635 4.80729 23.3594 6.13021 24.0156 7.64062C24.6719 9.15104 25 10.7708 25 12.5C25 14.2083 24.6719 15.8229 24.0156 17.3438C23.3594 18.8646 22.4635 20.1927 21.3281 21.3281C20.1927 22.4635 18.8698 23.3594 17.3594 24.0156C15.849 24.6719 14.2292 25 12.5 25ZM12.5 22.4375C13.0417 21.6875 13.5104 20.9063 13.9062 20.0938C14.3021 19.2812 14.625 18.4167 14.875 17.5H10.125C10.375 18.4167 10.6979 19.2812 11.0938 20.0938C11.4896 20.9063 11.9583 21.6875 12.5 22.4375ZM9.25 21.9375C8.875 21.25 8.54688 20.5365 8.26562 19.7969C7.98438 19.0573 7.75 18.2917 7.5625 17.5H3.875C4.47917 18.5417 5.23438 19.4479 6.14062 20.2188C7.04688 20.9896 8.08333 21.5625 9.25 21.9375ZM15.75 21.9375C16.9167 21.5625 17.9531 20.9896 18.8594 20.2188C19.7656 19.4479 20.5208 18.5417 21.125 17.5H17.4375C17.25 18.2917 17.0156 19.0573 16.7344 19.7969C16.4531 20.5365 16.125 21.25 15.75 21.9375ZM2.8125 15H7.0625C7 14.5833 6.95312 14.1719 6.92188 13.7656C6.89062 13.3594 6.875 12.9375 6.875 12.5C6.875 12.0625 6.89062 11.6406 6.92188 11.2344C6.95312 10.8281 7 10.4167 7.0625 10H2.8125C2.70833 10.4167 2.63021 10.8281 2.57812 11.2344C2.52604 11.6406 2.5 12.0625 2.5 12.5C2.5 12.9375 2.52604 13.3594 2.57812 13.7656C2.63021 14.1719 2.70833 14.5833 2.8125 15ZM9.5625 15H15.4375C15.5 14.5833 15.5469 14.1719 15.5781 13.7656C15.6094 13.3594 15.625 12.9375 15.625 12.5C15.625 12.0625 15.6094 11.6406 15.5781 11.2344C15.5469 10.8281 15.5 10.4167 15.4375 10H9.5625C9.5 10.4167 9.45312 10.8281 9.42188 11.2344C9.39062 11.6406 9.375 12.0625 9.375 12.5C9.375 12.9375 9.39062 13.3594 9.42188 13.7656C9.45312 14.1719 9.5 14.5833 9.5625 15ZM17.9375 15H22.1875C22.2917 14.5833 22.3698 14.1719 22.4219 13.7656C22.474 13.3594 22.5 12.9375 22.5 12.5C22.5 12.0625 22.474 11.6406 22.4219 11.2344C22.3698 10.8281 22.2917 10.4167 22.1875 10H17.9375C18 10.4167 18.0469 10.8281 18.0781 11.2344C18.1094 11.6406 18.125 12.0625 18.125 12.5C18.125 12.9375 18.1094 13.3594 18.0781 13.7656C18.0469 14.1719 18 14.5833 17.9375 15ZM17.4375 7.5H21.125C20.5208 6.45833 19.7656 5.55208 18.8594 4.78125C17.9531 4.01042 16.9167 3.4375 15.75 3.0625C16.125 3.75 16.4531 4.46354 16.7344 5.20312C17.0156 5.94271 17.25 6.70833 17.4375 7.5ZM10.125 7.5H14.875C14.625 6.58333 14.3021 5.71875 13.9062 4.90625C13.5104 4.09375 13.0417 3.3125 12.5 2.5625C11.9583 3.3125 11.4896 4.09375 11.0938 4.90625C10.6979 5.71875 10.375 6.58333 10.125 7.5ZM3.875 7.5H7.5625C7.75 6.70833 7.98438 5.94271 8.26562 5.20312C8.54688 4.46354 8.875 3.75 9.25 3.0625C8.08333 3.4375 7.04688 4.01042 6.14062 4.78125C5.23438 5.55208 4.47917 6.45833 3.875 7.5Z' />
            </svg>

            {loc.settingsPage.sidebar.localization}
          </div>
        </div>

        <div className={cn(styles.body)}>
          <div className={cn(styles.content)}>
            {tab === SettingsTabs.APPEARANCE && <AppearanceTab />}

            {tab === SettingsTabs.LOCALIZATION && <LocalizationTab />}
          </div>

          <div className={cn(styles.saveChanges)}>
            <div className={cn(styles.button, styles.reject)}>
              <div className={cn(styles.text)}>
                {loc.settingsPage.saveChanges.reject}
              </div>
            </div>

            <div className={cn(styles.button, styles.save)}>
              <div className={cn(styles.text)}>
                {loc.settingsPage.saveChanges.save}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SettingsPage;
