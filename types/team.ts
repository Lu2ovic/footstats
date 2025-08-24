export interface Area {
    id: number
    name: string
    code: string
    flag: string
  }

  export interface RunningCompetition {
    id: number
    name: string
    code: string
    type: string
    emblem: string | null
  }
  
  export interface CoachContract {
    start: string
    until: string
  }
  
  export interface Coach {
    id: number
    firstName: string
    lastName: string
    name: string
    dateOfBirth: string
    nationality: string
    contract: CoachContract
  }
  
  export interface Player {
    id: number
    name: string
    position: string
    dateOfBirth: string
    nationality: string
  }
  
  export interface TeamResponse {
    area: Area
    id: number
    name: string
    shortName: string
    tla: string
    crest: string
    address: string
    website: string
    founded: number
    clubColors: string
    venue: string
    runningCompetitions: RunningCompetition[]
    coach: Coach
    squad: Player[]
    staff: any[]
    lastUpdated: string
  }