import { useEffect, useState, type PropsWithChildren } from 'react';
import { useNavigate, useLocation } from 'react-router';
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
      setIsChecking(false);
    }
  }, [location.pathname, navigate]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
