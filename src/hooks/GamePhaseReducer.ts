import { GamePhase } from '../utils/type';

export const GamePhaseReducer = (
  gamePhase: GamePhase,
  action: { type: string }
) => {
  switch (action.type) {
    case 'start':
      gamePhase = GamePhase.playing;
      return gamePhase;
    case 'backToSetting':
      gamePhase = GamePhase.setting;
      return gamePhase;
    default:
      throw new Error('Unexpected action');
  }
};
