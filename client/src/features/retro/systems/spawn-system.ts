import { GameState } from "../types";
import {
  CANVAS_WIDTH,
  LANE_COUNT,
  OBJECT_SIZE,
  DIFFICULTY_TIERS,
} from "../constants";

export class SpawnSystem {
  private debrisVariantCounter = 0;

  reset() {
    this.debrisVariantCounter = 0;
  }

  spawnWave(state: GameState): void {
    const laneWidth = CANVAS_WIDTH / LANE_COUNT;
    const baseSpeed = state.currentSpeed;
    const safeLane = Math.floor(Math.random() * LANE_COUNT);

    const tierIndex = DIFFICULTY_TIERS.reduce((acc, tier, index) => {
      return state.score >= tier.score ? index : acc;
    }, 0);

    const hazardTargetsByTier = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
    const hazardsToSpawn = Math.min(
      LANE_COUNT - 1,
      hazardTargetsByTier[Math.min(tierIndex, hazardTargetsByTier.length - 1)]
    );
    const extraFishAllowed = tierIndex >= 8 ? 2 : tierIndex >= 5 ? 1 : 0;

    const availableHazardLanes = Array.from({ length: LANE_COUNT }, (_, i) => i).filter(
      (lane) => lane !== safeLane
    );
    const hazards: number[] = [];

    while (hazards.length < hazardsToSpawn && availableHazardLanes.length > 0) {
      const pickIndex = Math.floor(Math.random() * availableHazardLanes.length);
      const lane = availableHazardLanes.splice(pickIndex, 1)[0];
      hazards.push(lane);
    }

    const occupiedLanes = new Set<number>();

    hazards.forEach((lane) => {
      occupiedLanes.add(lane);
      const x = laneWidth * lane + laneWidth / 2 - OBJECT_SIZE / 2;
      const variant = this.debrisVariantCounter % 2 === 0 ? "trash" : "bottle";
      this.debrisVariantCounter += 1;
      const speedVariation = (Math.random() - 0.5) * 0.3;
      state.obstacles.push({
        x: Math.max(0, Math.min(CANVAS_WIDTH - OBJECT_SIZE, x)),
        y: -OBJECT_SIZE,
        type: "debris",
        variant,
        speed: Math.max(0.65, baseSpeed + speedVariation),
      });
    });

    const fishLanes: number[] = [];
    const placeFish = (lane: number) => {
      const orderIndex = fishLanes.length;
      const x = laneWidth * lane + laneWidth / 2 - OBJECT_SIZE / 2;
      const verticalOffset = orderIndex * OBJECT_SIZE * 0.35;
      fishLanes.push(lane);
      occupiedLanes.add(lane);
      state.obstacles.push({
        x: Math.max(0, Math.min(CANVAS_WIDTH - OBJECT_SIZE, x)),
        y: -OBJECT_SIZE - verticalOffset,
        type: "food",
        speed: Math.max(0.6, baseSpeed * 0.85),
      });
    };

    const allowSafeLaneFish = tierIndex >= 2 || hazardsToSpawn >= LANE_COUNT - 1;
    if (allowSafeLaneFish && !occupiedLanes.has(safeLane)) {
      placeFish(safeLane);
    } else {
      occupiedLanes.add(safeLane);
    }

    const totalFishTarget = Math.max(1, 1 + extraFishAllowed);
    let fishRequired = Math.max(0, totalFishTarget - fishLanes.length);
    const fishCandidates = Array.from({ length: LANE_COUNT }, (_, i) => i).filter(
      (lane) => !occupiedLanes.has(lane)
    );

    while (fishRequired > 0 && fishCandidates.length > 0) {
      const pickIndex = Math.floor(Math.random() * fishCandidates.length);
      const lane = fishCandidates.splice(pickIndex, 1)[0];
      placeFish(lane);
      fishRequired -= 1;
    }

    if (fishLanes.length === 0) {
      placeFish(safeLane);
    }
  }
}
