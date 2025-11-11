import { GameObject, Position, ImageRefs } from "../types";
import { CANVAS_WIDTH, CANVAS_HEIGHT, PLAYER_SIZE, OBJECT_SIZE } from "../constants";

export class RenderSystem {
  render(
    ctx: CanvasRenderingContext2D,
    player: Position,
    obstacles: GameObject[],
    images: ImageRefs
  ): void {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Dessiner les obstacles
    obstacles.forEach((obj) => {
      if (obj.type === "food") {
        const img = images.fish;
        if (img) {
          ctx.drawImage(img, obj.x, obj.y, OBJECT_SIZE, OBJECT_SIZE);
        }
      } else {
        const img = obj.variant === "bottle" ? images.bottle : images.trash;
        if (img) {
          ctx.drawImage(img, obj.x, obj.y, OBJECT_SIZE, OBJECT_SIZE);
        }
      }
    });

    // Dessiner le joueur
    if (images.dolphin) {
      ctx.drawImage(
        images.dolphin,
        player.x - PLAYER_SIZE / 2,
        player.y - PLAYER_SIZE / 2,
        PLAYER_SIZE,
        PLAYER_SIZE
      );
    }
  }
}
