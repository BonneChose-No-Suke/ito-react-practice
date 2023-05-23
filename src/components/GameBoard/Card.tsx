import { Player } from '../../utils/type';

type Props = {
  key: number;
  player: Player;
  onCardClick: () => void;
};

export const Card = ({ key, player, onCardClick }: Props) => {
  return (
    <div className="card" key={key} onClick={onCardClick}>
      <div className="playerName">{player.name}</div>
      <div className="playerNum">{player.playerNum}</div>
    </div>
  );
};
