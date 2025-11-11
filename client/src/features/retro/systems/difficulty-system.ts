import { DIFFICULTY_TIERS } from "../constants";

export class DifficultySystem {
  getCurrentTier(score: number) {
    for (let i = DIFFICULTY_TIERS.length - 1; i >= 0; i--) {
      if (score >= DIFFICULTY_TIERS[i].score) {
        return DIFFICULTY_TIERS[i];
      }
    }
    return DIFFICULTY_TIERS[0];
  }
}
