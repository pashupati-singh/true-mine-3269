import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Sales", "Product Added"],
  ["April", 1000, 400],
  ["May", 1170, 460],
  ["June", 660, 1120],
  ["Current", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  pointSize: 5,
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
