import type { ManagerOptions, Socket, SocketOptions } from 'socket.io-client';
import { io } from 'socket.io-client';

// "{}" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? {} : 'http://localhost:4000';

interface ServerToClientEvents {
  users: (data: User[]) => void;
}

interface ClientToServerEvents {
  logOut: (userId?: string) => void;
  addUser: (data: { id?: string; name?: string }) => void;
  updateCard: (data: { userId?: string; value: number }) => void;
}

export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export const createSocket = (options: Partial<ManagerOptions & SocketOptions>): ClientSocket =>
  io(URL, {
    autoConnect: false,
    ...options
  });
