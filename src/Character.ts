import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get name(): string { return this._name; }
  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get maxLifePoints(): number { return this._maxLifePoints; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  static generateNumber(): number { return Math.floor(Math.random() * 10 + 1); }

  private takeDamage(attackPoints: number): void {
    if (attackPoints > this._defense) {
      this._lifePoints = this.lifePoints - attackPoints;
    }
  }

  private validationLifePoints(): void {
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
  }

  private validationMaxLifePoints(): void {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  public receiveDamage(attackPoints: number): number {
    this.takeDamage(attackPoints);
    this.validationLifePoints();
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this.validationMaxLifePoints();
    this._lifePoints = this._maxLifePoints;
  }

  public special(): void {
    console.log(`ATAQUE ESPECIAL DO ${this._name}`);
  }
}