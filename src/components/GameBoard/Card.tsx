import { Player } from '../../utils/type';
import '../../styles/components/GameBoard/Card.css';

type Props = {
  player: Player;
  onCardClick: (id: number) => void;
};

export const Card = ({ player, onCardClick }: Props) => {
  return (
    <div
      className={`card ${!player.card?.isUp ? null : 'flip'}`}
      onClick={() => onCardClick(player.id!)}
    >
      <div className="down">
        <div className="playerId">{player.id!}</div>
        <div className="playerName">{player.name}</div>
      </div>
      <div className="up">
        <div className="playerNum">{player.card?.playerNum}</div>
      </div>
    </div>
  );
};
