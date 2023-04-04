import useEnv from '@hooks/useEnv';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const { DOMAIN } = useEnv();
export const socket = io(`ws://${DOMAIN}:80`);

export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
