import React, { FC, useState, useRef, useEffect } from "react";
import { PlayerDetails } from "./mockdata";
import { ChartOptions } from "chart.js";
import Chart from "chart.js";

export interface ChartInfo {
  city: string;
  team: string;
  player: string;
  data: Point[];
}

interface Point {
  x: number;
  y: number;
}

const GENERAL_CHART_OPTIONS: ChartOptions = {
  responsive: true,
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
    if (chartContainer.current !== null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "line",
        data: {
          datasets: [chartData],
        },
        options: { ...GENERAL_CHART_OPTIONS },
      });
      setChart(newChart);
    }
  }, [chartContainer, chartData]);

  return (
    <>
      <div>
        <canvas ref={chartContainer} />
      </div>
    </>
  );
};

export default {};
