import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="text-xl font-medium">{title}</h1>;
};

export default Title;
