import { useState, useEffect } from "react";
import CountdownButton from "../components/countdown/countdown-event";
import { useTranslation } from 'react-i18next';
import { useScroll, motion } from 'motion/react';
import { useWindowSize } from "@/hooks/use-window-size";

export default function Navigation() {
    const { t } = useTranslation();
    const [active, setActive] = useState(false);

    const isNightInfo = new Date("2025-12-05T08:04:00") > new Date();

    const { scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    const [width] = useWindowSize();
    const isMobile = width < 1000;

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            setScrolled(v > 0.3);
        });
    }, [scrollYProgress]);

    const desktopAnim = {
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        backgroundColor: scrolled
            ? "color-mix(in srgb, var(--primary) 10%, transparent)"
            : "rgb(255,255,255,0)",
        width: scrolled ? "1000px" : "100vw",
        marginTop: scrolled ? "1rem" : "0rem",
        borderRadius: scrolled ? "90px" : "0px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: scrolled ? "0px" : "10px",
    };

    const mobileAnim = {
        backgroundColor: scrolled || active
            ? "var(--background)"
            : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        width: "100vw",
        marginTop: 0,
        borderRadius: 0,
        paddingTop: "0px",
    };

    return (
        <motion.div
            animate={isMobile ? mobileAnim : desktopAnim}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-row fixed top-0 z-50 mx-auto items-center"
            style={{
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            <div className="w-full items-center flex">
                <div className="w-full flex">
                    <a href="/"><img src="/svg/logo-sws.svg" alt="logo sws" className="p-4 w-[120px]" /></a>
                </div>
                {isMobile && (
                    <div className="flex justify-end">
                        <button onClick={() => setActive(!active)} className="px-4 py-2">
                            <img src="/svg/menu.svg" />
                        </button>
                    </div>
                )}
            </div>

            <motion.div
                className={`${isMobile && active ? "absolute top-full left-0 w-full bg-background rounded-b-2xl border-b p-4 flex flex-col gap-4" : " flex gap-4"}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: (active || !isMobile) ? 1 : 0, y: (active || !isMobile) ? 0 : -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {(active || !isMobile) && (
                    <>
                        <a href="#">{t('landing.nav.team')}</a>
                        <a href="#">{t('landing.nav.contest')}</a>
                        <a href="#">{t('landing.nav.mission')}</a>
                        <a href="#">{t('landing.nav.blog')}</a>
                        <a href="#">{t('landing.nav.contact')}</a>
                    </>
                )}
                {isNightInfo && isMobile && active && <CountdownButton />}
            </motion.div>

            {!isMobile && (
                <div className="w-full flex justify-end items-center">
                    {isNightInfo && <CountdownButton />}
                </div>
            )}



        </motion.div>
    );
}
