import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variantClass = variant === 'secondary' ? styles.secondary : '';
    
    return (
      <input
        ref={ref}
        className={`${styles.input} ${variantClass} ${className || ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;