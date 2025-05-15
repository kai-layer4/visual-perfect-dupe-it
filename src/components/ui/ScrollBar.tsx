import React from 'react';

interface ScrollBarProps {
  height?: string;
  bottom?: string;
  right?: string;
  position?: 'absolute' | 'relative';
}

export const ScrollBar: React.FC<ScrollBarProps> = ({ 
  height = 'min-h-[243px]', 
  bottom, 
  right,
  position = 'relative'
}) => {
  return (
    <div
      className={`flex gap-2 w-2.5 bg-[#FFF8F5] p-0.5 rounded-lg ${height} ${position === 'absolute' ? 'absolute' : ''}`}
      style={{ bottom, right }}
    >
      <div className="flex min-h-[109px] w-1.5 bg-[#E3D8D2] rounded-lg" />
    </div>
  );
};

export default ScrollBar;
