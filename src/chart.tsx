import React, { FC, useState, useRef, useEffect } from "react";
import { ChartOptions, ChartDataSets } from "chart.js";
import Chart from "chart.js";
import { info } from "console";

export interface ChartInfo {
  label: string | undefined;
  data: Point[];
  bgColor: string;
  borderColor: string;
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
  title: {
    display: true,
    text: "Avg. PPG By Season"
  },
  hover: {
    mode: "nearest",
    intersect: true
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0
        },
        scaleLabel: {
          display: true,
          labelString: "Points Per Game"
        }
      },
    ],
    xAxes: [
      {
        ticks: {
          min: YEAR_OF_OLDEST_DATA,
        },
        scaleLabel: {
          display: true,
          labelString: "Year"
        }
      },
    ],
  }
};

const GENERAL_CHART_OPTIONS_PPG: ChartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Points Per Game"
  },
  hover: {
    mode: "nearest",
    intersect: true
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0
        },
        scaleLabel: {
          display: true,
          labelString: "Points Scored"
        }
      },
    ],
    xAxes: [
      {
        ticks: {
          min: 1,
        },
        scaleLabel: {
          display: true,
          labelString: "Week"
        }
      },
    ],
  }
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
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      pointRadius: 10,
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
        options: { 
          ...GENERAL_CHART_OPTIONS,
          tooltips: {
            callbacks: {
              afterLabel: function(tooltipItem, data) {
                return "PPG";
              }
            }
          }
        },
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

export const BarChart: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      borderWidth: 1,
      data: data.data,
    };
  })(info);

  useEffect(() => {
    if (chartContainer.current !== null && chart === null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels: getXAxisLabelsByYears(info.xMin, info.xMax),
          datasets: [{ ...chartData, ...DEFAULT_DATASET_OPTIONS }],
        },
        options: { 
          ...GENERAL_CHART_OPTIONS,
          tooltips: {
            callbacks: {
              afterLabel: function(tooltipItem, data) {
                return "PPG";
              }
            }
          }
        },
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

export const ScatterChart: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      pointRadius: 20,
      data: data.data,
    };
  })(info);

  useEffect(() => {
    if (chartContainer.current !== null && chart === null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "scatter",
        data: {
          labels: getXAxisLabelsByYears(info.xMin, info.xMax),
          datasets: [{ ...chartData, ...DEFAULT_DATASET_OPTIONS }],
        },
        options: { 
          ...GENERAL_CHART_OPTIONS,
          tooltips: {
            callbacks: {
              beforeLabel: function(tooltipItem, data) {
                return `${tooltipItem["label"]} Seattle Seahawks`;
              },
              label: function(tooltipItem, data) {
                return "Russell Wilson";
              },
              afterLabel: function(tooltipItem, data) {
                return `${tooltipItem["value"]} PPG`;
              }
            }
          }
        },
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
}

export const LineChartPPG: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      pointRadius: 10,
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
        options: { 
          ...GENERAL_CHART_OPTIONS_PPG,
          tooltips: {
            callbacks: {
              afterLabel: function(tooltipItem, data) {
                return "Points";
              }
            }
          }
        },
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

export const BarChartPPG: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      borderWidth: 1,
      data: data.data,
    };
  })(info);

  useEffect(() => {
    if (chartContainer.current !== null && chart === null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels: getXAxisLabelsByYears(info.xMin, info.xMax),
          datasets: [{ ...chartData, ...DEFAULT_DATASET_OPTIONS }],
        },
        options: { 
          ...GENERAL_CHART_OPTIONS_PPG,
          tooltips: {
            callbacks: {
              afterLabel: function(tooltipItem, data) {
                return "Points";
              }
            }
          }
        },
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

export const ScatterChartPPG: FC<{ info: ChartInfo }> = ({ info }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  const chartData = ((data) => {
    return {
      label: info.label || "testing this",
      backgroundColor: info.bgColor,
      borderColor: info.borderColor,
      pointRadius: 20,
      data: data.data,
    };
  })(info);

  useEffect(() => {
    if (chartContainer.current !== null && chart === null) {
      // Create and set the chart instance
      const newChart = new Chart(chartContainer.current, {
        type: "scatter",
        data: {
          labels: getXAxisLabelsByYears(info.xMin, info.xMax),
          datasets: [{ ...chartData, ...DEFAULT_DATASET_OPTIONS }],
        },
        options: { 
          ...GENERAL_CHART_OPTIONS_PPG,
          tooltips: {
            callbacks: {
              beforeLabel: function(tooltipItem, data) {
                return `${tooltipItem["label"]} Seattle Seahawks`;
              },
              label: function(tooltipItem, data) {
                return "Russell Wilson";
              },
              afterLabel: function(tooltipItem, data) {
                return `${tooltipItem["value"]} Points`;
              }
            }
          }
        },
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
}

const getXAxisLabelsByYears = (min: number, max: number): number[] => {
  let counter = min;

  const result = [];
  while (counter <= max) {
    result.push(counter);
    counter++;
  }
  return result;
};
