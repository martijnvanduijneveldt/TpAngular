import { Pokemon } from './Pokemon';

describe('Create pokemon', () => {

  it('Should create a pokemon', () => {
    // Infos from pokeapi
    const pokemon = new Pokemon("Pikachu", 90);

    expect(pokemon.name).toBe("Pikachu");
  });

});