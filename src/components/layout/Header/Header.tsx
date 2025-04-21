import { FC } from "react";
import { NavigationRow } from "@/components/ui/NavigationRow/NavigationRow";
import { Container } from "@/components/layout/Container/Container";
import { LanguageMenu } from "@/components/ui/LanguageMenu/LanguageMenu";
import { SteamIcon, XboxIcon } from "@/components/icons";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

export const Header: FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <XboxIcon className={styles.icon} />,
      href: "#",
      ariaLabel: "Xbox official page",
    },
    {
      icon: <SteamIcon className={styles.icon} />,
      href: "#",
      ariaLabel: "Steam official page",
    },
  ];

  return (
    <header className={styles.header} role="banner">
      <Container className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/img/logo.png"
            alt="SOS Game Logo"
            width={120}
            height={40}
            className={styles.logoImg}
            priority
          />
        </Link>

        <NavigationRow className={styles.nav}/>

        <div className={styles.social}>
          <LanguageMenu
            className={styles.language}
            // onLanguageChange={(lang) => console.log("Selected:", lang)}
          />

          <div className={styles.playgrounds}>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={styles.playground}
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};
