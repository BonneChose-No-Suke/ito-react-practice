export interface Player {
  id?: number;
  name: string;
  card: {
    playerNum?: number;
    isUp?: boolean;
  };
}

export enum GamePhase {
  setting = 'setting',
  playing = 'playing',
}
