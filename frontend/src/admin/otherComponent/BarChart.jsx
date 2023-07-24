import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Month", "Sales", "Expenses", "Profit"],
    ["April", 1000, 400, 200],
    ["May", 1170, 460, 250],
    ["June", 660, 1120, 300],
    ["July", 1030, 540, 350],
];

export const options = {
    chart: {
        title: "Company Performance",
    },
};

export function BarChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            data={data}
            options={options}
            height={'100%'}
        />
    );
}
