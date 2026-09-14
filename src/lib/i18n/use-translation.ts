import { useState, useEffect, useCallback } from "react";
import { translations, type Language, type TranslationDictionary } from "./translations";

const STORAGE_KEY = "noruva_lang";
const EVENT_NAME = "noruva:languagechange";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ja") return saved;
    // Check navigator language
    if (navigator.language && navigator.language.toLowerCase().startsWith("ja")) {
      return "ja";
    }
  } catch {
    // Ignore localStorage errors
  }
  return "en";
}

export function useTranslation() {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: Language }>;
      if (customEvent.detail && (customEvent.detail.lang === "en" || customEvent.detail.lang === "ja")) {
        setLangState(customEvent.detail.lang);
        if (typeof document !== "undefined") {
          document.documentElement.lang = customEvent.detail.lang;
        }
      }
    };

    window.addEventListener(EVENT_NAME, handleLanguageChange);
    return () => {
      window.removeEventListener(EVENT_NAME, handleLanguageChange);
    };
  }, [lang]);

  const setLanguage = useCallback((newLang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore
    }
    setLangState(newLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(EVENT_NAME, { detail: { lang: newLang } })
      );
    }
  }, []);

  const t: TranslationDictionary = translations[lang] || translations.en;

  return {
    lang,
    setLanguage,
    t,
  };
}
