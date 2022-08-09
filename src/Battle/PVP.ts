import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private player1: Fighter | Character,
    private player2: Fighter | Character,
  ) {
    super(player1);
  }

  private checkLifePoints(): boolean {
    if (this.player1.lifePoints === -1) return true;
    if (this.player2.lifePoints === -1) return true;
    return false;
  }

  public fight(): number {
    while (this.player1.lifePoints >= 1 && this.player2.lifePoints >= 1) {
      if (this.checkLifePoints()) break;
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return super.fight();
  }
}
