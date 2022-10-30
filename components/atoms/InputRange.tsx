import React from "react";

interface InputRangeProps {
  value: number;
  id: string;
}

const InputRange = ({ value, id }: InputRangeProps) => {
  return (
    <input
      id={id.toLowerCase()}
      type="range"
      max="1"
      min="0"
      step="0.1"
      //   value={value}
      className="h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer before:content-['0'] after:content-['1'] before:text-sm after:text-sm before:block after:block before:mt-3 after:mt-3"
    />
  );
};

export default InputRange;
