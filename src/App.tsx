import './App.css';
import { GameSettingTable } from './components/GameSettingTable';
import { GameTable } from './components/GameTable';
import { GamePhase } from './utils/type';
import { GamePhaseContext, PlayerNumContext } from './utils/contexts';
import { useState } from 'react';

const App = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.setting);
  const [playerNum, setPlayerNum] = useState<number>(6);

  const passGamePhase = (gamePhase: string) => {
    gamePhase === GamePhase.playing
      ? setGamePhase(GamePhase.playing)
      : console.log('error');
  };

  const changePlayerNum = (playerNum: number) => {
    setPlayerNum(playerNum);
  };

  return (
    <div className="App">
      <section>
        <h1 className="page-title">Ito | 意図</h1>
        <PlayerNumContext.Provider value={playerNum}>
          <GamePhaseContext.Provider value={gamePhase}>
            <GameSettingTable
              onChangeGamePhase={passGamePhase}
              onChangePlayerNum={changePlayerNum}
            />
            <GameTable />
          </GamePhaseContext.Provider>
        </PlayerNumContext.Provider>
      </section>
    </div>
  );
};

export default App;
