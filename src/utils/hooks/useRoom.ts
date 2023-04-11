import { useEffect, useRef, useState } from 'react';

import type { ClientSocket } from '../helpers/socket';
import { createSocket } from '../helpers/socket';

import { useBeforeUnload } from './useBeforeUnload';
import { useReadLocalStorage } from './useReadLocalStorage';

// Just an example of socket usage
export const useRoom = (
  roomId: string
): {
  changeCardValue: (value: number) => void;
  users: User[];
} => {
  const [users, setUsers] = useState<User[]>([]);
  const socketRef = useRef<ClientSocket | null>(null);

  const userId = useReadLocalStorage<string>('userId');
  const userName = useReadLocalStorage<string>('username');

  useEffect(() => {
    socketRef.current = createSocket({ query: { roomId } });

    if (socketRef.current) {
      socketRef.current.emit('addUser', { id: userId, name: userName });

      socketRef.current.on('users', (data: User[]) => {
        setUsers(data);
      });
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [roomId, userId, userName]);

  const changeCardValue = (value: number) => {
    socketRef.current?.emit('updateCard', {
      userId,
      value
    });
  };

  useBeforeUnload(() => {
    socketRef.current?.emit('logOut', userId);
  });

  return { users, changeCardValue };
};
