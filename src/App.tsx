import React from "react";
import "./App.css";
import { mockData, PlayerDetails } from "./mockdata";
import { LineChart, ChartInfo } from "./chart";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      Here's the header. We should have filter controls and some other
      interactive options placed here.
    </div>
  );
};

/**
 * Contains the interactive chart of the page.
 */
const Content = () => {
  const mock = mockData;
  const data = processNFLData(mock);
  return (
    <div>
      <LineChart info={data} />
    </div>
  );
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
    data: data.map((v) => ({
      x: v.year,
      y: v.ppg,
    })),
    xMin,
    xMax,
  };
};

export default App;
