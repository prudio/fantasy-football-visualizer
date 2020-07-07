import React from "react";
import "./App.css";
import { mockData } from "./mockdata";
import { LineChart } from "./chart";

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
  return (
    <div>
      should contain container for charts.
      <Chart />
      <LineChart data={mock} />
    </div>
  );
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
