import { Dispatch } from 'react';
import { Themes } from '@pages/SettingsPage/SettingsPage';

type UseStateHook<T> = {
  state: T;
  setState: Dispatch<T>;
};

export interface AppearanceTabProps {
  states: {
    theme: UseStateHook<Themes>;
  };
}
