import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathBlockProps {
  latex: string;
  block?: boolean;
  className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ latex, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(latex, containerRef.current, {
        throwOnError: false,
        displayMode: block,
      });
    }
  }, [latex, block]);

  return <span ref={containerRef} className={className} />;
};
