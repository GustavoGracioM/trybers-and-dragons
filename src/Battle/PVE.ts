import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private round: number;
  constructor(
    player: Character | Fighter,
    private enemies: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this.round = 0;
  }

  private pveRound(): void {
    if (this.enemies[this.round].lifePoints === -1) {
      this.round += 1;
    } else {
      this.player.attack(this.enemies[this.round]);
      this.enemies[this.round].attack(this.player);
    }
  }

  private annoyingEnemies(): boolean {
    if (this.enemies[this.enemies.length - 1].lifePoints === -1) return true;
    return false;
  }

  public fight(): number {
    while (
      this.player.lifePoints >= 1
      && this.round <= this.enemies.length - 1
    ) {
      if (this.annoyingEnemies()) break;
      this.pveRound();
    }
    return super.fight();
  }
}