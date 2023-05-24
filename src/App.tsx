import './App.css';
import { GameSettingTable } from './components/GameSettingTable';
import { GameTable } from './components/GameTable';
import { useGamePhase } from './hooks/useGamePhase';
import { Player } from './utils/type';
import { useEffect, useState } from 'react';

const App = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const { start, gamePhase } = useGamePhase(players, setPlayers);

  const addPlayer = () => {
    setPlayers((prevPlayers) => {
      const newPlayer = {
        name: `Player${prevPlayers.length + 1}`,
      };

      return [...prevPlayers, newPlayer];
    });
  };

  const deletePlayer = (index: number) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers.splice(index, 1);

      return newPlayers;
    });
  };

  const changePlayerName = (index: number, name: string) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[index].name = name;

      return newPlayers;
    });
  };

  // ゲーム開始を直書き、useGamePhaseに移行したい
  const starGame = () => {
    const { players } = start();

    setPlayers(players);
  };

  useEffect(() => {
    const initialPlayers = [...Array(6)].map((_, index) => {
      return {
        name: `player${index + 1}`,
      };
    });
    setPlayers(initialPlayers);
  }, []);

  return (
    <div className="App">
      <section>
        <h1 className="page-title">Ito | 意図</h1>
        <GameSettingTable onGameStart={starGame} gamePhase={gamePhase} />
        <GameTable
          players={players}
          onAddPlayer={addPlayer}
          onDeletePlayer={deletePlayer}
          onChangePlayerName={changePlayerName}
        />
      </section>
    </div>
  );
};

export default App;
