import { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.scss';

interface IProps {
  type?: string
  className?: string
  children: ReactNode
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (ev: MouseEvent) => void
}

function Button({ type, className = '', children, disabled = false, onClick }: IProps) {
  const btnClassName = `${type && styles[type]} ${styles.btn} ${className}`.trim();

  return (
    <button
      className={btnClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
