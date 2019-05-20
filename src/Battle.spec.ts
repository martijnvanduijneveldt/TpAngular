import { Pokemon } from './Pokemon';
import { Battle } from './Battle';

describe('Create Battle', () => {

  it('Get fist attacker', () => {
    // Infos from pokeapi
    const pika = new Pokemon("Pikachu", 90, 35, 55);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 49);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.getFirstAttacker()).toBe(pika);
  });

  it('Get fist attacker - same speed', () => {
    // Infos from pokeapi
    const firstPokemon = new Pokemon("FakePoke1", 45, 10, 10);
    const secondPokemon = new Pokemon("FakePoke2", 45, 10, 10);

    let battle = new Battle(firstPokemon, secondPokemon);
    expect(battle.getFirstAttacker(() => 0.6)).toBe(firstPokemon);

    battle = new Battle(firstPokemon, secondPokemon);
    expect(battle.getFirstAttacker(() => 0.5)).toBe(secondPokemon);
  });


  it("Battle", () => {
    const pika = new Pokemon("Pikachu", 90, 35, 55);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 49);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.fight()).toBe(pika);
  });

  it("Battle slowly", () => {
    const pika = new Pokemon("Pikachu", 90, 35, 5);
    const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 4);

    const battle = new Battle(pika, secondPokemon);
    expect(battle.fight()).toBe(pika);
  })

});