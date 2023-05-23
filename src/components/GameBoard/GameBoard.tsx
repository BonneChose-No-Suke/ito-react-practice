import { Player } from '../../utils/type';
import { Card } from './Card';

type Props = {
  players: Player[];
};

const GameBoard = ({ players }: Props) => {
  const cardClicked = () => {
    // カードのステータスを変更するHooksを呼び出す
    //consoleは後で消す
    console.log('card clicked');
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
