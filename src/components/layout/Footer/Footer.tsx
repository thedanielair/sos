import { NavigationRow } from "@/components/ui/NavigationRow/NavigationRow";
import { Container } from "@/components/layout/Container/Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className={`${styles.container}`}>
        <div className="footer__nav-row">
          <img src="img/logo.png" alt="logo" className="footer__logo" />
          <NavigationRow />
          <div className="footer__media">
            <a href="#" className="footer__media-facebook"></a>
            <a href="#" className="footer__media-twitter"></a>
            <a href="#" className="footer__media-youtube"></a>
            <a href="#" className="footer__media-twitch"></a>
          </div>
        </div>
        <div className="footer__copy-row">
          <p className="footer__copyright">
            © 2018 Outpost Games, Inc. All Rights Reserved
          </p>
          <div className="footer__rights-links rights">
            <a href="#" className="rights__link">
              Privacy Policy
            </a>
            <span className="rights__line">|</span>
            <a href="#" className="rights__link">
              Terms of Services
            </a>
            <span className="rights__line">|</span>
            <a href="#" className="rights__link">
              Code of Conduct
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
