import { ArrowIcon, TriangleIcon } from "@/components/icons";
import styles from "./ScrollDownButton.module.scss"
import { FC } from "react";

interface ScrollDownButtonProps {
    className?: string;
}

export const ScrollDownButton: FC<ScrollDownButtonProps> = ({className = ""}) => {
  return (
    <div className={`${styles.scroll} ${className}`}>
      <a className={styles.title}> the story </a>
      <TriangleIcon className={styles.arrow}/>
    </div>
  );
};
