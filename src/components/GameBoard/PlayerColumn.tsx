import { Player } from '../../utils/type';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type Props = {
  player: Player;
  index: number;
  onDeletePlayer: (index: number) => void;
  onChangePlayerName: (index: number, name: string) => void;
};

export const PlayerColumn = ({
  player,
  index,
  onDeletePlayer,
  onChangePlayerName,
}: Props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangePlayerName(index, e.target.value);
  };

  return (
    <div className="playerColumn">
      <input type="text" value={player.name} onChange={handleNameChange} />
      <AiOutlineCloseCircle onClick={() => onDeletePlayer(index)} />
    </div>
  );
};
