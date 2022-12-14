export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  total_points: number;
  image?: HTMLImageElement;
}


export interface ISignUpData {
  firstName: string;
  emailAddress: string;
}