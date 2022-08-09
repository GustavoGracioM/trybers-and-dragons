import Race from './Race';

export default class Halfling extends Race {
  private static createdInstancesCount = 0;
  private _maxLifePoints;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.createdInstancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.createdInstancesCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}