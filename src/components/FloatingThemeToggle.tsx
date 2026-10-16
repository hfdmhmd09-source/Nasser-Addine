import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, isRTL } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <div
      className={`fixed bottom-6 z-40 transition-all duration-300 ${
        isRTL ? 'left-6' : 'right-6'
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          backgroundColor: isDark ? 'rgba(30, 43, 31, 0.92)' : 'rgba(255, 255, 255, 0.92)',
          borderColor: isDark ? '#344736' : '#D5CBBC',
          color: isDark ? '#FAF6F0' : '#141C15',
        }}
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full border shadow-xl backdrop-blur-md hover:scale-105 active:scale-95 hover:border-[#D96528] transition-all cursor-pointer"
        aria-label={t('theme.toggleTitle')}
        title={t('theme.toggleTitle')}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-indigo-500/15 text-indigo-600'
          }`}
        >
          {isDark ? (
            <Sun className="w-4 h-4 animate-spin-slow" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </div>
        <div className="flex flex-col text-start">
          <span className="text-[11px] font-extrabold leading-none text-[#D96528]" data-i18n={isDark ? 'theme.night' : 'theme.day'}>
            {isDark ? t('theme.night') : t('theme.day')}
          </span>
          <span className="text-[9px] opacity-70 leading-tight" data-i18n="theme.dayNight">
            {t('theme.dayNight')}
          </span>
        </div>
      </button>
    </div>
  );
};
