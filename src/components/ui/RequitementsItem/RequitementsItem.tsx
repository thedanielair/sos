import styles from "./RequirementsItem.module.scss";

interface RequirementsItemProps {
  title: string;
  text: string;
}


export const RequirementsItem = ({ title, text }: RequirementsItemProps) => (
  <div className={styles.item}>
    <h3 className={styles.title}>{title}</h3>
    <p 
      className={`${styles.text} text`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);