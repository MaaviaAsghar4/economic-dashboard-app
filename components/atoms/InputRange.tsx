import React from "react";

interface InputRangeProps {
  id: string;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const InputRange = ({ sliderValue, id, setSliderValue }: InputRangeProps) => {
  return (
    <input
      id={id.toLowerCase()}
      type="range"
      max="2"
      min="1"
      step="0.1"
      value={sliderValue}
      onChange={(e) => setSliderValue(Number(e.target.value))}
      className="h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer before:content-['1'] after:content-['2'] before:text-sm after:text-sm before:block after:block before:mt-3 after:mt-3"
    />
  );
};

export default InputRange;
