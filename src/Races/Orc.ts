import Race from './Race';

export default class Orc extends Race {
  private static createdInstancesCount = 0;
  private _maxLifePoints;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.createdInstancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.createdInstancesCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}