import React, { useState, useEffect, useRef, useCallback } from "react";
import { GameState, ImageRefs } from "./types";
import { StartScreen } from "./components/start-screen";
import { GameOverScreen } from "./components/game-over-screen";
import { GameHUD } from "./components/game-hud";
import { SpawnSystem } from "./systems/spawn-system";
import { RenderSystem } from "./systems/render-system";
import { CollisionSystem } from "./systems/collision-system";
import { AudioSystem } from "./systems/audio-system";
import { DifficultySystem } from "./systems/difficulty-system";
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  INITIAL_SPAWN_RATE,
  BASE_SPEED,
  PLAYER_SPEED,
  PLAYER_FRICTION,
  PLAYER_SIZE,
} from "./constants";
import dolphinImg from "@/assets/retro/dolphin.png";
import fishImg from "@/assets/retro/fish.png";
import trashImg from "@/assets/retro/trash.png";
import bottleImg from "@/assets/retro/bottle.png";
import musicFile from "@/assets/retro/tududududududtulululu.mp3";
import bubbleFile from "@/assets/retro/bubble.mp3";
import deadFile from "@/assets/retro/dead.mp3";

interface RetroGameProps {
  isMuted?: boolean;
}

export const RetroGame: React.FC<RetroGameProps> = ({ isMuted: externalMuted = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef<GameState>({
    player: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50 },
    playerVelocity: 0,
    obstacles: [],
    score: 0,
    isGameOver: false,
    gameStarted: false,
    spawnRate: INITIAL_SPAWN_RATE,
    currentSpeed: BASE_SPEED,
    currentTier: 0,
  });

  const imagesRef = useRef<ImageRefs>({});
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastSpawnTimeRef = useRef<number>(0);
  const touchStartXRef = useRef<number>(0);
  const keysPressed = useRef<Set<string>>(new Set());
  const mouseXRef = useRef<number | null>(null);

  const spawnSystemRef = useRef(new SpawnSystem());
  const renderSystemRef = useRef(new RenderSystem());
  const collisionSystemRef = useRef(new CollisionSystem());
  const audioSystemRef = useRef(new AudioSystem());
  const difficultySystemRef = useRef(new DifficultySystem());

  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTierDisplay, setCurrentTierDisplay] = useState(0);

  useEffect(() => {
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    Promise.all([
      loadImage(dolphinImg),
      loadImage(fishImg),
      loadImage(trashImg),
      loadImage(bottleImg),
    ]).then(([dolphin, fish, trash, bottle]) => {
      imagesRef.current = { dolphin, fish, trash, bottle };
    });

    audioSystemRef.current.initialize(musicFile, bubbleFile, deadFile);
  }, []);

  useEffect(() => {
    if (externalMuted) {
      audioSystemRef.current.pauseMusic();
    } else if (gameStarted && !isGameOver) {
      audioSystemRef.current.playMusic();
    }
  }, [externalMuted, gameStarted, isGameOver]);

  const gameLoop = useCallback(
    (timestamp: number) => {
      const state = gameStateRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!ctx || !state.gameStarted || state.isGameOver) return;

      const tier = difficultySystemRef.current.getCurrentTier(state.score);
      if (tier.score !== state.currentTier) {
        state.currentSpeed = tier.speed;
        state.spawnRate = tier.spawnRate;
        state.currentTier = tier.score;
        setCurrentTierDisplay(tier.score);
      }

      state.player.x += state.playerVelocity;

      state.playerVelocity *= PLAYER_FRICTION;

      if (Math.abs(state.playerVelocity) < 0.1) {
        state.playerVelocity = 0;
      }

      state.player.x = Math.max(
        PLAYER_SIZE / 2,
        Math.min(CANVAS_WIDTH - PLAYER_SIZE / 2, state.player.x)
      );

      if (timestamp - lastSpawnTimeRef.current > state.spawnRate) {
        spawnSystemRef.current.spawnWave(state);
        lastSpawnTimeRef.current = timestamp;
      }

      state.obstacles = state.obstacles.filter((obj) => {
        obj.y += obj.speed;

        if (collisionSystemRef.current.checkCollision(obj, state.player)) {
          if (obj.type === "debris") {
            state.isGameOver = true;
            setIsGameOver(true);
            if (!externalMuted) {
              audioSystemRef.current.playDead();
            }
            audioSystemRef.current.pauseMusic();
            return false;
          } else {
            state.score += 1;
            setScore(state.score);
            if (!externalMuted) {
              audioSystemRef.current.playBubble();
            }
            return false;
          }
        }

        if (obj.y > CANVAS_HEIGHT) return false;

        return true;
      });

      renderSystemRef.current.render(ctx, state.player, state.obstacles, imagesRef.current);

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    },
    [externalMuted]
  );

  // Gestion de la souris
  useEffect(() => {
    if (!gameStarted || isGameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      mouseXRef.current = mouseX;

      const state = gameStateRef.current;
      const targetX = mouseX;
      const currentX = state.player.x;
      const diff = targetX - currentX;

      if (Math.abs(diff) > 5) {
        state.playerVelocity = diff * 0.15;
      }
    };

    const handleMouseLeave = () => {
      mouseXRef.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [gameStarted, isGameOver]);

  // Gestion du clavier
  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
      const state = gameStateRef.current;

      if (e.key === "ArrowLeft") {
        state.playerVelocity = -PLAYER_SPEED;
      } else if (e.key === "ArrowRight") {
        state.playerVelocity = PLAYER_SPEED;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameStarted, isGameOver]);

  // Gestion du tactile
  useEffect(() => {
    if (!gameStarted || isGameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - touchStartXRef.current;
      const state = gameStateRef.current;

      state.playerVelocity = deltaX * 0.8;

      touchStartXRef.current = touchX;
    };

    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gameStarted, isGameOver]);

  useEffect(() => {
    if (gameStarted && !isGameOver) {
      gameStateRef.current.gameStarted = true;
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameStarted, isGameOver, gameLoop]);

  const handleStart = () => {
    gameStateRef.current = {
      player: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50 },
      playerVelocity: 0,
      obstacles: [],
      score: 0,
      isGameOver: false,
      gameStarted: true,
      spawnRate: INITIAL_SPAWN_RATE,
      currentSpeed: BASE_SPEED,
      currentTier: 0,
    };
    lastSpawnTimeRef.current = 0;
    mouseXRef.current = null;
    spawnSystemRef.current.reset();
    setScore(0);
    setIsGameOver(false);
    setGameStarted(true);
    setCurrentTierDisplay(0);

    if (!externalMuted) {
      audioSystemRef.current.playMusic();
    }
  };

  const handleRetry = () => {
    handleStart();
  };

  return (
    <div className="flex flex-col items-center justify-center w-[271px] h-[361px] overflow-hidden">
      {!gameStarted ? (
        <StartScreen onStart={handleStart} />
      ) : isGameOver ? (
        <GameOverScreen score={score} onRetry={handleRetry} />
      ) : (
        <div className="flex flex-col items-center w-full h-full">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="touch-none flex-1"
            style={{ imageRendering: "pixelated" }}
          />
          <GameHUD score={score} currentTierDisplay={currentTierDisplay} />
        </div>
      )}
    </div>
  );
};

export default RetroGame;
