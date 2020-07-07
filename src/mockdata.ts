/**
 * Temporary mock data so we are unblocked on FE
 */

const PLAYER = "Russell Wilson";
const CITY = "City";
const TEAM = "Seahawks";

export interface PlayerDetails {
  player: string;
  city: string;
  team: string;
  ppg: number;
  year: number;
}
// Russell wilson average points per game per season
export const mockData: PlayerDetails[] = [
  { player: PLAYER, city: CITY, team: TEAM, ppg: 20, year: 2017 },
  { player: PLAYER, city: CITY, team: TEAM, ppg: 21, year: 2018 },
  { player: PLAYER, city: CITY, team: TEAM, ppg: 22, year: 2019 },
];
