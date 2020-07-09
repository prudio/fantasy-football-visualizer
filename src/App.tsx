import React, { useState, useEffect, VideoHTMLAttributes, FC } from "react";
import "./App.css";
import { mockData, PlayerDetails, mockPPGData, PlayerPPG } from "./mockdata";
import { LineChart, BarChart, ScatterChart, LineChartPPG, BarChartPPG, ScatterChartPPG, ChartInfo } from "./chart";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

const Body = () => {
  const [chartType, setChartType] = useState("line");

  return (
    <div>
      <Header setChartType={setChartType} />
      <Content chartType={chartType} />
    </div>
  );
};

const Header: FC<{ setChartType(chartType: string): void; }> = ({setChartType}) => {

  return (
    <div>
      <nav className="header">
        <button name="line-chart-btn" onClick={() => setChartType("line")}>Line Chart</button>
        <button name="bar-chart-btn" onClick={() => setChartType("bar")}>Bar Chart</button>
        <button name="scatter-chart-btn" onClick={() => setChartType("scatter")}>Scatter Chart</button>
      </nav>
    </div>
  );
}

/**
 * This should contain the chart containers and render different charts.
 */
const Content: FC<{ chartType: string; }> = ({chartType}) => {
  const mock = mockData;
  const russell = processNFLData(mock);

  const mockPPG = mockPPGData;
  const russellPPG = processPPGData(mockPPG);

  if (chartType === "bar") {
    return (
      <div>
        <BarChart info={russell} />
        <BarChartPPG info={russellPPG} />
      </div>
    );
  } else if (chartType === "scatter") {
    return (
      <div>
        <ScatterChart info={russell} />
        <ScatterChartPPG info={russellPPG} />
      </div>
    );
  } else if (chartType === "line") {
    return (
      <div>
        <LineChart info={russell} />
        <LineChartPPG info={russellPPG} />
      </div>
    );
  } else {
    throw new Error("Received invalid chart type");
  }
};

const processNFLData = (data: PlayerDetails[]): ChartInfo => {
  if (data.length === 0) {
    throw new Error("Received 0 player results");
  }
  const xMin = data.reduce(
    (memo, cur) => (memo < cur.year ? memo : cur.year),
    Infinity
  );
  const xMax = data.reduce(
    (memo, cur) => (memo > cur.year ? memo : cur.year),
    -Infinity
  );
  const { player, team, city } = data[0];

  const label = `${player} ${
    team !== undefined && city !== undefined ? `(${city} ${team})` : ""
  }`;

  return {
    label,
    bgColor: data[0]?.bgColor,
    borderColor: data[0]?.borderColor,
    data: data.map((v) => ({
      x: v.year,
      y: v.ppg,
    })),
    xMin,
    xMax,
  };
};

const processPPGData = (data: PlayerPPG[]): ChartInfo => {
  if (data.length === 0) {
    throw new Error("Received 0 player results");
  }
  const xMin = data.reduce(
    (memo, cur) => (memo < cur.week ? memo : cur.week),
    Infinity
  );
  const xMax = data.reduce(
    (memo, cur) => (memo > cur.week ? memo : cur.week),
    -Infinity
  );
  const { player, team, city } = data[0];

  const label = `${player} ${
    team !== undefined && city !== undefined ? `(${city} ${team})` : ""
  }`;

  return {
    label,
    bgColor: data[0]?.bgColor,
    borderColor: data[0]?.borderColor,
    data: data.map((v) => ({
      x: v.week,
      y: v.ppg,
    })),
    xMin,
    xMax,
  };
};

export default App;