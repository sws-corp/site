import Navigation from "@/features/landing/layout/navigation"
import { Badge } from "@/components/global/badge"
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/shadcn/button";

export default function Hero() {
    const { t } = useTranslation();
    return (
        <header className="bg-[radial-gradient(ellipse_at_top,_var(--background)_0%,_var(--background)_20%,_#e0ecff_100%)] h-[80vh] w-full ">
            <div className="bg-[url('/images/landing/herobg.png')] bg-no-repeat  bg-bottom h-full w-full md:px-[80px] flex flex-col gap-[180px]" >
                <Navigation />
                <div className="flex w-full justify-center items-center text-center flex-col gap-5">
                    <Badge text={t('landing.caps')} />
                    <h1 className="text-[36pw] leading-[43px] text-4xl font-medium">{t('landing.title')}</h1>
                    <p className="text-[16px] leading-[24px]  whitespace-pre-wrap  text-muted-foreground">{t('landing.subtitle')}</p>
                    <Button className="rounded-full py-6 px-7">{t('landing.button-learn')}</Button>
                </div>
            </div>
        </header>
    )
}