import gradient_award_game from "@/assets/gradient-award-game.png"
import raspberry_pi from "@/assets/raspberry-pi.png"
import joss_dog from "@/assets/joss-dog.png"

import { Badge } from "@/components/global/badge";
import RetroGame from "@/features/retro";

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function OurAwards() {
    const [isMuted, setIsMuted] = useState(true);

    return  <div className="w-full ">

            <div className="flex flex-col gap-3 p-10 justify-center items-center text-center">
                <Badge text="our awards" />
                <h1 className="clamp-[text,17px,24px] leading-[29px] font-medium">We have already proven ourselves</h1>
                <p className="text-muted-foreground clamp-[text,14px,16px] leading-[20px]">We won the Gold Medal in the "On veut du gros pixel" challenge.</p>
            </div>

            <div className="w-full min-h-[625px] grid md:grid-cols-2 grid-cols-1 gap-8  ">
                <div className="w-full px-10 clamp-[pt,0,13]">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="clamp-[text,30px,48px] leading-[50px]">Ocean Protector</h1>
                        <p className="text-muted-foreground clamp-[text,16px,18px] leading-[27px] font-light">Play as a brave dolphin! Your mission is to protect marine life. Swim through deep waters, avoid falling polluting waste️, and catch as many fish as possible to increase your score. Hang in there, because the challenge gets faster every second!</p>
                    </div>

                    <div className="divide-y flex flex-col py-8">
                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="clamp-[text,16px,20px] leading-[30px]">Author</h1>
                            <div className="flex gap-2 items-center ">
                                <p className="clamp-[text,12px,18px] leading-[20px] text-muted-foreground">Jossua</p>
                                <img src={joss_dog} alt="Joss dog" className="size-8" />
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="clamp-[text,16px,20px] leading-[30px]">Price</h1>
                            <div className="flex gap-2 items-center ">
                                <p className="clamp-[text,12px,18px] leading-[20px] text-muted-foreground">Kit Starter Raspberry Pi 5 Recalbox 2eme</p>

                                <img src={raspberry_pi} alt="Joss dog" className="size-8" />
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="clamp-[text,16px,20px] leading-[30px]">Theme</h1>
                            <p className="clamp-[text,12px,18px] leading-[20px] text-muted-foreground">Add a retro touch to your productions !</p>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="clamp-[text,16px,20px] leading-[30px]">Number of teams that participated</h1>
                            <p className="clamp-[text,12px,18px] leading-[20px] text-muted-foreground">163</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full ">
                    <img src={gradient_award_game} alt="Gradient" className="size-full" />
                  
                    <div className="absolute size-full flex items-center  justify-center top-0 left-0">
                        <div 
                            className="w-[271px] h-[361px] backdrop-blur-[11px]"
                            style={{
                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
                                boxShadow: '0 8px 34px -3px rgba(18, 29, 31, 0.65)'
                            }}
                        >
                            <RetroGame isMuted={isMuted} />
                        </div>
                    </div>

                    <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="absolute bottom-5 right-5 bg-background/20 backdrop-blur px-3 py-1 rounded-full hover:bg-background/30 transition-colors cursor-pointer"
                    >
                        {isMuted ? (
                            <VolumeX className="text-white size-5" />
                        ) : (
                            <Volume2 className="text-white size-5" />
                        )}
                    </button>
                </div>

            </div>
        </div>
}