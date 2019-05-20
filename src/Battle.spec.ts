import { Pokemon } from './Pokemon';
import { Battle } from './Battle';

describe('Create Battle', () => {

  it('Get fist attacker', () => {
    // Infos from pokeapi
    const pika = new Pokemon("Pikachu", 90, 35, 55);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 49);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.getFirstAttacker()).toBe(pika);

    const battle2 = new Battle(secondPokemon, pika);
    expect(battle2.getFirstAttacker()).toBe(pika);
  });

  it("Battle",()=>{
    const pika = new Pokemon("Pikachu", 90, 35, 55);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 49);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.fight()).toBe(pika);
  })

  it("Battle slowly",()=>{
    const pika = new Pokemon("Pikachu", 90, 35, 5);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 4);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.fight()).toBe(pika);
  })

});