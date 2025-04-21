import { FC } from 'react';
import styles from './NavigationRow.module.scss';

interface NavLink {
  href: string;
  text: string;
}

interface NavigationRowProps {
  className?: string;
}

export const NavigationRow: FC<NavigationRowProps> = ({className = ''}) => {
  const links: NavLink[] = [
    { href: '#', text: 'main' },
    { href: '#', text: 'about' },
    { href: '#', text: 'game features' },
    { href: '#', text: 'system requirements' },
    { href: '#', text: 'quotes' },
  ];

  return (
    <nav className={`${styles.navigation} ${className}`} role="navigation" aria-label="Main menu">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={styles.link}
          aria-current={index === 0 ? 'page' : undefined}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
};