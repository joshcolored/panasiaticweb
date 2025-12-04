import React from 'react';
import { twMerge } from 'tailwind-merge';

const Logo = ({ 
  src = "/images/img_header_logo.png",
  width = "90%", 
  height = "50px",
  alt = "PanAsiatic Solutions Logo",
  className,
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={twMerge(
        `w-[${width}] h-[${height}]`,
        className
      )}
      {...props}
    />
  );
};

export default Logo;