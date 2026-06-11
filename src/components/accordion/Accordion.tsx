import React, { useState, useEffect } from "react";
import styles from "./Accordion.module.scss";
import { AccordionItem } from "@/types";

interface AccordionProps {
  items: AccordionItem[];
  defaultActiveKey?: string | null | string[];
  bordered?: boolean;
  alwaysOpen?: boolean;
  onChange?: (activeKey: string | null | string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultActiveKey = null,
  bordered = true,
  alwaysOpen = false,
  onChange,
}) => {
  const [activeKey, setActiveKey] = useState<string | null | string[]>(
    alwaysOpen ? (Array.isArray(defaultActiveKey) ? defaultActiveKey : []) : defaultActiveKey
  );

  useEffect(() => {
    if (alwaysOpen) {
      setActiveKey(Array.isArray(defaultActiveKey) ? defaultActiveKey : (defaultActiveKey ? [defaultActiveKey] : []));
    } else {
      setActiveKey(Array.isArray(defaultActiveKey) ? defaultActiveKey[0] || null : defaultActiveKey);
    }
  }, [defaultActiveKey, alwaysOpen]);

  const handleHeaderClick = (key: string) => {
    if (alwaysOpen) {
      const currentActiveKeys = Array.isArray(activeKey) ? activeKey : [];
      const newActiveKeys = currentActiveKeys.includes(key)
        ? currentActiveKeys.filter(k => k !== key)
        : [...currentActiveKeys, key];
      
      setActiveKey(newActiveKeys);
      onChange?.(newActiveKeys);
    } else {
      const newActiveKey = activeKey === key ? null : key;
      setActiveKey(newActiveKey);
      onChange?.(newActiveKey);
    }
  };

  const isItemActive = (key: string) => {
    return alwaysOpen 
      ? Array.isArray(activeKey) && activeKey.includes(key)
      : activeKey === key;
  };

  return (
    <div className={`${styles.accordion} ${bordered ? styles.bordered : ""}`}>
      {items.map((item) => (
        <div key={item.key} className={styles.item}>
          <div
            className={`${styles.header} ${
              isItemActive(item.key) ? styles.active : ""
            }`}
            onClick={() => handleHeaderClick(item.key)}
          >
            <span className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.arrowIcon} ${
                  isItemActive(item.key) ? styles.rotated : ""
                }`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.headerContent}>{item.header}</div>
          </div>
          <div
            className={`${styles.content} ${
              isItemActive(item.key) ? styles.show : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;