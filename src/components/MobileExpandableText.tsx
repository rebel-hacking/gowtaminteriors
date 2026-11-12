import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MobileExpandableTextProps {
  preview: string;
  fullText: string;
  isDarkTheme?: boolean;
  className?: string;
}

export const MobileExpandableText: React.FC<MobileExpandableTextProps> = ({
  preview,
  fullText,
  isDarkTheme = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If full text is already short, just display it
  if (fullText.length <= preview.length + 20) {
    return <p className={className}>{fullText}</p>;
  }

  return (
    <div>
      {/* Desktop view: always show full text */}
      <p className={`hidden lg:block ${className}`}>{fullText}</p>

      {/* Mobile/Tablet view: progressive disclosure */}
      <div className="lg:hidden">
        <p className={className}>
          {isExpanded ? fullText : preview}
        </p>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
            isDarkTheme
              ? 'text-gold hover:text-white'
              : 'text-charcoal hover:text-gold'
          }`}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
          )}
        </button>
      </div>
    </div>
  );
};
