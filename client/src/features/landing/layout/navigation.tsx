
import { useState } from "react";
import CountdownButton from "../components/countdown/countdown-event"
import { useTranslation } from 'react-i18next';
import { LogoSWS } from "@/components/global/logo-sws";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation(){
    const { t } = useTranslation();
    const [active, setActive] = useState(false);
    const nightInfoEnd = new Date("2025-12-05T08:04:00");
    const [isNightInfo] = useState(nightInfoEnd > new Date());
    const [scrolled, setScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' && window.innerWidth >= 768);

    if (typeof window !== 'undefined') {
        window.onscroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.onresize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
    }

    return(
        <nav className={`w-full fixed left-0 z-50 transition-all duration-300 ease ${scrolled ? 'bg-background ' : active ? 'bg-background  md:bg-transparent md:border-b-0' : 'bg-transparent'}`}> 
            <div className={`w-full flex flex-col md:flex-row md:items-center md:px-5 transition-all duration-300 ${scrolled ? 'md:py-4' : 'md:py-5'}`}>
                <div className="w-full md:w-auto flex items-center justify-between pt-1 md:pt-0">
                    <a href="/" className="p-4 md:p-0 w-[120px]">
                        <LogoSWS className="text-foreground" />
                    </a>
                    <button 
                        onClick={() => setActive(!active)}
                        className="cursor-pointer w-10 h-10 relative flex items-center justify-center mr-4 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-5 relative flex items-center justify-center">
                            <div 
                                className={`absolute w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                                    active ? 'rotate-45' : '-translate-y-1.5'
                                }`}
                            />
                            <div 
                                className={`absolute w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                                    active ? '-rotate-45' : 'translate-y-1.5'
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {(active || isDesktop) && (
                        <motion.div 
                            initial={isDesktop ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full md:flex md:flex-row md:items-center md:flex-1 md:justify-center text-foreground md:text-md overflow-hidden"
                        >
                            <motion.div 
                                initial={isDesktop ? false : { y: -20 }}
                                animate={{ y: 0 }}
                                exit={{ y: -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex flex-col gap-[40px] py-5 px-5 md:py-0 md:px-0 md:flex-row md:gap-8"
                            >
                                <a href="#team" className="hover:text-muted-foreground transition-colors duration-200">{t('landing.nav.team')}</a>
                                <a href="/contest" className="hover:text-muted-foreground transition-colors duration-200">{t('landing.nav.contest')}</a>
                                <a href="#mission" className="hover:text-muted-foreground transition-colors duration-200">{t('landing.nav.mission')}</a>
                                <a href="/blog" className="hover:text-muted-foreground transition-colors duration-200">{t('landing.nav.blog')}</a>
                                <a href="#contact" className="hover:text-muted-foreground transition-colors duration-200">{t('landing.nav.contact')}</a>
                                <div className="w-full flex justify-end items-center gap-2 md:hidden">
                                    {isNightInfo && <CountdownButton />}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="hidden md:flex items-center gap-2">
                    {isNightInfo && <CountdownButton />}
                </div>
            </div>
        </nav>
    )
}