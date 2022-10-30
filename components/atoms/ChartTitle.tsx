import React from "react";

interface ChartTitleProps {
  chartTitle: string;
}

const ChartTitle = ({ chartTitle }: ChartTitleProps) => {
  return <h4 className="text-xs text-center mb-3">{chartTitle}</h4>;
};

export default ChartTitle;
