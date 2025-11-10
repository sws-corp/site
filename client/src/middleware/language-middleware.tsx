import { useEffect, useState, type PropsWithChildren } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, type SupportedLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n/config';

function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);
}

function detectBrowserLanguage(): SupportedLanguage {
  const browserLang = navigator.language.split('-')[0];
  return isSupportedLanguage(browserLang) ? browserLang : DEFAULT_LANGUAGE;
}

export function LanguageMiddleware({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const path = location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
    const langInUrl = langMatch?.[1];

    if (!langInUrl || !isSupportedLanguage(langInUrl)) {
      const detectedLang = detectBrowserLanguage();
      const newPath = `/${detectedLang}${path === '/' ? '' : path}`;
      navigate(newPath, { replace: true });
    } else { 
      if (i18n.language !== langInUrl) {
        i18n.changeLanguage(langInUrl);
      }
      setIsChecking(false);
    }
  }, [location.pathname, navigate, i18n]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
