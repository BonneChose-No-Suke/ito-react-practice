import { Player } from '../../utils/type';

type Props = {
  players: Player[];
};

const GameBoard = ({ players }: Props) => {
  return (
    <section>
      <div className="cardField">
        {players.map((player, key) => (
          <div className="card" key={key}>
            <div className="playerName">{player.name}</div>
            <div className="playerNum">{player.playerNum}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameBoard;
