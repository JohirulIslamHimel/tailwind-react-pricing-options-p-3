import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

const resultData = [
  { id: 1, name: "Rahim Ahmed", physics: 78, chemistry: 72, math: 85 },
  { id: 2, name: "Karim Hasan", physics: 65, chemistry: 70, math: 68 },
  { id: 3, name: "Nusrat Jahan", physics: 88, chemistry: 82, math: 91 },
  { id: 4, name: "Tanvir Islam", physics: 55, chemistry: 60, math: 58 },
  { id: 5, name: "Sadia Rahman", physics: 92, chemistry: 89, math: 95 },
  { id: 6, name: "Fahim Hossain", physics: 74, chemistry: 76, math: 80 },
  { id: 7, name: "Mim Akter", physics: 68, chemistry: 64, math: 72 },
  { id: 8, name: "Arif Chowdhury", physics: 81, chemistry: 79, math: 84 },
  { id: 9, name: "Jannat Sultana", physics: 59, chemistry: 62, math: 61 },
  { id: 10, name: "Sakib Mahmud", physics: 86, chemistry: 88, math: 90 },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
