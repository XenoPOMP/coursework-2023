import { createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const SessionTokenContext = createContext<string>(uuid());
