import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft, ArrowUpRight, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../data/translations';
import { FlagSA, FlagFR, FlagGB, FlagBE } from './FlagIcons';

interface NavbarProps {
  onContactClick: () => void;
}

interface FlagItem {
  code: SupportedLanguage;
  label: string;
  Flag: React.FC<{ className?: string }>;
}

const FLAGS_LIST: FlagItem[] = [
  { code: 'ar', label: 'العربية (السعودية)', Flag: FlagSA },
  { code: 'fr', label: 'Français (France)', Flag: FlagFR },
  { code: 'en', label: 'English (United Kingdom)', Flag: FlagGB },
  { code: 'nl', label: 'Nederlands (België / Vlaams)', Flag: FlagBE },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { currentLang, setLanguage, t, isRTL } = useLanguage();

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: isScrolled ? 'var(--header-scrolled-bg)' : 'var(--header-bg)',
          borderColor: 'var(--border-subtle)',
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md border-b shadow-sm ${
          isScrolled ? 'py-3 shadow-black/10' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2.5 sm:gap-3 text-lg font-bold tracking-tight whitespace-nowrap shrink-0 hover:text-[#D96528] transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              <span
                style={{
                  backgroundColor: isDark ? '#223124' : '#EFE8DE',
                  borderColor: isDark ? '#344736' : '#D5CBBC',
                }}
                className="w-9 h-9 rounded-lg border flex items-center justify-center text-[#D96528] font-black text-lg group-hover:border-[#D96528] transition-all"
                data-i18n="designer.initial"
              >
                {t('designer.initial')}
              </span>
              <span className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                <span className="leading-tight font-extrabold text-sm sm:text-base" data-i18n="designer.name">
                  {t('designer.name')}
                </span>
                <span
                  style={{ color: 'var(--text-muted)' }}
                  className="text-[11px] font-normal tracking-normal truncate max-w-[130px] sm:max-w-none"
                  data-i18n="designer.role"
                >
                  {t('designer.role')}
                </span>
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.home"
              >
                {t('nav.home')}
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.about"
              >
                {t('nav.about')}
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, '#skills')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.skills"
              >
                {t('nav.skills')}
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.portfolio"
              >
                {t('nav.portfolio')}
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, '#testimonials')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.testimonials"
              >
                {t('nav.testimonials')}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:!text-[#D96528] relative py-1 transition-colors whitespace-nowrap shrink-0"
                data-i18n="nav.contact"
              >
                {t('nav.contact')}
              </a>
            </nav>

            {/* Zone 3: Actions (Flags ONLY + Day/Night Toggle + CTA) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Language Selector: Country Flags ONLY (بدون أسماء، فقط علم) */}
              <div
                style={{
                  backgroundColor: isDark ? '#1C281D' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                }}
                className="flex items-center p-1 sm:p-1.5 rounded-xl border gap-1 shadow-sm"
                role="group"
                aria-label="Language selection by country flag"
              >
                {FLAGS_LIST.map(({ code, label, Flag }) => {
                  const isSelected = currentLang === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      data-lang={code}
                      onClick={() => setLanguage(code)}
                      title={label}
                      aria-label={label}
                      className={`relative p-1 sm:p-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#D96528] shadow-sm scale-105 active-lang'
                          : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Flag className="w-5 h-3.5 sm:w-6 sm:h-4" />
                      {isSelected && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-xs" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Day / Night Toggle (خاصية ليل نهار) */}
              <button
                type="button"
                onClick={toggleTheme}
                style={{
                  backgroundColor: isDark ? '#1C281D' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
                className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border flex items-center gap-1.5 sm:gap-2 hover:border-[#D96528] transition-all cursor-pointer shadow-sm text-xs font-bold"
                aria-label={t('theme.toggleTitle')}
                title={t('theme.toggleTitle')}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-[#F59E0B] shrink-0" />
                ) : (
                  <Moon className="w-4 h-4 text-[#6366F1] shrink-0" />
                )}
                <span
                  className="font-extrabold text-[12px] hidden sm:inline"
                  data-i18n={isDark ? 'theme.night' : 'theme.day'}
                >
                  {isDark ? t('theme.night') : t('theme.day')}
                </span>
                <span
                  style={{
                    backgroundColor: isDark ? '#2B3D2D' : '#DFD5C6',
                    color: 'var(--text-secondary)',
                  }}
                  className="text-[10px] px-1.5 py-0.5 rounded text-muted hidden md:inline"
                  data-i18n="theme.dayNight"
                >
                  {t('theme.dayNight')}
                </span>
              </button>

              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: isDark ? '#1C281D' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold hover:text-[#D96528] rounded-xl border transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                <span data-i18n="nav.whatsappBtn">{t('nav.whatsappBtn')}</span>
              </a>

              {/* Contact CTA */}
              <button
                type="button"
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#D96528] hover:bg-[#C2551C] active:scale-[0.98] rounded-xl shadow-md shadow-[#D96528]/25 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span data-i18n="nav.contactBtn">{t('nav.contactBtn')}</span>
                {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  backgroundColor: isDark ? '#1C281D' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
                className="p-2 border rounded-xl lg:hidden focus:outline-none focus:ring-2 focus:ring-[#D96528] cursor-pointer"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            style={{
              backgroundColor: 'var(--canvas-bg)',
              borderColor: 'var(--border-subtle)',
            }}
            className={`fixed inset-y-0 ${
              isRTL ? 'right-0 border-l' : 'left-0 border-r'
            } w-[300px] sm:w-[330px] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto`}
          >
            <div>
              <div
                style={{ borderColor: 'var(--border-subtle)' }}
                className="flex items-center justify-between pb-4 border-b"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    style={{
                      backgroundColor: isDark ? '#223124' : '#EFE8DE',
                      borderColor: isDark ? '#344736' : '#D5CBBC',
                    }}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center text-[#D96528] font-bold"
                    data-i18n="designer.initial"
                  >
                    {t('designer.initial')}
                  </span>
                  <span style={{ color: 'var(--text-primary)' }} className="font-bold text-sm" data-i18n="designer.name">
                    {t('designer.name')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--text-muted)' }}
                  className="p-1.5 rounded-lg hover:bg-black/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Drawer: Country Flags ONLY (بدون أسماء، فقط علم) */}
              <div className="mt-4 mb-3">
                <div
                  style={{
                    backgroundColor: isDark ? '#182419' : '#EAE2D5',
                    borderColor: 'var(--border-subtle)',
                  }}
                  className="grid grid-cols-4 gap-1 p-2 rounded-2xl border"
                  role="group"
                  aria-label="Language selection by country flag"
                >
                  {FLAGS_LIST.map(({ code, label, Flag }) => {
                    const isSelected = currentLang === code;
                    return (
                      <button
                        key={code}
                        type="button"
                        data-lang={code}
                        onClick={() => {
                          setLanguage(code);
                        }}
                        title={label}
                        aria-label={label}
                        className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#D96528] shadow-sm scale-105 active-lang'
                            : 'hover:bg-black/5 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Flag className="w-7 h-4.5" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Day / Night Feature in Drawer (خاصية ليل نهار) */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  style={{
                    backgroundColor: isDark ? '#1C281D' : '#EAE2D5',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer hover:border-[#D96528]"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? (
                      <Sun className="w-5 h-5 text-[#F59E0B]" />
                    ) : (
                      <Moon className="w-5 h-5 text-[#6366F1]" />
                    )}
                    <span data-i18n="theme.dayNight">{t('theme.dayNight')}</span>
                  </span>
                  <span
                    style={{
                      backgroundColor: isDark ? '#2A3C2B' : '#DFD5C6',
                      color: 'var(--text-secondary)',
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-extrabold"
                    data-i18n={isDark ? 'theme.night' : 'theme.day'}
                  >
                    {isDark ? t('theme.night') : t('theme.day')}
                  </span>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.home"
                >
                  <span>{t('nav.home')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.about"
                >
                  <span>{t('nav.about')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, '#skills')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.skills"
                >
                  <span>{t('nav.skills')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.portfolio"
                >
                  <span>{t('nav.portfolio')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, '#testimonials')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.testimonials"
                >
                  <span>{t('nav.testimonials')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  style={{ color: 'var(--text-secondary)' }}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium hover:!text-[#D96528] hover:bg-black/5 rounded-xl transition-colors"
                  data-i18n="nav.contact"
                >
                  <span>{t('nav.contact')}</span>
                  {isRTL ? <ArrowUpLeft className="w-4 h-4 opacity-40" /> : <ArrowUpRight className="w-4 h-4 opacity-40" />}
                </a>
              </nav>
            </div>

            <div
              style={{ borderColor: 'var(--border-subtle)' }}
              className="pt-4 border-t space-y-2.5"
            >
              <a
                href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: isDark ? '#1C281D' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl border transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span data-i18n="nav.whatsappBtn">{t('nav.whatsappBtn')}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#D96528] hover:bg-[#C2551C] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span data-i18n="nav.contactBtn">{t('nav.contactBtn')}</span>
                {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
