import { Pokemon } from './Pokemon';
import { Battle } from './Battle';

const pika = new Pokemon("Pikachu", 90, 35, 5);
const secondPokemon = new Pokemon("Bulbasaur", 45, 45, 4);

const battle = new Battle(pika, secondPokemon);
const winer = battle.fight();
console.log(`The winner is ${winer.name}`);