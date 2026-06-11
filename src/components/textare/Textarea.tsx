import React, { TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variantClass = variant === 'secondary' ? styles.secondary : '';
    
    return (
      <textarea
        ref={ref}
        className={`${styles.textarea} ${variantClass} ${className || ''}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;