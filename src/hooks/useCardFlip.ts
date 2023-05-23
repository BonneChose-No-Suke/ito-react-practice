import { useState } from 'react';
import { Player } from '../utils/type';

export const useCardFlip = (players: Player[]) => {
  const [gamePlayers, setGamePlayers] = useState(players);
  const flipCard = (id: number) => {
    const player = gamePlayers.find((player) => player.id === id);
    console.log(player);
    if (player) {
      player.card!.isUp = !player.card!.isUp;
      setGamePlayers(gamePlayers);
    }
  };

  return { flipCard };
};
