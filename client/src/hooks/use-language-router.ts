import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, SupportedLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n/config';

export function useLanguageRouter() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  const changeLanguage = (newLang: SupportedLanguage) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fr)/, '');
    navigate(`/${newLang}${pathWithoutLang || ''}`);
  };

  return {
    currentLanguage: (lang as SupportedLanguage) || DEFAULT_LANGUAGE,
    changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
}
