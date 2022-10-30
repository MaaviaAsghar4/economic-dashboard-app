import React from "react";

interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => {
  return (
    <label htmlFor={label.toLowerCase()} className="block text-sm mr-4">
      {label}
    </label>
  );
};

export default Label;
