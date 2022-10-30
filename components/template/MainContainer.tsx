import React, { useEffect, useState } from "react";
import LinearChart from "../atoms/LineChart";
import SimpleBarChart from "../atoms/BarChart";
import ChartContainer from "../molucules/ChartContainer";
import StatsContainer from "../molucules/StatsContainer";
import { fetchData } from "../../services/HttpService";

interface MainContainerProps {
  sliderValue: number;
  toDateValue: string;
  fromDateValue: string;
}

interface ChartData {
  date: string;
  original: number;
  scaled: number;
}

const MainContainer = ({
  sliderValue,
  toDateValue,
  fromDateValue,
}: MainContainerProps) => {
  const [CPIUSData, setCPIUSData] = useState<ChartData[] | []>([]);
  const [CONFUSData, setCONFUSData] = useState<ChartData[] | []>([]);
  const [RETAUSData, setRETAUSData] = useState<ChartData[] | []>([]);
  const [SENTUSData, setSENTUSData] = useState(0);
  const [POPUSData, setPOPUSData] = useState(0);

  useEffect(() => {
    getCPIUSData();
    getCONFUSData();
    getRETAUSData();
    getSENTUSData();
    getPOPUSData();
  }, [toDateValue, fromDateValue]);

  useEffect(() => {
    setCPIUSData((prevState) => {
      let _prevState = JSON.parse(JSON.stringify(prevState));
      // return if data is not available
      if (!_prevState.length) return [];
      let data = _prevState.map((values: ChartData) => {
        return {
          ...values,
          scaled: values.original * sliderValue,
        };
      });

      return data;
    });

    setCONFUSData((prevState) => {
      let _prevState = JSON.parse(JSON.stringify(prevState));
      // return if data is not available
      if (!_prevState.length) return [];
      let data = _prevState.map((values: ChartData) => {
        return {
          ...values,
          scaled: values.original * sliderValue,
        };
      });

      return data;
    });
  }, [sliderValue]);

  const getCPIUSData = async () => {
    try {
      const result = await fetchData("CPIUS", toDateValue, fromDateValue);
      // return if data is not available
      if (!result && !result?.data && result?.data?.dates.length) {
        setCPIUSData([]);
        return;
      }
      const data = result.data.dates.map((value: string, index: number) => {
        return {
          date: value,
          original: result.data.values[index],
          scaled: result.data.values[index] * sliderValue,
        };
      });

      setCPIUSData(data);
    } catch (error) {
      setCPIUSData([]);
    }
  };

  const getCONFUSData = async () => {
    try {
      const result = await fetchData("CONFUS", toDateValue, fromDateValue);

      // return if data is not available
      if (!result && !result?.data && result?.data?.dates.length) {
        setCPIUSData([]);
        return;
      }

      const data = result.data.dates.map((value: string, index: number) => {
        return {
          date: value,
          original: result.data.values[index],
          scaled: result.data.values[index] * sliderValue,
        };
      });
      setCONFUSData(data);
    } catch (error) {
      setCONFUSData([]);
    }
  };

  const getRETAUSData = async () => {
    try {
      const result = await fetchData("RETAUS", toDateValue, fromDateValue);
      // return if data is not available
      if (!result && !result?.data && result?.data?.dates.length) {
        setRETAUSData([]);
        return;
      }
      const data = result.data.dates.map((value: string, index: number) => {
        return {
          date: value,
          original: result.data.values[index],
          scaled: result.data.values[index] * sliderValue,
        };
      });

      setRETAUSData(data);
    } catch (error) {
      setRETAUSData([]);
    }
  };

  const getSENTUSData = async () => {
    try {
      const result = await fetchData("SENTUS", toDateValue, fromDateValue);
      // return if data is not available
      if (!result && !result?.data && result?.data?.dates.length) {
        setSENTUSData(0);
        return;
      }

      const sentusValues = result.data.values;
      const sentusAtBeginning = sentusValues[0];
      const sentusAtEnd = sentusValues.at(-1);
      const sentusGrowthRate =
        ((sentusAtEnd - sentusAtBeginning) / sentusAtBeginning) * 100;
      if (isNaN(sentusGrowthRate)) {
        setSENTUSData(0);
        return;
      }
      setSENTUSData(sentusGrowthRate);
    } catch (error) {
      setSENTUSData(0);
    }
  };

  const getPOPUSData = async () => {
    try {
      const result = await fetchData("POPUS", toDateValue, fromDateValue);
      // return if data is not available
      if (!result && !result?.data && result?.data?.dates.length) {
        setPOPUSData(0);
        return;
      }

      const populationValues = result.data.values;
      const populationAtBeginning = populationValues[0];
      const populationAtEnd = populationValues.at(-1);
      const populationGrowthRate =
        ((populationAtEnd - populationAtBeginning) / populationAtBeginning) *
        100;
      if (isNaN(populationGrowthRate)) {
        setPOPUSData(0);
        return;
      }
      setPOPUSData(populationGrowthRate);
    } catch (error) {
      setPOPUSData(0);
    }
  };

  return (
    <div className="grid grid-cols-2 pt-3 w-full pb-5 px-3 gap-8">
      <ChartContainer chartTitle="CPIUS - United States - Consumer Price Index">
        <LinearChart data={CPIUSData} />
      </ChartContainer>
      <ChartContainer chartTitle=" CONFUS - United States - Consumner Confidence Index">
        <LinearChart data={CONFUSData} />
      </ChartContainer>
      <ChartContainer chartTitle="RETAUS - United States - Retail Trade">
        <SimpleBarChart data={RETAUSData} />
      </ChartContainer>
      <div className="w-full mb-10" style={{ height: 300 }}>
        <div className="w-3/4 mx-auto mt-6 p-4 h-full flex justify-evenly flex-col border border-black">
          <StatsContainer
            statsTitle="Average US Sentiment Index (SENTUS)"
            stats={`${SENTUSData.toFixed(2)}%`}
          />
          <StatsContainer
            statsTitle="Population growth during selected period (POPUS)"
            stats={`${POPUSData.toFixed(2)}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
