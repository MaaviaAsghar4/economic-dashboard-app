import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LineChartData } from "../../types";

interface LinearChatProps {
  data: LineChartData[] | [];
}

const LinearChart = ({ data }: LinearChatProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="original" stroke="#8884d8" />
        <Line
          type="monotone"
          dataKey="scaled"
          stroke="#82ca9d"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LinearChart;
