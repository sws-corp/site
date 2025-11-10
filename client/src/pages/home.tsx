import logo from "@/assets/n&j.svg";
import { useTranslation } from 'react-i18next';
import { useLanguageRouter } from '@/hooks/use-language-router';
import { Link } from 'react-router';

function Home() {
	const { t } = useTranslation();
	const { currentLanguage, changeLanguage } = useLanguageRouter();

	return (
		<div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center min-h-screen">
			<a
				href="https://github.com/sws-corp/nuit-et-jour"
				target="_blank"
				rel="noopener"
			>
				<img
					src={logo}
					className="w-16 h-16 cursor-pointer"
					alt="nuit et jour logo"
				/>
			</a>
			<h1 className="text-5xl font-black">Nuit et Jour</h1>
			<p>{t('welcome')}</p>
			<p>{t('greeting', { name: 'Michel' })}</p>
			<div className="flex items-center gap-2">
				<button 
					className={`px-3 py-1 rounded ${currentLanguage === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
					onClick={() => changeLanguage('fr')}
				>
					FR
				</button>
				<button 
					className={`px-3 py-1 rounded ${currentLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
					onClick={() => changeLanguage('en')}
				>
					EN
				</button>
			</div>
			
			<Link to={`/${currentLanguage}/test`} className="text-red-500 underline">
				Page de test
			</Link>
		</div>
	);
}

export default Home;
