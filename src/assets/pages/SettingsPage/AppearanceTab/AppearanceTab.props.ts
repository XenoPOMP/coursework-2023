import { Dispatch } from 'react';
import { Theme } from '@redux/reducers/appSettingsSlice';

type UseStateHook<T> = {
  state: T;
  setState: Dispatch<T>;
};

export interface AppearanceTabProps {
  states: {
    theme: UseStateHook<Theme>;
  };
}
