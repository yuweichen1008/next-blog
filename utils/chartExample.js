import React, { useState, useEffect } from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const ChartExample = () => {
  const [options, setOptions] = useState({
    chart: {
      borderRadius: 10
    },
    rangeSelector: {
      selected: 5
    },
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Price"
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Volume"
        },
        top: "65%",
        height: "35%",
        offset: 1,
        lineWidth: 2
      }
    ],
    tooltip: {
      split: true
    },
    series: [
      {
        type: "candlestick",
        name: "Player1",
        data: [],
        dataGrouping: {
          units: [
            [
              "week", // unit name
              [1] // allowed multiples
            ],
            ["month", [1, 2, 3, 4, 6]]
          ]
        }
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
        dataGrouping: {
          units: [
            [
              "week", // unit name
              [1] // allowed multiples
            ],
            ["month", [1, 2, 3, 4, 6]]
          ]
        }
      }
    ]
  });

  useEffect(() => {
    fetch("https://demo-live-data.highcharts.com/aapl-ohlcv.json")
      .then((response) => response.json())
      .then((data) => {
        // split the data set into ohlc and volume
        var ohlc = [],
          volume = [],
          dataLength = data.length,
          i = 0;

        for (i; i < dataLength; i += 1) {
          ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
          ]);

          volume.push([
            data[i][0], // the date
            data[i][5] // the volume
          ]);
        }

        setOptions({
          series: [
            {
              data: ohlc
            },
            {
              data: volume
            }
          ]
        });
      });
  }, []);

  return (
    <HighchartsReact
      constructorType="stockChart"
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default ChartExample;