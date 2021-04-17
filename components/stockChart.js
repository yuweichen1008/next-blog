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
            <div className="w-full overflow-hidden rounded shadow-xl md:flex">
                <div className="flex items-center w-full px-5 pt-8 pb-4 text-white bg-indigo-500 md:w-1/2">
                    <Line data={data} options={options} />
                </div>
                <div className="flex items-center w-full p-10 text-gray-600 bg-gray-100 md:w-1/2">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold leading-tight text-gray-800">
                            {stock.stockFullName}
                        </h3>
                        <h6 className="mb-2 text-sm leading-tight">
                            <span>{stock.stockShortName}</span>
                            &nbsp;&nbsp;-&nbsp;&nbsp;Aug 2nd 4:10pm AEST
                        </h6>
                        <div className="flex items-end w-full mb-6">
                            <span className="block text-3xl leading-none text-gray-800">
                                {numberToFix(stock.price.current, 3)}
                            </span>
                            <span className="block ml-4 text-sm leading-5 text-green-500">
                                {`${
                                    stock.price.high - stock.price.low <
                                    0
                                        ? "▼"
                                        : "▲"
                                } ${(
                                    stock.price.high - stock.price.low
                                ).toFixed(3)} (${(
                                    (stock.price.high /
                                        stock.price.low) *
                                        100 -
                                    100
                                ).toFixed(3)}%)`}
                            </span>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 font-semibold text-left">
                                    Open
                                </div>
                                <div className="flex-1 px-3 text-right">
                                    {stock.price.open.toFixed(3)}
                                </div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 font-semibold text-left">
                                    Market Cap
                                </div>
                                <div className="flex-1 pl-3 text-right">
                                    {formatter(stock.price.cap)}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 font-semibold text-left">
                                    High
                                </div>
                                <div className="px-3 text-right">
                                    {stock.price.high.toFixed(3)}
                                </div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 font-semibold text-left">
                                    P/E ratio
                                </div>
                                <div className="pl-3 text-right">
                                    {stock.price.ratio.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 font-semibold text-left">
                                    Low
                                </div>
                                <div className="px-3 text-right">
                                    {stock.price.low.toFixed(3)}
                                </div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 font-semibold text-left">
                                    Dividend yield
                                </div>
                                <div className="pl-3 text-right">
                                    {`${stock.price.dividend}%`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockChart;
