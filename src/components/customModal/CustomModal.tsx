// components/ui/Modal/Modal.tsx
'use client';

import React, { useEffect } from 'react';
import styles from './CustomModal.module.scss';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const CustomModal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
  title,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.content} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title) && (
          <div className={styles.header}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {onClose && (
              <button className={styles.closeButton} onClick={onClose}>
                <X size={20} />
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};