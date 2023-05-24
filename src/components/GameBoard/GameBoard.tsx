import { Player } from '../../utils/type';
import { Card } from './Card';

type Props = {
  players: Player[];
  onCardClick: (index: number) => void;
};

const GameBoard = ({ players, onCardClick }: Props) => {
  return (
    <section>
      <div className="cardField">
        {players.map((player, key) => (
          <Card key={key} player={player} onCardClick={onCardClick} />
        ))}
      </div>
    </section>
  );
};

export default GameBoard;
