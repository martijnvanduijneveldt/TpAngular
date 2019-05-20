import { Pokemon } from './Pokemon';

describe('Create pokemon', () => {

  it('Should create a pokemon', () => {
    const pokemon = new Pokemon("MyPokemon");
    expect(pokemon.name).toBe("MyPokemon");
  });

});