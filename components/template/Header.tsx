import React from "react";
import Title from "../atoms/Title";
import FormElementDate from "../molucules/FormElementDate";
import FormElementRange from "../molucules/FormElementRange";

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-3 pb-5 px-3 border-b-2 border-black">
      <Title title="Economic Dashboard" />
      <FormElementDate label="From" />
      <FormElementDate label="To" />
      <FormElementRange label="Scale" />
    </div>
  );
};

export default Header;
