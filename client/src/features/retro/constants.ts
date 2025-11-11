export const CANVAS_WIDTH = 271;
export const CANVAS_HEIGHT = 300;
export const PLAYER_SIZE = 40;
export const OBJECT_SIZE = 32;
export const INITIAL_SPAWN_RATE = 1200;
export const BASE_SPEED = 1.1;
export const PLAYER_SPEED = 8;
export const PLAYER_FRICTION = 0.85;
export const LANE_COUNT = 6;

export const DIFFICULTY_TIERS = [
  { score: 0, speed: 1.1, spawnRate: 1200 },
  { score: 10, speed: 1.25, spawnRate: 1125 },
  { score: 20, speed: 1.4, spawnRate: 1040 },
  { score: 35, speed: 1.6, spawnRate: 950 },
  { score: 55, speed: 1.8, spawnRate: 870 },
  { score: 80, speed: 2.05, spawnRate: 800 },
  { score: 110, speed: 2.3, spawnRate: 720 },
  { score: 150, speed: 2.6, spawnRate: 660 },
  { score: 200, speed: 2.9, spawnRate: 600 },
  { score: 260, speed: 3.2, spawnRate: 560 },
  { score: 320, speed: 3.4, spawnRate: 520 },
];
