import { useContext, useReducer } from 'react';
import { GamePhaseReducer } from './GamePhaseReducer';
import { Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';

export const useGamePhase = (
  players: Player[],
  setPlayers: (players: Player[]) => void
) => {
  const currentGamePhase = useContext(GamePhaseContext);
  const [gamePhase, dispatch] = useReducer(GamePhaseReducer, currentGamePhase);

  const start = () => {
    const randomNumbers = setUniqueRandomNum(players);
    const gamePlayers = setRandomNumToPlayers(players, randomNumbers);

    setPlayers(gamePlayers);

    dispatch({ type: 'start' });

    return { players };
  };

  // ゲーム終了にオプションを持たせたい(今後の検討)

  return { start, players, setPlayers, gamePhase };
};

const setRandomNumToPlayers = (players: Player[], randomNumbers: number[]) => {
  return players.map((player, index) => {
    player.id = index + 1;
    player.playerNum = randomNumbers[index];
    return player;
  });
};

const setUniqueRandomNum = (players: Player[]) => {
  const randomNumbers = [];
  while (randomNumbers.length < players.length) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNumbers.indexOf(randomNum) === -1) {
      randomNumbers.push(randomNum);
    }
  }
  return randomNumbers;
};
