import { createContext } from 'react';
import { GamePhase } from './type';

export const PlayerNumContext = createContext(6);
export const GamePhaseContext = createContext(GamePhase.setting);
