import styles from "./AboutSection.module.scss";
import { Container } from "@/components/layout/Container/Container";
import { Slider } from "@/components/ui/Slider/Slider";
import { FC } from "react";

export const AboutSection: FC = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <p className={`caption ${styles.caption}`}>What is SOS?</p>
          <h2 className={`title subtitle ${styles.title}`}>
            social battle
            <br />
            royale game
          </h2>
          <p className={`text ${styles.text}`}>
            Each round, you and <b>15</b> other contestants compete to escape a
            deadly island filled with monsters. The trick is:
            <b>three</b> people can survive. Will you run solo or form
            friendships with others to escape? <br />
            <br />
            Making the right decisions could be the difference between life and
            death.
          </p>
        </div>
        <Slider />
      </Container>
    </section>
  );
};
