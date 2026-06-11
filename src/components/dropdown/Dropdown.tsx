// components/ui/Dropdown/DropdownPortal.tsx
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: React.ReactNode;
  overlay: React.ReactNode;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  overlay,
  placement = 'bottom',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [calculatedPlacement, setCalculatedPlacement] = useState(placement);
  const triggerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top = triggerRect.bottom + scrollY;
    let left = triggerRect.left + scrollX;
    let newPlacement = placement;

    // Проверяем, помещается ли меню снизу
    if (placement === 'bottom') {
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const estimatedHeight = 200; // Предполагаемая высота меню

      if (spaceBelow < estimatedHeight && triggerRect.top > estimatedHeight) {
        // Если места снизу мало, но сверху много - показываем сверху
        top = triggerRect.top + scrollY - estimatedHeight;
        newPlacement = 'top';
      }
    }

    // Центрируем по горизонтали относительно триггера
    left = triggerRect.left + scrollX + (triggerRect.width / 2);

    setPosition({ top, left });
    setCalculatedPlacement(newPlacement);
  }, [placement]);

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      
      // Пересчитываем позицию при изменении размера окна или скролле
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isOpen, calculatePosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
          overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    calculatePosition();
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const DropdownContent = () => (
    <div 
      ref={overlayRef}
      className={`${styles.overlay} ${styles[calculatedPlacement]}`}
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)', // Центрируем по горизонтали
        zIndex: 9999
      }}
      onClick={handleOverlayClick}
    >
      {overlay}
    </div>
  );

  return (
    <>
      <div className={styles.dropdown}>
        <div 
          className={styles.trigger} 
          ref={triggerRef} 
          onClick={handleTriggerClick}
        >
          {trigger}
        </div>
      </div>
      
      {isOpen && ReactDOM.createPortal(
        <DropdownContent />,
        document.body
      )}
    </>
  );
};