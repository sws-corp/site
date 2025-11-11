import { GameObject, Position } from "../types";
import { PLAYER_SIZE, OBJECT_SIZE } from "../constants";

export class CollisionSystem {
  checkCollision(obj: GameObject, player: Position): boolean {
    const objCenterX = obj.x + OBJECT_SIZE / 2;
    const objCenterY = obj.y + OBJECT_SIZE / 2;
    const playerCenterX = player.x;
    const playerCenterY = player.y;

    const dx = objCenterX - playerCenterX;
    const dy = objCenterY - playerCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < (PLAYER_SIZE / 2 + OBJECT_SIZE / 2) * 0.7;
  }
}
