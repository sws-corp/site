import CountdownButton from "./countdown/countdown-event"
import { useTranslation } from 'react-i18next';
export default function Nav(){
    const { t } = useTranslation();
    return(
        <nav className="w-full flex flex-row pt-1">
            <div className="w-full items-center flex">
                <a href="/"><img src="/svg/logo-sws.svg" alt="logo sws" className="p-4 w-[120px]"/></a>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-[40px]">
                <a href="#">{t('landing.nav.team')}</a>
                <a href="#">{t('landing.nav.contest')}</a>
                <a href="#">{t('landing.nav.mission')}</a>
                <a href="#">{t('landing.nav.blog')}</a>
                <a href="#">{t('landing.nav.contact')}</a>
            </div>
            <div className="w-full flex justify-end items-center">
                <CountdownButton/>
            </div>
        </nav>
    )
}