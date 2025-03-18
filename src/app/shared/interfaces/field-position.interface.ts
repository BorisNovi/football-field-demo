import { IPlayer } from './player.interface';

export interface IFieldPosition {
  id: string;
  x: number;
  y: number;
  players: IPlayer[];
}