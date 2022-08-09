import Race from './Race';

export default class Dwarf extends Race {
  private static createdInstancesCount = 0;
  private _maxLifePoints;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.createdInstancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.createdInstancesCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}