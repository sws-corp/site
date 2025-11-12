import { Button } from "@/components/shadcn/button";
import github_logo from "@/assets/github.png"
import { useTranslation } from 'react-i18next';


export function GithubCTA() {
    const { t } = useTranslation();
    
    return <div className="w-full flex gap-70 py-14 px-15 select-none border-t border-border">
       
        <div className="flex-1 flex items-start gap-6 flex-col">
            <h1 className="text-[32px] leading-[33px] font-medium">{t('landing.github.title')}</h1>
            <p className="text-muted-foreground text-[18px] leading-[27px]">{t('landing.github.description')}</p>
            <Button 
                variant={"secondary"} 
                className="rounded-full p-5 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                onClick={() => window.open('https://github.com/sws-corp/nuit-et-jour', '_blank', 'noopener,noreferrer')}
            >
                {t('landing.github.button')}
            </Button>
        </div>

        <div className="hidden lg:block">
                <img src={github_logo} alt="Github" draggable="false" />
        </div>
    </div>
}