import { useLanguage } from '../contexts/LanguageContext'; // Asegúrate de que esto apunte al archivo correcto
import { translations } from '../translations';
import { useCallback, useEffect, useState } from 'react';

export function useTranslation() {
  const { language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    console.log('useTranslation: language changed to', language);
    setCurrentLanguage(language);
  }, [language]);

  const t = useCallback((key: string, params?: Record<string, string>) => {
    console.log('useTranslation: translating key', key, 'for language', currentLanguage);
    if (!translations[currentLanguage]) {
      console.error(`No translations found for language: ${currentLanguage}`);
      return key;
    }
    let translation = translations[currentLanguage][key] || key;
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }
    return translation;
  }, [currentLanguage]);

  return { t, language: currentLanguage };
}
