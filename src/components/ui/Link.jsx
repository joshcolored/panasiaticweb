import React from 'react';
import { twMerge } from 'tailwind-merge';

const Link = ({ 
  href = "#",
  children,
  className,
  target,
  rel,
  ...props 
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={twMerge(
        "transition-colors duration-200 hover:opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;