import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Book Discovery Call",
  text_font_size = "16",
  text_font_family = "Raleway",
  text_font_weight = "500",
  text_line_height = "19px",
  text_text_align = "left",
  text_color = "#ffffff",
  fill_background_color = "#49ade8",
  border_border = "1 solid #49ade8",
  border_border_radius = "22px",
  effect_box_shadow = "0px 1px 2px #0a0c120c",
  
  // Optional parameters (no defaults)
  layout_align_self,
  layout_width,
  padding,
  position,
  layout_gap,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Map font size to Tailwind class or use exact value
  const getFontSizeClass = (size) => {
    const sizeMap = {
      "12": "text-xs",
      "16": "text-base",
      "18": "text-md",
      "20": "text-lg",
      "24": "text-xl",
      "28": "text-2xl",
      "32": "text-3xl",
      "36": "text-4xl",
      "48": "text-5xl",
      "120": "text-hero"
    };
    return sizeMap?.[size] || `text-[${size}px]`;
  };

  // Map font weight to Tailwind class or use exact value
  const getFontWeightClass = (weight) => {
    const weightMap = {
      "400": "font-normal",
      "500": "font-medium",
      "600": "font-semibold",
      "800": "font-bold"
    };
    return weightMap?.[weight] || `font-[${weight}]`;
  };

  // Map line height to Tailwind class or use exact value
  const getLineHeightClass = (height) => {
    const heightMap = {
      "14px": "leading-xs",
      "19px": "leading-sm",
      "22px": "leading-md",
      "29px": "leading-lg",
      "43px": "leading-xl",
      "141px": "leading-hero"
    };
    return heightMap?.[height] || `leading-[${height}]`;
  };

  // Map colors to Tailwind classes or use exact values
  const getTextColorClass = (color) => {
    const colorMap = {
      "#49ade8": "text-primary-background",
      "#ffffff": "text-primary-foreground",
      "#000000": "text-text-primary",
      "#01112d": "text-primary-dark"
    };
    return colorMap?.[color] || `text-[${color}]`;
  };

  const getBackgroundColorClass = (color) => {
    const colorMap = {
      "#49ade8": "bg-primary-background",
      "#ffffff": "bg-primary-foreground",
      "#000000": "bg-secondary-foreground",
      "#01112d": "bg-primary-dark"
    };
    return colorMap?.[color] || `bg-[${color}]`;
  };

  const getBorderRadiusClass = (radius) => {
    const radiusMap = {
      "8px": "rounded-sm",
      "12px": "rounded-md",
      "22px": "rounded-lg",
      "24px": "rounded-xl",
      "200px": "rounded-full"
    };
    return radiusMap?.[radius] || `rounded-[${radius}]`;
  };

  // Parse border string (e.g., "1 solid #49ade8")
  const parseBorder = (borderString) => {
    if (!borderString) return '';
    const parts = borderString?.split(' ');
    if (parts?.length >= 3) {
      const width = parts?.[0];
      const style = parts?.[1];
      const color = parts?.[2];
      
      const colorMap = {
        "#49ade8": "border-primary-background",
        "#ffffff": "border-primary-foreground",
        "#000000": "border-secondary-foreground",
        "#ebebeb": "border-border-light"
      };
      
      const borderColor = colorMap?.[color] || `border-[${color}]`;
      return `border-[${width}px] border-${style} ${borderColor}`;
    }
    return `border-[1px] border-solid border-[${borderString}]`;
  };

  // Build component classes
  const componentClasses = [
    getFontSizeClass(text_font_size),
    getFontWeightClass(text_font_weight),
    getLineHeightClass(text_line_height),
    `text-${text_text_align}`,
    getTextColorClass(text_color),
    getBackgroundColorClass(fill_background_color),
    parseBorder(border_border),
    getBorderRadiusClass(border_border_radius),
    effect_box_shadow ? `shadow-[${effect_box_shadow}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        componentClasses,
        optionalClasses,
        className
      )}
      style={{ fontFamily: text_font_family }}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;