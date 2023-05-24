import '../styles/components/GameSettingTable.css';
import { GamePhase } from '../utils/type';

type Props = {
  gamePhase: GamePhase;
  onGameStart: () => void;
};

export const GameSettingTable = ({ onGameStart }: Props) => {
  return (
    <section>
      <h4>
        プレイヤー人数を選択し、名前を設定してからゲームをスタートしてください。
      </h4>
      <button className="startButton" type="button" onClick={onGameStart}>
        ゲーム開始
      </button>
    </section>
  );
};
