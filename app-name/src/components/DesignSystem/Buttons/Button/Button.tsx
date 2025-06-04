import React from 'react';
import './../../../styles/button.css';
// import type Buttons from '../buttons';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button1 = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
}: ButtonProps) => {  
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} onClick={onClick}>
      {children || 'BUTTON'}
    </button>
  );
};
const Button2 = ({
  variant = 'secondary',
  size = 'small',
  onClick,
  children,
}: ButtonProps) => {  
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} onClick={onClick}>
      {children || 'BUTTON'}
    </button>
  );
};
const Button3 = ({
  variant = 'outline',
  size = 'large',
  onClick,
  children,
}: ButtonProps) => {  
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} onClick={onClick}>
      {children || 'BUTTON'}
    </button>
  );
};

export default { Button1, Button2, Button3 };
