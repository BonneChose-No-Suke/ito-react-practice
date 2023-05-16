import { useContext } from 'react';
import '../styles/GameTable.css';
import { GamePhase, Player } from '../utils/type';
import { GamePhaseContext } from '../utils/contexts';

export const GameTable = () => {
  const players: Player[] = [
    { id: 1, name: 'player1', playerNum: 53 },
    { id: 2, name: 'player2', playerNum: 1 },
    { id: 3, name: 'player3', playerNum: 2 },
    { id: 4, name: 'player4', playerNum: 90 },
    { id: 5, name: 'player5', playerNum: 42 },
    { id: 6, name: 'player6', playerNum: 21 },
  ];

  const gamePhase = useContext(GamePhaseContext);

  const changePlayerName = (name: string, id: number) => {
    console.log(players[id] + 'の名前を' + name + 'に変更します。');
  };

  return gamePhase === GamePhase.setting ? (
    <section>
      <h4>ゲーム設定</h4>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, key) => (
            <tr key={key}>
              <td>{player.id}</td>
              <td>
                <input
                  defaultValue={player.name}
                  onChange={(e) => changePlayerName(e.target.value, player.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ) : (
    <section>
      <div className="cardField">
        {players.map((player, key) => (
          <div className="card" key={key}>
            <div className="playerId">{player.id}</div>
            <div className="playerName">{player.name}</div>
            <div className="playerNum">{player.playerNum}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
