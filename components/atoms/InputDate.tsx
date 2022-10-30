import React from "react";

interface InputDateProps {
  dateValue: string;
  setDateValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

const InputDate = ({ dateValue, setDateValue, id }: InputDateProps) => {
  return (
    <input
      id={id.toLowerCase()}
      type="Date"
      className="text-sm border-black border px-2 rounded"
      value={dateValue}
      onChange={(e) => setDateValue(e.target.value)}
    />
  );
};

export default InputDate;
