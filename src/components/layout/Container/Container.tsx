import { JSX } from 'react';
import styles from './Container.module.scss';

export const Container = ({ 
  children,
  as: Tag = 'div',
  className = ''
}: {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) => {
  return (
    <Tag className={`${styles.container} ${className}`}>
      {children}
    </Tag>
  );
};