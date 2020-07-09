import React, { useState, useEffect } from "react";
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
  const [chart, setChart] = useState("line");

  return (
    <div>
      <Header setChart={setChart} />
      <Content chart={chart} />
    </div>
  );
};

const Header = (props: { setChart: (arg0: string) => void; }) => {
  const russell = useNFLPlayer();

  return (
    <div>
      <nav className="header">
        <button name="line-chart-btn" onClick={() => props.setChart("line")}>Line Chart</button>
        <button name="bar-chart-btn" onClick={() => props.setChart("bar")}>Bar Chart</button>
        <button name="scatter-chart-btn" onClick={() => props.setChart("scatter")}>Scatter Chart</button>
      </nav>
      <p>Showing data for {russell.name}, {russell.position}, {russell.team}</p>
    </div>
  );
}

/**
 * This should contain the chart containers and render different charts.
 */
const Content = (props: { chart: string; }) => {
  const mock = mockData;
  const russell = processNFLData(mock);

  const mockPPG = mockPPGData;
  const russellPPG = processPPGData(mockPPG);

  // return (
  //   <div>
  //     should contain container for charts.
  //     <Chart />
  //     <LineChart info={russell} />
  //     <BarChart info={russell} />
  //     <ScatterChart info={russell} />
  //   </div>
  // );
  if (props.chart === "bar") {
    return (
      <div>
        <BarChart info={russell} />
        <BarChartPPG info={russellPPG} />
      </div>
    );
  } else if (props.chart === "scatter") {
    return (
      <div>
        <ScatterChart info={russell} />
        <ScatterChartPPG info={russellPPG} />
      </div>
    );
  } else {
    return (
      <div>
        <LineChart info={russell} />
        <LineChartPPG info={russellPPG} />
      </div>
    );
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

interface Player {
  name: string;
  position: string;
  team: string;
}

const Chart = () => {
  return <div></div>;
};

/**
 * TODO: Create react hooks to handle asynchronous data fetches.
 */

const useNFLPlayer = (): Player => {
  return { name: "Russell Wilson", position: "Quarterback", team: "Seahawks" };
};

// TODO: create different chart types

export default App;