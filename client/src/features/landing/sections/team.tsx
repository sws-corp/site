import { Badge } from "@/components/global/badge"
import globe from "@/assets/globe.svg"
import close from "@/assets/close.gif"
import { useTranslation } from 'react-i18next';

export function TeamMemberCard({ name, description }: { name: string, description: string }) {
    return <div className=" flex-1 flex items-center justify-center gap-1 flex-col">
        <h1 className="text-[24px] font-medium">{name}</h1>
        <p className="text-muted-foreground text-[16px]">{description}</p>
    </div>
}

export function ThomasCard({ name, description, gif }: { name: string, description: string, gif: string }) {
    return (
        <div className="flex-1 flex items-center justify-center gap-1 flex-col relative overflow-hidden group cursor-pointer">
            <h1 className="text-[24px] font-medium">{name}</h1>
            <p className="text-muted-foreground text-[16px]">{description}</p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <img 
                    src={gif} 
                    alt="GIF" 
                    className="w-full h-full object-cover"
                    decoding="async"
                    draggable="false"
                />
            </div>
        </div>
    );
}


export function Team() {
    const { t } = useTranslation();
    return <>

        <div className="w-full flex justify-between md:flex-row flex-col border-b border-border">
            <div className="flex flex-col items-start p-8 gap-3">
                <Badge text={t('landing.team.badge')} />
                <h1 className="text-[24px] leading-[29px] font-medium">{t('landing.team.title')}</h1>
                <p className="text-muted-foreground text-[16px] leading-[20px]">{t('landing.team.subtitle')}</p>
            </div>

            <div className=" flex items-end  flex-1 justify-end   ">
            <img src={globe} alt="Globe" className="clamp-[h,250px,304px]" draggable="false" />

            </div>
        </div>

        <div className="clamp-[h,624px,156px] border-border divide-border w-full lg:divide-x lg:divide-y-0 divide-y  grid lg:grid-cols-4 grid-cols-1 ">
            <TeamMemberCard name="Rémy" description={t('landing.team.members.remy.role')} />
            <TeamMemberCard name="Jossua" description={t('landing.team.members.jossua.role')} />
            <ThomasCard name="Thomas" description={t('landing.team.members.thomas.role')} gif={close} />
            <TeamMemberCard name="Kadir" description={t('landing.team.members.kadir.role')} />
        </div>
    </>
}