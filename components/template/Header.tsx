import React from "react";
import Title from "../atoms/Title";
import FormElementDate from "../molucules/FormElementDate";
import FormElementRange from "../molucules/FormElementRange";

interface HeaderProps {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  toDateValue: string;
  setToDateValue: React.Dispatch<React.SetStateAction<string>>;
  fromDateValue: string;
  setFromDateValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  sliderValue,
  setSliderValue,
  toDateValue,
  setToDateValue,
  fromDateValue,
  setFromDateValue,
}: HeaderProps) => {
  return (
    <div className="flex justify-between items-center pt-3 pb-5 px-3 border-b-2 border-black">
      <Title title="Economic Dashboard" />
      <FormElementDate
        dateValue={fromDateValue}
        setDateValue={setFromDateValue}
        label="From"
      />
      <FormElementDate
        dateValue={toDateValue}
        setDateValue={setToDateValue}
        label="To"
      />
      <FormElementRange
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        label="Scale"
      />
    </div>
  );
};

export default Header;
