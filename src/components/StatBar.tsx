import React from 'react';

interface StatBarProps {
  name: string;
  value: number;
}

const StatBar = ({ name, value }: StatBarProps) => {
  return (
    <div className="flex items-center mb-2">
      <span className="text-sm w-[100px] font-bold capitalize">{name}:</span>
      <div className="flex-1 rounded ml-2 bg-[#e0e0e0] overflow-hidden">
        <div
          className="text-center h-6 leading-6 bg-[#eb3850] text-white"
          style={{ width: `${value}%` }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default StatBar;
