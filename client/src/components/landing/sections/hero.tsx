import Nav from "@/components/landing/nav"
import Caps from "@/components/general/caps"
import { useTranslation } from 'react-i18next';
export default function Hero(){
    const { t } = useTranslation();
    return(
        <header className="bg-gradient-to-b from-transparent to-[#6FC6FF] h-screen w-full ">
            <div className="bg-[url('/images/landing/herobg.png')] bg-cover bg-center h-full w-full md:px-[80px] flex flex-col gap-[180px]" >
                <Nav/>
                <div className="flex w-full justify-center items-center text-center flex-col gap-5">
                    <Caps text={t('landing.caps')}/>
                    <h1 className="w-[80%] md:max-w-[60%] text-4xl font-medium">{t('landing.title')}</h1>
                    <h2 className="w-[80%] md:max-w-[60%] text-md text-gray-600">{t('landing.subtitle')}</h2>
                    <button className="bg-black text-white px-[15px] py-[5px] rounded-4xl">{t('landing.button-learn')}</button>
                </div>
            </div>
        </header>
    )
}