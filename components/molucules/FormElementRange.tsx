import React from "react";
import Label from "../atoms/Label";
import InputRange from "../atoms/InputRange";

interface FormElementRangeProps {
  label: string;
}

const FormElementRange = ({ label }: FormElementRangeProps) => {
  return (
    <div className="flex items-center">
      <Label label={label} />
      <InputRange value={1} id={label} />
    </div>
  );
};

export default FormElementRange;
