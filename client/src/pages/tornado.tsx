
import globe from "@/assets/globe.svg"
import gradient_award_game from "@/assets/gradient-award-game.png"
import raspberry_pi from "@/assets/raspberry-pi.png"
import joss_dog from "@/assets/joss-dog.png"
import github_logo from "@/assets/github.png"

import { Volume2 } from "lucide-react"
import { Button } from "@/components/shadcn/button"

export function TeamMemberCard({ name, description }: { name: string, description: string }) {
    return <div className=" flex-1 flex items-center justify-center gap-1 flex-col">
        <h1 className="text-[24px] font-medium">{name}</h1>
        <p className="text-muted-foreground text-[16px]">{description}</p>
    </div>
}

export function Badge({ text }: { text: string }) {
    return <div className="uppercase px-3 py-1.5 border rounded-full text-[12px] leading-none">
        {text}
    </div>
}

export function Team() {
    return <>

        <div className="w-full flex justify-between ">
            <div className="flex flex-col items-start p-8 gap-3">
                <Badge text="The team" />
                <h1 className="text-[24px] leading-[29px] font-medium">Découvrez l'équipe SWS</h1>
                <p className="text-muted-foreground text-[16px] leading-[20px]">Une équipe de professionnels</p>
            </div>

            <img src={globe} alt="Globe" className="h-[304px]" />
        </div>

        <div className="h-[165px] w-full divide-x border-border grid grid-cols-4 ">
            <TeamMemberCard name="Rémy" description="Chief Operating Officer" />
            <TeamMemberCard name="Jossua" description="Chief Operating Officer" />
            <TeamMemberCard name="Thomas" description="Chief Operating Officer" />
            <TeamMemberCard name="Kadir" description="Chief Operating Officer" />
        </div>
    </>
}

export function OurAwards() {
    return  <div className="w-full ">

            <div className="flex flex-col gap-3 p-10 justify-center items-center">
                <Badge text="our awards" />
                <h1 className="text-[24px] leading-[29px] font-medium">We have already proven ourselves</h1>
                <p className="text-muted-foreground text-[16px] leading-[20px]">We won the Gold Medal in the “On veut du gros pixel” challenge.</p>
            </div>

            <div className="w-full h-[625px] grid grid-cols-2 gap-8 ">
                <div className="w-full px-10 pt-13">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-[48px] leading-[50px]">Ocean Protector</h1>
                        <p className="text-muted-foreground text-[18px] leading-[27px] font-light">Play as a brave dolphin! Your mission is to protect marine life. Swim through deep waters, avoid falling polluting waste️, and catch as many fish as possible to increase your score. Hang in there, because the challenge gets faster every second!</p>
                    </div>

                    <div className="divide-y flex flex-col py-8">
                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="text-[20px] leading-[30px]">Author</h1>
                            <div className="flex gap-2 items-center ">
                                <p className="text-[18px] leading-[20px] text-muted-foreground">Jossua</p>
                                <img src={joss_dog} alt="Joss dog" className="size-8" />
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="text-[20px] leading-[30px]">Price</h1>
                            <div className="flex gap-2 items-center ">
                                <p className="text-[18px] leading-[20px] text-muted-foreground">Kit Starter Raspberry Pi 5 Recalbox 2eme</p>

                                <img src={raspberry_pi} alt="Joss dog" className="size-8" />
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="text-[20px] leading-[30px]">Theme</h1>
                            <p className="text-[18px] leading-[20px] text-muted-foreground">Add a retro touch to your productions !</p>
                        </div>

                        <div className="w-full flex justify-between items-center py-[21px]">
                            <h1 className="text-[20px] leading-[30px]">Number of teams that participated</h1>
                            <p className="text-[18px] leading-[20px] text-muted-foreground">163</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full ">
                    <img src={gradient_award_game} alt="Gradient" className="size-full" />
                  
                    <div className="absolute size-full flex items-center  justify-center top-0 left-0">
                        <div className="w-[271px] h-[361px] bg-background/30 backdrop-blur rounded-lg">
                            {/* Le jeu ici @tsu */}
                        </div>
                    </div>

                    <div className="absolute bottom-5 right-5 bg-background/20 backdrop-blur  px-3 py-1 rounded-full ">
                        <Volume2 className="text-white size-5" />
                    </div>
                </div>

            </div>
        </div>
}

export function GithubCTA() {
    return <div className="w-full flex gap-70 py-14 px-15  ">
       
        <div className="flex-1 flex items-start gap-6 flex-col">
            <h1 className="text-[32px] leading-[33px] font-medium">Checkout the repo !</h1>
            <p className="text-muted-foreground text-[18px] leading-[27px]">The repo includes a fully configured stack using Bun, Hono, Vite, and React optimized for speed and simplicity. Just clone, install, and run!</p>
            <Button variant={"secondary"} className="rounded-full p-5">Fork on Github</Button>
        </div>

        <div>
                <img src={github_logo} alt="Github" />
        </div>
    </div>
}

export function Band() {
    return <div className="h-[80px] w-full divide-x border-border flex ">
        {[...Array(100)].map((index) => <div key={index} className="flex-1 " />)}
    </div>
}

export function TornadoTemporaire() {

    return (
        <div className="my-20 max-w-[1280px] mx-auto  flex flex-col items-center  border divide-y divide-border">
            <Team />
            <Band />
            <OurAwards />
            <Band />
            <GithubCTA />
            <Band />
        </div>
    );
}

