import React from 'react';

// import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  placeholder,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
