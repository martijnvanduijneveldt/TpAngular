import { Pokemon } from './Pokemon';
import { expect } from 'chai';
import 'mocha';

describe('Create pokemon', () => {

  it('Should create a pokemon', () => {
    const pokemon = new Pokemon("MyPokemon");
    expect(pokemon.name).to.equal("MyPokemon");
  });

});