import React from "react";
import Label from "../atoms/Label";
import InputDate from "../atoms/InputDate";

interface FormElementDateProps {
  label: string;
}

const FormElementDate = ({ label }: FormElementDateProps) => {
  return (
    <div className="flex items-center">
      <Label label={label} />
      <InputDate value={1} id={label} />
    </div>
  );
};

export default FormElementDate;
