const Pokemon = require('./Pokemon');

test('Should create a pokemon', () => {
  const pokemon = new Pokemon("MyPokemon");
  expect(pokemon.name).toBe("MyPokemon");
});