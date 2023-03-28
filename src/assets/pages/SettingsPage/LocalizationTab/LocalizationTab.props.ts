import { Dispatch } from 'react';
import { Language } from '@redux/reducers/appSettingsSlice';

type UseStateHook<T> = {
  state: T;
  setState: Dispatch<T>;
};

export interface LocalizationTabProps {
  states: {
    language: UseStateHook<Language>;
  };
}
