"use client";

import { FC, useRef, useState, useEffect } from "react";
import styles from "./FeaturesList.module.scss";

interface FeatureItem {
  title: string;
  text: string;
}

interface FeaturesListProps {
  className?: string;
}

export const FeaturesList: FC<FeaturesListProps> = ({ className = "" }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<Record<number, number>>({});
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const featureItems: FeatureItem[] = [
    {
      title: "SURVIVE AT ALL COSTS",
      text: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
    },
    {
      title: "CREATE ALLIES AND ENEMIES",
      text: "Create a team of your new or old friends. Expand your boundaries and hire new recruits. Implement team ideas!",
    },
    {
      title: "IMPRESS THE AUDIENCE",
      text: "Show yourself as a sensual leader or selfish boss. Your path and methods depend only on you!",
    },
  ];

  // Обновляем высоты при монтировании и при изменении expandedIndex
  useEffect(() => {
    const newHeights: Record<number, number> = {};
    let needsUpdate = false;

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
        needsUpdate = true;
      }
    });

    if (needsUpdate) {
      setHeights(prev => ({ ...prev, ...newHeights }));
    }
  }, [expandedIndex]);

  const toggleItem = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  const setTextRef = (index: number) => (el: HTMLParagraphElement | null) => {
    textRefs.current[index] = el;
  };

  return (
    <div className={`${styles.body} ${className}`}>
      {featureItems.map((item, index) => (
        <div 
          key={index}
          className={`${styles.feature} ${expandedIndex === index ? styles.active : ''}`}
          onClick={() => toggleItem(index)}
        >
          <div className={styles.decoration}>
            <div className={styles.point}></div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{item.title}</h3>
            <p 
              ref={setTextRef(index)}
              className={`text ${styles.text}`}
              style={{
                maxHeight: expandedIndex === index 
                  ? `${heights[index] || 0}px` 
                  : '0px',
              }}
            >
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};