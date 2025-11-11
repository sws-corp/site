import React from "react";
import { DIFFICULTY_TIERS } from "../constants";

interface GameHUDProps {
  score: number;
  currentTierDisplay: number;
}

export const GameHUD: React.FC<GameHUDProps> = ({ score, currentTierDisplay }) => {
  return (
    <div className="flex flex-col items-center gap-1 py-2 w-full">
      <div className="flex items-center justify-center gap-2 text-white text-[12px]">
        <p className="font-medium">Score: {score}</p>
        {currentTierDisplay > 0 && (
          <>
            <div className="h-2.5 w-[1px] bg-white/30" />
            <p className="text-[11px] text-white/70">
              Lvl {DIFFICULTY_TIERS.findIndex((t) => t.score === currentTierDisplay) + 1}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
