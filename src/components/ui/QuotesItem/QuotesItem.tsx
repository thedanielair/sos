import { FC } from "react";
import styles from "./QuotesItem.module.scss";
import { TwitterIcon } from "@/components/icons";

interface QuotesItemProps {
    className?: string;
    href: string;
    nickname: string;
    pos: string;
    comm: string;
}


export const QuotesItem: FC<QuotesItemProps> = ({className, href, nickname, pos, comm}) => {
  return (
    <div className={`${className} ${styles.quote}`}>
      <div className={styles.header}>
        <div className={styles.imgWrapper}>
          <img src={href} alt="" className={styles.img} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{nickname}</h3>
          <p className={styles.subtitle}>{pos}</p>
        </div>
        <TwitterIcon className={styles.twitter}/>
      </div>
      <p className={`text ${styles.text}`}>
        {comm}
      </p>
      <p className={styles.date}>October 18, 2018</p>
    </div>
  );
};
