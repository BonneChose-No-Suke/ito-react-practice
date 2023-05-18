import { Player } from '../../utils/type';
import { PlayerColumn } from './PlayerColumn';

type Props = {
  players: Player[];
  onAddPlayer: () => void;
  onDeletePlayer: (index: number) => void;
  onChangePlayerName: (index: number, name: string) => void;
};

const PlayersTable = ({
  players,
  onAddPlayer,
  onDeletePlayer,
  onChangePlayerName,
}: Props) => {
  return (
    <section>
      <h4>ゲーム設定</h4>
      <div className="playersTable">
        <div>プレイヤーネーム</div>
        {players.map((player, key) => {
          return (
            <PlayerColumn
              key={key}
              index={key}
              player={player}
              onDeletePlayer={onDeletePlayer}
              onChangePlayerName={onChangePlayerName}
            />
          );
        })}
      </div>
      <div className="addPlayer">
        <p>{players.length}</p>
        <button type="button" onClick={() => onAddPlayer()}>
          プレイヤー追加
        </button>
      </div>
    </section>
  );
};

export default PlayersTable;
