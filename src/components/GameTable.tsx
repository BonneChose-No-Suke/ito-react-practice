import { useContext } from 'react';
import '../styles/components/GameTable.css';
import { GamePhase, Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';
import GameBoard from './GameBoard/GameBoard';
import PlayersTable from './GameBoard/PlayersTable';

type Props = {
  players: Player[];
  onAddPlayer: () => void;
  onDeletePlayer: (index: number) => void;
  onChangePlayerName: (index: number, name: string) => void;
};

export const GameTable = ({
  players,
  onAddPlayer,
  onDeletePlayer,
  onChangePlayerName,
}: Props) => {
  const gamePhase: GamePhase = useContext(GamePhaseContext);

  return (
    <>
      <PlayersTable
        players={players}
        onAddPlayer={onAddPlayer}
        onDeletePlayer={onDeletePlayer}
        onChangePlayerName={onChangePlayerName}
      />
      <GameBoard players={players} />
    </>
  );
};
