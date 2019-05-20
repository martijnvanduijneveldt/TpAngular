import { Pokemon } from './Pokemon';

export class Battle {
  private readonly pokemon1: Pokemon;
  private readonly pokemon2: Pokemon;

  constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  getFirstAttacker(): Pokemon {
    return this.pokemon1.speed >= this.pokemon2.speed ? this.pokemon1 : this.pokemon2;
  }

  fight(): Pokemon {
    let activePokemon = this.getFirstAttacker();
    while (this.pokemon1.health > 0 && this.pokemon2.health > 0) {
      if (activePokemon === this.pokemon1) {
        this.pokemon1.attack(this.pokemon2);
        this.pokemon2.showHealth();
        activePokemon = this.pokemon2;
      } else if (activePokemon === this.pokemon2) {
        this.pokemon2.attack(this.pokemon1);
        this.pokemon1!.showHealth();
        activePokemon = this.pokemon1;
      }
    }
    return this.getWinner();
  }


  private getWinner(): Pokemon {
    return this.pokemon1.health >= 0 ? this.pokemon1 : this.pokemon2;
  }
}