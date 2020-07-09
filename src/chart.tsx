import React, { FC, useState, useRef, useEffect } from "react";
import { ChartOptions, ChartDataSets } from "chart.js";
import Chart from "chart.js";

export interface ChartInfo {
  city: string;
  team: string;
  player: string;
  data: Point[];
  xMin: number;
  xMax: number;
}

interface Point {
  x: number;
  y: number;
}

// Year of oldest NFL data we've collected
/** Year of oldest NFL data we've collected */
const YEAR_OF_OLDEST_DATA = 2010;

const GENERAL_CHART_OPTIONS: ChartOptions = {
  responsive: true,
  scales: {
    xAxes: [
      {
        ticks: {
          min: YEAR_OF_OLDEST_DATA,
        },
      },
    ],
  },
};

const DEFAULT_DATASET_OPTIONS: ChartDataSets = {
  fill: false,
};

/**
 * Add different chart implementations here. Use Chart.js and Anime.js as a part
 * of this implementation.
 */
export const LineChart: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.player || "testing this",
      backgroundColor: "rgb(44,44,44)",
      borderColor: "rgb(88,88,88)",
      data: data.data,
    };
  })(info);

  useEffect(() => {
    if (chartContainer.current !== null && chart === null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "line",
        data: {
          labels: getXAxisLabelsByYears(info.xMin, info.xMax),
          datasets: [{ ...chartData, ...DEFAULT_DATASET_OPTIONS }],
        },
        options: { ...GENERAL_CHART_OPTIONS },
      });
      setChart(newChart);
    }
  }, [chart, chartContainer, chartData, info.xMin, info.xMax]);

  return (
    <>
      <div>
        <canvas ref={chartContainer} />
      </div>
    </>
  );
};

const getXAxisLabelsByYears = (min: number, max: number): number[] => {
  let counter = min;

  const result = [];
  while (counter <= max) {
    result.push(counter);
    counter++;
  }
  return result;
};
