import type { FC } from 'react';

export interface CardProps {
  value?: number;
}

export const Card: FC<CardProps> = ({ value }) => {
  return <div className='flex p-1'>{value}</div>;
};
