/**
 * Temporary mock data so we are unblocked on FE
 */

// Added variables to hold colors for charts specific to team colors  
const RUSSELL = {
  player: "Russell Wilson",
  city: "Seattle",
  team: "Seahawks",
  bgColor: "#5BB61C",
  borderColor: "#011935"
};

export interface PlayerDetails {
  player: string;
  city: string;
  team: string;
  bgColor: string;
  borderColor: string;
  ppg: number;
  year: number;
}

// Russell wilson average points per game per season
export const mockData: PlayerDetails[] = [
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 20, year: 2017 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 28, year: 2018 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 23, year: 2019 },
];

export interface PlayerPPG {
  player: string;
  city: string;
  team: string;
  bgColor: string;
  borderColor: string;
  ppg: number;
  week: number;
}

export const mockPPGData: PlayerPPG[] = [
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 18, week: 1 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 24, week: 2 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 20, week: 3 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 28, week: 4 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 26, week: 5 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 20, week: 6 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 21, week: 7 },
  { player: RUSSELL.player, city: RUSSELL.city, team: RUSSELL.team, bgColor: RUSSELL.bgColor, borderColor: RUSSELL.borderColor, ppg: 34, week: 8 },
];
