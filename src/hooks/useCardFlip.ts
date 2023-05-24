import { useState } from 'react';
import { Player } from '../utils/type';

export const useCardFlip = () => {
  const flipCard = (players: Player[], id: number) => {
    const [gamePlayers, setGamePlayers] = useState(players);
    const player = gamePlayers.find((player) => player.id === id);
    if (player) {
      player.card!.isUp = !player.card!.isUp;
      setGamePlayers(gamePlayers);
    }

    return { gamePlayers };
  };

  return { flipCard };
};
