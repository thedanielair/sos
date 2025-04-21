import { Container } from "@/components/layout/Container/Container";
import styles from "./FeaturesSection.module.scss"
import { FeaturesList } from "@/components/ui/FeaturesList/FeaturesList";

export const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <p className={`caption ${styles.caption}`}>What’s so special?</p>
          <h2 className={`title subtitle ${styles.title}`}>features</h2>
          <FeaturesList className={styles.list}/>
        </div>
      </Container>
    </section>
  );
};
