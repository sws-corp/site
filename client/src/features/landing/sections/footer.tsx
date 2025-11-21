import { useTranslation } from 'react-i18next';

export default function Footer(){
    const { t } = useTranslation();
    return(
        <footer className="w-full flex flex-col my-10 px-15 gap-5">
            <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
                <div className="flex flex-col gap-2 w-full md:w-[70%]">
                    <a className='hover:opacity-60 transition duration-500' href="/">
                        <h2 className='text-2xl font-medium '>Smart World Solutions</h2>
                    </a>
                    <h3>{t('footer.slogan')}</h3>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-5 md:gap-10'>
                    <div className="flex flex-col w-full gap-2">
                        <h4 className='text-xl font-medium mb-2'>{t('footer.sections')}</h4>
                        <a className='hover:opacity-60 transition duration-500' href='#team'><p>{t('footer.team')}</p></a>
                        <a className='hover:opacity-60 transition duration-500' href='#awards'><p>{t('footer.awards')}</p></a>
                        <a className='hover:opacity-60 transition duration-500' href='#nuit-et-jour'><p>{t('footer.nuit-et-jour')}</p></a>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <h4 className='text-xl font-medium mb-2'>{t('footer.links')}</h4>
                        <a className='hover:opacity-60 transition duration-500' href='https://2025.smartworldsolutions.tech/' target='_blank'><p>2025</p></a>
                        <a className='hover:opacity-60 transition duration-500' href='https://2024.smartworldsolutions.tech/' target='_blank'><p>2024</p></a>
                        <a className='hover:opacity-60 transition duration-500' href='https://smartworldsolutions.tech/elite' target='_blank'><p>SWS Elite</p></a>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <h4 className='text-xl font-medium mb-2'>{t('footer.social')}</h4>
                        <a className='hover:opacity-60 transition duration-500' href='https://www.instagram.com/sws.corp' target='_blank'><p>Instagram</p></a>
                        <a className='hover:opacity-60 transition duration-500' href='https://github.com/sws-corp' target='_blank'><p>Github</p></a>
                    </div>
                </div>
            </div>
            <div className='w-full pt-5 border-t'>
                <h2>{t('footer.rights')}</h2>
            </div>
        </footer>
    )
}