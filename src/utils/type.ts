export interface Player {
  id?: number;
  name: string;
  playerNum?: number;
}

export enum GamePhase {
  setting = 'setting',
  playing = 'playing',
}
