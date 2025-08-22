export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  }
  
  export interface TableItem {
    position: number;
    team: Team;
    playedGames: number;
    form: string | null;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  }
  
  export interface Standing {
    stage: string;
    type: string;
    group: string | null;
    table: TableItem[];
  }
  
  export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  }
  
  export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null;
  }
  
  export interface StandingsResponse {
    filters: Record<string, any>;
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
    competition: Competition;
    season: Season;
    standings: Standing[];
  }  