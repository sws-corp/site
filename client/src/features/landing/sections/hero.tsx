import Navigation from "@/features/landing/layout/navigation"
import { Badge } from "@/components/global/badge"
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/shadcn/button";

export default function Hero() {
    const { t } = useTranslation();
    return (
        <header className="bg-[radial-gradient(ellipse_at_top,_var(--background)_0%,_var(--background)_20%,_#e0ecff_100%)] h-[100vh] w-screen relative left-[50%] right-[50%] -mx-[50vw] overflow-clip">
            <div className="relative h-full w-full md:px-[80px] px-4 flex flex-col gap-16 md:gap-24 lg:gap-32" >
                <Navigation />
                <div className="flex w-full justify-center items-center text-center flex-col gap-5 max-w-[85%] md:max-w-[500px] lg:max-w-[600px] mx-auto pb-8 relative z-10">
                    <Badge text={t('landing.caps')} />
                    <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium">{t('landing.title')}</h1>
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-muted-foreground">{t('landing.subtitle')}</p>
                    <Button className="rounded-full py-6 px-7">{t('landing.button-learn')}</Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[80vh] w-full bg-[url('/images/landing/herobg.png')] bg-no-repeat bg-bottom bg-cover" />
            </div>
        </header>
    )
}