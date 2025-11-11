import { Badge } from "@/components/global/badge"
import globe from "@/assets/globe.svg"

export function TeamMemberCard({ name, description }: { name: string, description: string }) {
    return <div className=" flex-1 flex items-center justify-center gap-1 flex-col">
        <h1 className="text-[24px] font-medium">{name}</h1>
        <p className="text-muted-foreground text-[16px]">{description}</p>
    </div>
}


export function Team() {
    return <>

        <div className="w-full flex justify-between md:flex-row flex-col">
            <div className="flex flex-col items-start p-8 gap-3">
                <Badge text="The team" />
                <h1 className="text-[24px] leading-[29px] font-medium">Découvrez l'équipe SWS</h1>
                <p className="text-muted-foreground text-[16px] leading-[20px]">Une équipe de professionnels</p>
            </div>

            <div className=" flex items-end  flex-1 justify-end   ">
            <img src={globe} alt="Globe" className="clamp-[h,250px,304px]  " />

            </div>
        </div>

        <div className="clamp-[h,624px,156px] w-full lg:divide-x lg:divide-y-0 divide-y  grid lg:grid-cols-4 grid-cols-1 ">
            <TeamMemberCard name="Rémy" description="Chief Operating Officer" />
            <TeamMemberCard name="Jossua" description="Chief Operating Officer" />
            <TeamMemberCard name="Thomas" description="Chief Operating Officer" />
            <TeamMemberCard name="Kadir" description="Chief Operating Officer" />
        </div>
    </>
}