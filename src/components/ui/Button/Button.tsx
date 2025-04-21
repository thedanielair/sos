import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  primaryText: string;
  secondaryText?: string;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  primaryText,
  secondaryText,
  href = '#',
  className = ''
}) => {
  return (
    <a href={href} className={`${styles.button} ${className}`}>
      <p className={styles.title}>{primaryText}</p>
      {secondaryText && (
        <>
          <div className={styles.divide}></div>
          <p className={styles.text}>{secondaryText}</p>
        </>
      )}
    </a>
  );
};

export default Button;