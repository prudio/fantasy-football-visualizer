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
  const russell = useNFLPlayer();

  return (
    <div>
      In here, we should have filter controls and some other interactive
      options.
      <div className="c-player__name">{russell.name}</div>
      <div className="c-player__position">{russell.position}</div>
      <div className="c-player__team">{russell.team}</div>
    </div>
  );
};

/**
 * This should contain the chart containers and render different charts.
 */
const Content = () => {
  const mock = mockData;
  const data = processNFLData(mock);
  return (
    <div>
      should contain container for charts.
      <Chart />
      <LineChart info={data} />
    </div>
  );
};

const processNFLData = (data: PlayerDetails[]): ChartInfo => {
  const xMin = data.reduce(
    (memo, cur) => (memo < cur.year ? memo : cur.year),
    Infinity
  );
  const xMax = data.reduce(
    (memo, cur) => (memo > cur.year ? memo : cur.year),
    -Infinity
  );

  return {
    city: data[0]?.city,
    player: data[0]?.player || "default",
    team: data[0]?.team,
    data: data.map((v) => ({
      x: v.year,
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
