import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC <ButtonProps> = ({title, styles}) => {
  return (
    <button className={`${styles} bg-blue-500 px-4 py-2 mx-5 text-white `}>
        {title}
    </button>
  );
};

export default Button;