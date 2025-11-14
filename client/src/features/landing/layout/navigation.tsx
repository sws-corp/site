
import { useState, useEffect } from "react";
import CountdownButton from "../components/countdown/countdown-event"
import { useTranslation } from 'react-i18next';

export default function Navigation(){
    const { t } = useTranslation();
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const nightInfoEnd = new Date("2025-12-05T08:04:00");
    const [isNightInfo] = useState(nightInfoEnd > new Date());

    useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

    return(
        <nav className={`bg-gradient-to-b from-white/50 to-white/10 w-full flex md:flex-row pt-1 flex-col fixed left-0 z-50 md:px-5  ${show ? "translate-y-0" : "-translate-y-full"}`}>
            <div className={`${active ? "bg-white" : ""} w-full items-center flex transition-500`}>
                <div className="w-full flex">
                    <a href="/"><img src="/svg/logo-sws.svg" alt="logo sws" className="p-4 w-[120px]"/></a>
                </div>
                <div className="w-full flex justify-end md:hidden">
                    <button onClick={() => setActive(!active)}className="px-4 py-2"><img src="/svg/menu.svg"/></button>
                </div>
            </div>
            <div className={`${active ? "flex" : "hidden"} w-full flex-col gap-[40px] bg-white rounded py-5 px-5 md:flex md:flex-row md:items-center md:justify-center md:bg-transparent md:bg-none transition-500 md:text-xl`}>                
                <a href="#">{t('landing.nav.team')}</a>
                <a href="#">{t('landing.nav.contest')}</a>
                <a href="#">{t('landing.nav.mission')}</a>
                <a href="#">{t('landing.nav.blog')}</a>
                <a href="#">{t('landing.nav.contact')}</a>
                <div className="w-full md:flex justify-end items-center md:hidden">
                    {isNightInfo && <CountdownButton />}
                </div>
            </div>
            <div className="w-full hidden md:flex justify-end items-center">
                {isNightInfo && <CountdownButton />}
            </div>
        </nav>
    )
}