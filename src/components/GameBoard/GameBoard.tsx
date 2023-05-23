import { Player } from '../../utils/type';
import { Card } from './Card';
import { useCardFlip } from '../../hooks/useCardFlip';

type Props = {
  players: Player[];
};

const GameBoard = ({ players }: Props) => {
  const { flipCard } = useCardFlip(players);

  const cardClicked = (id: number) => {
    // カードのステータスを変更するHooksを呼び出す
    //consoleは後で消す
    flipCard(id);
    console.log(players);
  };

  return (
    <section>
      <div className="cardField">
        {players.map((player, key) => (
          <Card key={key} player={player} onCardClick={cardClicked} />
        ))}
      </div>
    </section>
  );
};

export default GameBoard;
