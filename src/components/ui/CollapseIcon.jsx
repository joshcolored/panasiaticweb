import React from 'react';
import { twMerge } from 'tailwind-merge';

const CollapseIcon = ({ 
  isExpanded = false,
  className,
  ...props 
}) => {
  return (
    <img
      src={isExpanded ? "/images/img_icon_chevron_down.svg" : "/images/img_icon_chevron_right.svg"}
      alt={isExpanded ? "Collapse" : "Expand"}
      className={twMerge("w-4 h-4 transition-transform duration-200", className)}
      {...props}
    />
  );
};

export default CollapseIcon;