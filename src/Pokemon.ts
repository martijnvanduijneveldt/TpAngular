export class Pokemon {
  name: string;
  speed: number;
  damage: number;
  health: number;

  constructor(name: string, speed: number, health: number, attack: number) {
    this.name = name;
    this.speed = speed;
    this.health = health;
    this.damage = attack;
  }

  public attack(otherPokemon: Pokemon) {
    const damageDealt = otherPokemon.receiveDamage(this.damage);
    console.log(this.name + " attacks " + otherPokemon.name + " and deals " + damageDealt + "damage");
  }

  public receiveDamage(damage: number): number {
    const damageDealt = this.health > damage ? damage : this.health;
    this.health -= damageDealt;
    return damageDealt;
  }

  public showHealth(): void {
    console.log(`${this.name} has ${this.health} health`);
  }
}