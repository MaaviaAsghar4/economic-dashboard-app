import React from "react";
import LinearChart from "../atoms/LineChart";
import SimpleBarChart from "../atoms/BarChart";
import ChartContainer from "../molucules/ChartContainer";
import StatsContainer from "../molucules/StatsContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-2 pt-3 w-full pb-5 px-3 gap-8">
      <ChartContainer chartTitle="CPIUS - United States - Consumer Price Index">
        <LinearChart />
      </ChartContainer>
      <ChartContainer chartTitle=" CONFUS - United States - Consumner Confidence Index">
        <LinearChart />
      </ChartContainer>
      <ChartContainer chartTitle="RETAUS - United States - Retail Trade">
        <SimpleBarChart />
      </ChartContainer>
      <div className="w-full mb-10" style={{ height: 300 }}>
        <div className="w-3/4 mx-auto mt-6 p-4 h-full flex justify-evenly flex-col border border-black">
          <StatsContainer
            statsTitle="Average US Sentiment Index (SENTUS)"
            stats={1223}
          />
          <StatsContainer
            statsTitle="Population growth during selected period (POPUS)"
            stats={1423}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
