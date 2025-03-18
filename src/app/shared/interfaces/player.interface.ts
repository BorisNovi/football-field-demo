export interface IPlayer {
  id: number;
  number: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  position?: { x: number; y: number };
}
