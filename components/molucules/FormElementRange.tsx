import React from "react";
import Label from "../atoms/Label";
import InputRange from "../atoms/InputRange";

interface FormElementRangeProps {
  label: string;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const FormElementRange = ({
  label,
  sliderValue,
  setSliderValue,
}: FormElementRangeProps) => {
  return (
    <div className="flex items-center">
      <Label label={label} />
      <InputRange
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        id={label}
      />
    </div>
  );
};

export default FormElementRange;
