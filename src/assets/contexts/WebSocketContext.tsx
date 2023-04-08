import useEnv from '@hooks/useEnv';
import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import DeviceType from '@type/DeviceType';

const { DOMAIN } = useEnv();
export const socket = (
  allowed: boolean,
  sessionToken: string,
  device: DeviceType,
) =>
  io(
    `ws://${DOMAIN}:80?allow=${allowed}&sessionToken=${sessionToken}&device=${device}`,
    {
      autoConnect: allowed,
      reconnection: false,
    },
  );

export const WebsocketContext = createContext<Socket>(
  socket(false, '', 'desktop'),
);
export const WebsocketProvider = WebsocketContext.Provider;
