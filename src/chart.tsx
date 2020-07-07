import React, { FC } from "react";
import { PlayerDetails } from "./mockdata";

/**
 * Add different chart implementations here. Use Chart.js and Anime.js as a part
 * of this implementation.
 */
export const LineChart: FC<{ data: PlayerDetails[] }> = ({ data }) => {
  return (
    <>
      {data.map(({ player, city, team, ppg, year }) => {
        return (
          <div>
            <div>{player}</div>
            <div>{city}</div>
            <div>{team}</div>
            <div>{ppg}</div>
            <div>{year}</div>
          </div>
        );
      })}
    </>
  );
};

export default {};
