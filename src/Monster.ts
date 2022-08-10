import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  private validationLifePoints(): void {
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    this.validationLifePoints();
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}