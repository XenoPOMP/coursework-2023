import useEnv from '@hooks/useEnv';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const { DOMAIN } = useEnv();
export const socket = (allowed: boolean, sessionToken: string) =>
  io(`ws://${DOMAIN}:80?allow=${allowed}&sessionToken=${sessionToken}`);

export const WebsocketContext = createContext<Socket>(socket(false, ''));
export const WebsocketProvider = WebsocketContext.Provider;
