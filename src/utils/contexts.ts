import { createContext } from 'react';
import { GamePhase } from './type';

export const GamePhaseContext = createContext(GamePhase.setting);
