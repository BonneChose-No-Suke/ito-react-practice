import { useContext } from 'react';
import '../styles/components/GameTable.css';
import { GamePhase, Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';
import GameBoard from './GameBoard/GameBoard';
import PlayersTable from './GameBoard/PlayersTable';

type Props = {
  players: Player[];
  gamePhase: GamePhase;
  onAddPlayer: () => void;
  onDeletePlayer: (index: number) => void;
  onChangePlayerName: (index: number, name: string) => void;
  onCardClick: (index: number) => void;
};

export const GameTable = ({
  players,
  gamePhase,
  onAddPlayer,
  onDeletePlayer,
  onChangePlayerName,
  onCardClick,
}: Props) => {
  return (
    <>
      <PlayersTable
        players={players}
        gamePhase={gamePhase}
        onAddPlayer={onAddPlayer}
        onDeletePlayer={onDeletePlayer}
        onChangePlayerName={onChangePlayerName}
      />
      {gamePhase === GamePhase.playing && (
        <GameBoard players={players} onCardClick={onCardClick} />
      )}
    </>
  );
};
