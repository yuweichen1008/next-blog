import { Line } from "react-chartjs-2";
import React from "react";

const formatter = (number) =>
    number > 999999 ? (number / 1000000).toFixed(1) + "M" : number;

const buildData = ({chartData}) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: "",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            data: chartData.data,
        },
    ],
});

const options = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    fontColor: "rgba(255, 255, 255, 1)",
                },
                gridLines: {
                    display: false,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    fontColor: "rgba(255, 255, 255, 1)",
                },
                gridLines: {
                    color: "rgba(255, 255, 255, .2)",
                    borderDash: [5, 5],
                    zeroLineColor: "rgba(255, 255, 255, .2)",
                    zeroLineBorderDash: [5, 5],
                },
            },
        ],
    },
    layout: {
        padding: {
            right: 5,
        },
    },
};

const numberToFix = (number, fix) => (number || 0).toFixed(fix)

const StockChart = ({stock}) => {
    const data = buildData(stock)
    return (
        <>
            <div className="rounded">
                <div className="relative flex flex-col items-center px-5 pt-8 pb-4 text-white bg-gradient-to-r from-green-400 to-blue-500">
                    <h3 className="absolute text-lg leading-tight">
                                {stock.stockFullName}
                    </h3>
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
};

export default StockChart;
