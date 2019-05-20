import { Pokemon } from './Pokemon';
import { Battle } from './Battle';

describe('Create Battle', () => {

  it('Get fist attacker', () => {
    // Infos from pokeapi
    const pika = new Pokemon("Pikachu", 90);
    const secondPokemon = new Pokemon("Ditto", 48);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.getFirstAttacker()).toBe(pika);

    const battle2 = new Battle(secondPokemon, pika);
    expect(battle2.getFirstAttacker()).toBe(pika);
  });

});