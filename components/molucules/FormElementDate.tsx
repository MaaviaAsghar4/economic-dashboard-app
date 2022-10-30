import React from "react";
import Label from "../atoms/Label";
import InputDate from "../atoms/InputDate";

interface FormElementDateProps {
  label: string;
  dateValue: string;
  setDateValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormElementDate = ({
  label,
  dateValue,
  setDateValue,
}: FormElementDateProps) => {
  return (
    <div className="flex items-center">
      <Label label={label} />
      <InputDate dateValue={dateValue} setDateValue={setDateValue} id={label} />
    </div>
  );
};

export default FormElementDate;
