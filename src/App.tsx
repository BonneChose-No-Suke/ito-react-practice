import './App.css';
import { GameSettingTable } from './components/GameSettingTable';
import { GameTable } from './components/GameTable';
import { Player } from './utils/type';
import { useEffect, useState } from 'react';

const App = () => {
  const [players, setPlayers] = useState<Player[]>([]);

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
    const newPlayers = [...players];
    newPlayers[index].name = name;
    setPlayers(newPlayers);
  };

  // TODO: カードをめくる処理を実装する
  // Hooksに切り出したいが一旦直書き
  const cardClicked = (id: number) => {
    const newPlayers = [...players];
    if (newPlayers[id - 1].card !== undefined) {
      newPlayers[id - 1].card!.isUp = !newPlayers[id - 1].card?.isUp;
    }
    setPlayers(newPlayers);
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
        <GameSettingTable />
        <GameTable
          players={players}
          onAddPlayer={addPlayer}
          onDeletePlayer={deletePlayer}
          onChangePlayerName={changePlayerName}
          onCardClick={cardClicked}
        />
      </section>
    </div>
  );
};

export default App;
