import '../styles/components/GameSettingTable.css';

export const GameSettingTable = () => {
  return (
    <section>
      <h4>
        プレイヤー人数を選択し、名前を設定してからゲームをスタートしてください。
      </h4>
      <button className="startButton" type="button">
        ゲーム開始
      </button>
    </section>
  );
};
