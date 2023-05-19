import './App.css';
import { GameSettingTable } from './components/GameSettingTable';
import { GameTable } from './components/GameTable';
import { GamePhaseReducer } from './hooks/GamePhaseReducer';
import { GamePhaseContext } from './utils/contexts';
import { Player } from './utils/type';
import { useContext, useEffect, useReducer, useState } from 'react';

const App = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const currentGamePhase = useContext(GamePhaseContext);
  const [gamePhase, dispatch] = useReducer(GamePhaseReducer, currentGamePhase);

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
    const randomNumbers = setUniqueRandomNum(players);
    const gamePlayers = setRandomNumToPlayers(players, randomNumbers);

    dispatch({ type: 'start' });

    setPlayers(gamePlayers);
  };

  useEffect(() => {
    const initialPlayers: Player[] = [...Array(6)].map((_, i) => ({
      name: `Player${i + 1}`,
    }));

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
