import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChartData } from "../../types";

interface BararChatProps {
  data: BarChartData[] | [];
}

const SimpleBarChart = ({ data }: BararChatProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="RETAUS" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
