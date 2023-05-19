import { useContext, useReducer, useState } from 'react';
import { GamePhaseReducer } from './GamePhaseReducer';
import { GamePhase, Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';

export const useGamePhase = (prevPlayers: Player[], action: string) => {
  const gamePhase = useContext(GamePhaseContext);
  const [currentGamePhase, dispatch] = useReducer(GamePhaseReducer, gamePhase);
  const [players, setPlayers] = useState<Player[]>(prevPlayers);

  const randomNumbers = setUniqueRandomNum(prevPlayers);
  const gamePlayers = setRandomNumToPlayers(prevPlayers, randomNumbers);

  dispatch({ type: action });

  setPlayers(gamePlayers);

  console.log(gamePhase, players);

  // ゲーム終了にオプションを持たせたい(今後の検討)

  return { gamePlayers, currentGamePhase };
};

const setRandomNumToPlayers = (players: Player[], randomNumbers: number[]) => {
  return players.map((player, index) => {
    player.id = index;
    player.playerNum = randomNumbers[index];
    return player;
  });
};

const setUniqueRandomNum = (players: Player[]) => {
  const randomNumbers = [];
  while (randomNumbers.length < players.length) {
    const randomNum = Math.floor(Math.random() * players.length) + 1;
    if (randomNumbers.indexOf(randomNum) === -1) {
      randomNumbers.push(randomNum);
    }
  }
  return randomNumbers;
};
