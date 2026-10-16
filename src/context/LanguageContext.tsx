import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SupportedLanguage, translations } from '../data/translations';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  dir: 'rtl' | 'ltr';
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'nl', label: 'Nederlands (Vlaams)', dir: 'ltr' },
];

interface LanguageContextType {
  currentLang: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
  isRTL: boolean;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Safe helper to read language without throwing in sandbox iframes
const getInitialLanguage = (): SupportedLanguage => {
  try {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && (saved === 'ar' || saved === 'fr' || saved === 'en' || saved === 'nl')) {
      return saved as SupportedLanguage;
    }
  } catch (e) {
    // Ignore localStorage access restrictions in sandboxed iframe
  }
  // Default language is strictly Arabic (ar) as requested
  return 'ar';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLangState] = useState<SupportedLanguage>(getInitialLanguage);

  const t = useCallback(
    (key: string): string => {
      if (translations[currentLang] && translations[currentLang][key] !== undefined) {
        return translations[currentLang][key];
      }
      if (translations.ar && translations.ar[key] !== undefined) {
        return translations.ar[key];
      }
      return key;
    },
    [currentLang]
  );

  const isRTL = currentLang === 'ar';

  // Core setLanguage function as explicitly requested
  const setLanguage = useCallback((lang: SupportedLanguage) => {
    if (!['ar', 'fr', 'en', 'nl'].includes(lang)) return;

    setCurrentLangState(lang);

    // 1. Update HTML tag lang & dir
    const root = document.documentElement;
    root.setAttribute('lang', lang === 'nl' ? 'nl-BE' : lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // 2. Update document title
    const docTitle = translations[lang]['meta.title'];
    if (docTitle) {
      document.title = docTitle;
    }

    // 3. Update all DOM elements with data-i18n
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // 4. Update all DOM elements with data-i18n-placeholder
    document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && translations[lang] && translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    // 5. Highlight active language buttons
    document.querySelectorAll<HTMLElement>('[data-lang]').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active-lang');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active-lang');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 6. Safe save to localStorage
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      // Ignore sandbox restrictions in iframe
    }
  }, []);

  // Expose setLanguage globally on window
  useEffect(() => {
    (window as any).setLanguage = setLanguage;
    (window as any).translations = translations;

    // Apply initial language on mount
    setLanguage(currentLang);

    // Bind click event listeners to any buttons with data-lang attribute
    const handleButtonClick = (e: Event) => {
      const target = (e.currentTarget as HTMLElement) || (e.target as HTMLElement).closest('[data-lang]');
      if (target) {
        const langAttr = target.getAttribute('data-lang') as SupportedLanguage;
        if (langAttr && ['ar', 'fr', 'en', 'nl'].includes(langAttr)) {
          setLanguage(langAttr);
        }
      }
    };

    const attachListeners = () => {
      document.querySelectorAll('[data-lang]').forEach((el) => {
        el.removeEventListener('click', handleButtonClick);
        el.addEventListener('click', handleButtonClick);
      });
    };

    attachListeners();
    // Also re-check after brief delay in case dynamic elements rendered
    const timer = setTimeout(attachListeners, 300);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('[data-lang]').forEach((el) => {
        el.removeEventListener('click', handleButtonClick);
      });
    };
  }, [currentLang, setLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        isRTL,
        languages: LANGUAGE_OPTIONS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
