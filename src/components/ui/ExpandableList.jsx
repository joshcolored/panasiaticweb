import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CollapseIcon from './CollapseIcon';

const ExpandableList = ({ 
  items = [],
  className,
  ...props 
}) => {
  const [expandedItems, setExpandedItems] = useState(new Set([0])); // First item expanded by default

  const toggleExpansion = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems?.has(index)) {
      newExpandedItems?.delete(index);
    } else {
      newExpandedItems?.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={twMerge("flex flex-col gap-4 w-full", className)} {...props}>
      {items?.map((item, index) => (
        <div
          key={index}
          className="bg-secondary-background rounded-sm"
        >
          <button
            onClick={() => toggleExpansion(index)}
            className="flex flex-row justify-between items-center w-full p-4 sm:p-[22px] text-left focus:outline-none focus:ring-2 focus:ring-primary-background rounded-sm"
            aria-expanded={expandedItems?.has(index)}
          >
            <span 
              className="text-md font-bold leading-md text-text-primary"
              style={{ fontFamily: 'Raleway' }}
            >
              {item?.question}
            </span>
            <CollapseIcon isExpanded={expandedItems?.has(index)} />
          </button>
          
          {expandedItems?.has(index) && item?.answer && (
            <div className="px-4 sm:px-[22px] pb-4 sm:pb-[22px]">
              <p 
                className="text-md font-normal leading-[21px] text-secondary-muted"
                style={{ fontFamily: 'Microsoft Sans Serif' }}
              >
                {item?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;