import Navigation from "@/features/landing/layout/navigation"
import { Badge } from "@/components/global/badge"
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/shadcn/button";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/global/theme-toggle";
import { useTheme } from "@/hooks/use-theme";

export default function Hero() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const title = t('landing.title');
    
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015,
                delayChildren: 0.1
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98] as const
            }
        }
    };

    const headerClass = theme === 'dark' 
        ? "bg-background h-[100vh] w-screen relative left-[50%] right-[50%] -mx-[50vw] overflow-clip"
        : "bg-[radial-gradient(circle_at_top,_var(--background)_0%,_#e0ecff_60%)] sm:bg-[radial-gradient(ellipse_at_top,_var(--background)_0%,_var(--background)_20%,_#e0ecff_100%)] h-[100vh] w-screen relative left-[50%] right-[50%] -mx-[50vw] overflow-clip";

    return (
        <header className={headerClass}>
            <div className="relative h-full w-full md:px-[80px] px-4 flex flex-col gap-16 md:gap-24 lg:gap-32" >
                <Navigation />
                <div className="flex w-full h-screen justify-center items-center text-center flex-col gap-5 max-w-[85%] md:max-w-[500px] lg:max-w-[600px] mx-auto pb-8 relative z-10 mb-30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge text={t('landing.caps')} />
                    </motion.div>
                    
                    <motion.h1 
                        className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split('').map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    
                    <motion.p 
                        className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {t('landing.subtitle')}
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button onClick={scrollToContent} className="rounded-full py-2 px-4 cursor-pointer">{t('landing.button-learn')}</Button>
                        <ThemeToggle />
                        
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[80vh] w-full bg-[url('/images/landing/herobg.png')] bg-no-repeat bg-bottom bg-cover" />
            </div>
        </header>
    )
}