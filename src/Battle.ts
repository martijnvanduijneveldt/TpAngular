import { Pokemon } from './Pokemon';

export class Battle {
  private readonly pokemon1: Pokemon;
  private readonly pokemon2: Pokemon;

  constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  getFirstAttacker() {
    return this.pokemon1.speed >= this.pokemon2.speed ? this.pokemon1 : this.pokemon2;
  }
}