export interface Position {
  x: number;
  y: number;
}

export interface GameObject extends Position {
  type: "debris" | "food";
  speed: number;
  variant?: "trash" | "bottle";
}

export interface GameState {
  player: Position;
  playerVelocity: number;
  obstacles: GameObject[];
  score: number;
  isGameOver: boolean;
  gameStarted: boolean;
  spawnRate: number;
  currentSpeed: number;
  currentTier: number;
}

export interface AudioRefs {
  music?: HTMLAudioElement;
  bubble?: HTMLAudioElement;
  dead?: HTMLAudioElement;
}

export interface ImageRefs {
  dolphin?: HTMLImageElement;
  fish?: HTMLImageElement;
  trash?: HTMLImageElement;
  bottle?: HTMLImageElement;
}
