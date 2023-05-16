import { useContext } from 'react';
import '../styles/GameSettingTable.css';
import { GamePhase } from '../utils/type';
import { GamePhaseContext, PlayerNumContext } from '../utils/contexts';

type Props = {
  onChangeGamePhase: (gamePhase: string) => void;
  onChangePlayerNum: (playerNum: number) => void;
};

export const GameSettingTable = ({
  onChangeGamePhase,
  onChangePlayerNum,
}: Props) => {
  const playerNum = useContext(PlayerNumContext);
  const gamePhase = useContext(GamePhaseContext);

  return (
    <section>
      <h4>
        {gamePhase === 'setting'
          ? 'プレイヤー人数を選択し、名前を設定してからゲームをスタートしてください。'
          : 'ゲーム中です。'}
      </h4>
      <div className="playerNumberSetting">
        <label>プレイ人数</label>
        <select
          name="playerNum"
          id="playerNum"
          value={playerNum}
          onChange={(e) => onChangePlayerNum(Number(e.target.value))}
        >
          {[...Array(15)].map((_, i) => (
            <option key={i + 6} value={i + 6}>
              {i + 6}
            </option>
          ))}
        </select>
      </div>
      <button
        className="startButton"
        type="button"
        onClick={() => onChangeGamePhase(GamePhase.playing)}
      >
        {gamePhase === 'setting' ? 'ゲーム開始' : 'ゲーム設定に戻る'}
      </button>
    </section>
  );
};
