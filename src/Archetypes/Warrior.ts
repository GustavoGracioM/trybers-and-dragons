import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static createdInstancesCount = 0;
  
  constructor(name: string) {
    super(name);
    Warrior.createdInstancesCount += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Warrior.createdInstancesCount;
  }
}