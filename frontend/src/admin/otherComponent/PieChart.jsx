import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Reviews", "Star"],
    ["1 Star", 5],
    ["2 Star", 7],
    ["3 Star", 9],
    ["4 Star", 15],
    ["5 Star", 20]
]

export const options = {
    title: "Our Reviews",
    colors: ['red', 'orange', 'yellow', 'blue', 'green']
};

export function PieChart() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={'100%'}
        />
    );
}
