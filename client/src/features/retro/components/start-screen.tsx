import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-white w-full px-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[18px] font-medium leading-[24px]">Ocean Protector</h2>
        <div className="h-[1px] w-10 bg-white/30" />
      </div>

      <div className="flex flex-col gap-1.5 text-center text-[11px] leading-[16px] text-white/70">
        <p>🖱️ Mouse to move</p>
        <p>⌨️ Arrow keys ← →</p>
        <p>📱 Swipe on mobile</p>
      </div>

      <button
        onClick={onStart}
        className="uppercase text-[11px] leading-none font-medium tracking-wide px-5 py-2.5 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-200"
      >
        Start Game
      </button>
    </div>
  );
};
