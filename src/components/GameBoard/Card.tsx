import { Player } from '../../utils/type';
import '../../styles/components/GameBoard/Card.css';

type Props = {
  player: Player;
  onCardClick: (id: number) => void;
};

export const Card = ({ player, onCardClick }: Props) => {
  return (
    <div className="card" onClick={() => onCardClick(player.id!)}>
      <div className={`down ${player.card?.isUp ? 'flip' : null}`}>
        <div className="playerId">{player.id!}</div>
        <div className="playerName">{player.name}</div>
      </div>
      <div className={`up ${player.card?.isUp ? 'flip' : null}`}>
        <div className="playerNum">{player.card?.playerNum}</div>
      </div>
    </div>
  );
};
