import Race from './Race';

export default class Elf extends Race {
  private static createdInstancesCount = 0;
  private _maxLifePoints;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.createdInstancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.createdInstancesCount;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}