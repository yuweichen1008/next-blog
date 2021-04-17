import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "./chartConfig";

const Chart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="flex">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-red-500"
                : "text-green-500"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="flex flex-col border rounded">
      <div className="ml-5">{renderPrice()}</div>
      <div className="inset-x-0 bottom-0 ">
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

      <div>
        <button
          onClick={() => setTimeFormat("24h")}
          className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded 2 hover:bg-blue-700"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded hover:bg-green-700"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded hover:bg-red-700"
        >
          1y
        </button>
      </div>
    </div>
  );
};

export default Chart;
