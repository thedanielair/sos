"use client"

import { FC, useState } from "react";
import styles from "./LanguageMenu.module.scss";

interface LanguageMenuProps {
  className?: string;
  languages?: { code: string; label: string }[];
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

export const LanguageMenu: FC<LanguageMenuProps> = ({
  className = "",
  languages = [
    { code: "eng", label: "English" },
    { code: "rus", label: "Русский" },
  ],
  defaultLanguage = "eng",
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code);
    setIsOpen(false);
    onLanguageChange?.(code);
  };

  return (
    <div 
      className={`${styles.menu} ${className} ${isOpen ? styles.active : ""}`}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Language selector"
    >
      <button
        className={`${styles.current} ${styles.status}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current language: ${currentLangData.label}`}
        type="button"
      >
        <span className={styles.currentLanguage}>
          {currentLangData.code}
        </span>
        <span className={`${styles.icon}`} />
      </button>

      {isOpen && (
        <div className={styles.body} role="listbox">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`${styles.status} ${language.code === currentLanguage ? styles.active : ""}`}
              onClick={() => handleLanguageSelect(language.code)}
              role="option"
              aria-selected={language.code === currentLanguage}
              type="button"
            >
              {language.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};