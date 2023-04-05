import useEnv from '@hooks/useEnv';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const { DOMAIN } = useEnv();
export const socket = (allowed: boolean, jwt: string) =>
  io(`ws://${DOMAIN}:80?allow=${allowed}&jwt=${jwt}`);

export const WebsocketContext = createContext<Socket>(socket(false, ''));
export const WebsocketProvider = WebsocketContext.Provider;
