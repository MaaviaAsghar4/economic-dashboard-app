import React from "react";

interface InputDateProps {
  value: number;
  id: string;
}

const InputDate = ({ value, id }: InputDateProps) => {
  return (
    <input
      id={id.toLowerCase()}
      type="Date"
      className="text-sm border-black border px-2 rounded"
    />
  );
};

export default InputDate;
