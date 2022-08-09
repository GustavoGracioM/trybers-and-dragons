import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static createdInstancesCount = 0;
  
  constructor(name: string) {
    super(name);
    Necromancer.createdInstancesCount += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Necromancer.createdInstancesCount;
  }
}