import { Container } from "@/components/layout/Container/Container";
import styles from "./HeroSection.module.scss";
import Button from "@/components/ui/Button/Button";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton/ScrollDownButton";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.info}>
          <h1 className={`title ${styles.title}`}>survive at all costs</h1>
          <p className={`caption ${styles.caption}`}>
            experience new social battle royale game
          </p>
          <Button
            primaryText="Buy Now on Steam"
            secondaryText="$14.99"
            className={styles.button}
          />
        </div>
      </Container>
      <ScrollDownButton />
    </section>
  );
};
