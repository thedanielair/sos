import { RequirementsItem } from "@/components/ui/RequitementsItem/RequitementsItem";
import styles from "./RequirementsSection.module.scss";
import { Container } from "@/components/layout/Container/Container";

interface RequirementItem {
  title: string;
  text: string;
}

export const RequirementsSection = () => {
  const systemRequirements: RequirementItem[] = [
    {
      title: "os:",
      text: "Windows 7 64-bit only (No OSX support at this time)"
    },
    {
      title: "processor:",
      text: "Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ"
    },
    {
      title: "memory:",
      text: "8 GB RAM"
    },
    {
      title: "storage:",
      text: "8 GB available space"
    },
    {
      title: "graphics:",
      text: "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)"
    },
  ];

  return (
    <section className={styles.requirements}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <p className={`${styles.caption} caption`}>
            Can My Computer Run this game?
          </p>
          <h2 className={`${styles.title} title subtitle`}>
            system requirements
          </h2>
        </header>
        
        <div className={styles.table}>
          {systemRequirements.map((item, index) => (
            <RequirementsItem 
              key={index}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};