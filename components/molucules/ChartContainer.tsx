import React from "react";
import ChartTitle from "../atoms/ChartTitle";

interface ChartContainerProps {
  children: React.ReactNode;
  chartTitle: string;
}

const ChartContainer = ({ children, chartTitle }: ChartContainerProps) => {
  return (
    <div className="w-full mb-10" style={{ height: 300 }}>
      <div className="h-full w-5/6 mt-6">
        <ChartTitle chartTitle={chartTitle} />
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
