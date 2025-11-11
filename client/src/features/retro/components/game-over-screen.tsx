import React from "react";

interface GameOverScreenProps {
  score: number;
  onRetry: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRetry }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-white w-full px-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[24px] font-medium leading-[30px]">Game Over</h2>
        <div className="h-[1px] w-12 bg-white/30" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-[12px] leading-[16px] text-white/70">Final Score</p>
        <p className="text-[36px] leading-[40px] font-medium">{score}</p>
      </div>

      <button
        onClick={onRetry}
        className="uppercase text-[11px] leading-none font-medium tracking-wide px-5 py-2.5 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-200"
      >
        Play Again
      </button>
    </div>
  );
};
