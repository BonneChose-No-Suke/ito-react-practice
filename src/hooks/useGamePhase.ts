import { useContext, useEffect, useReducer, useState } from 'react';
import { GamePhaseReducer } from './GamePhaseReducer';
import { GamePhase, Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';

export const useGamePhase = () => {
  const currentGamePhase = useContext(GamePhaseContext);
  const [gamePhase, dispatch] = useReducer(GamePhaseReducer, currentGamePhase);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const initialPlayers = [...Array(6)].map((_, index) => {
      return {
        name: `player${index + 1}`,
      };
    });
    setPlayers(initialPlayers);
  }, []);

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
    player.id = index;
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
