import React from 'react';
import { ArrowUpLeft, ArrowUpRight, Eye, Award, CheckCircle2, FolderKanban, Users, Clock } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onProjectsClick }) => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none -z-10"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(42, 63, 44, 0.35)' : 'rgba(217, 101, 40, 0.08)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(217, 101, 40, 0.12)' : 'rgba(42, 63, 44, 0.08)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typographic Hero Column (7 cols) */}
          <div className={`lg:col-span-7 flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'}`}>
            
            {/* Availability Kicker */}
            <div
              style={{ color: 'var(--text-secondary)' }}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-medium mb-5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span data-i18n="designer.statusAvailable">{t('designer.statusAvailable')}</span>
              <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>·</span>
              <span data-i18n="designer.badgeYear">{t('designer.badgeYear')}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{ color: 'var(--text-primary)' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] sm:leading-[1.2] mb-4"
            >
              <span data-i18n="hero.greeting">{t('hero.greeting')}</span>{' '}
              <span
                className="underline decoration-[#D96528] decoration-4 underline-offset-8"
                data-i18n="designer.name"
              >
                {t('designer.name')}
              </span>
            </h1>

            {/* Profession Title */}
            <p
              style={{ color: theme === 'dark' ? '#E3DDD2' : '#2D3D2E' }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
              data-i18n="designer.role"
            >
              {t('designer.role')}
            </p>

            {/* Short Welcoming Intro */}
            <p
              style={{ color: 'var(--text-secondary)' }}
              className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
              data-i18n="designer.bioShort"
            >
              {t('designer.bioShort')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Action Button (Burnt Orange) */}
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-[#D96528] hover:bg-[#C2551C] active:scale-[0.98] rounded-xl shadow-lg shadow-[#D96528]/25 transition-all cursor-pointer"
              >
                <span data-i18n="hero.contactBtn">{t('hero.contactBtn')}</span>
                {isRTL ? <ArrowUpLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
              </button>

              {/* Secondary Action Button */}
              <button
                type="button"
                onClick={onProjectsClick}
                style={{
                  color: 'var(--text-primary)',
                  borderColor: theme === 'dark' ? 'rgba(250, 246, 240, 0.4)' : '#C9BEAD',
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold bg-transparent hover:bg-black/5 dark:hover:bg-white/10 border rounded-xl transition-all cursor-pointer"
              >
                <span data-i18n="hero.portfolioBtn">{t('hero.portfolioBtn')}</span>
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)',
              }}
              className="mt-10 pt-6 border-t flex flex-wrap items-center gap-6 text-xs"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96528]" />
                <span data-i18n="hero.badge1">{t('hero.badge1')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96528]" />
                <span data-i18n="hero.badge2">{t('hero.badge2')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96528]" />
                <span data-i18n="hero.badge3">{t('hero.badge3')}</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Frame Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative shadow frame */}
              <div
                style={{
                  backgroundColor: theme === 'dark' ? '#243425' : '#E2D8CA',
                  borderColor: 'var(--border-subtle)',
                }}
                className={`absolute inset-0 rounded-3xl transform ${
                  isRTL ? 'rotate-2 translate-x-2' : '-rotate-2 -translate-x-2'
                } translate-y-2 border -z-10`}
              />

              {/* Main Card */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--surface-card-border)',
                }}
                className="p-4 sm:p-5 rounded-3xl border shadow-xl text-[#141C15] overflow-hidden"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#EAE2D5] mb-4 group">
                  <img
                    src={DESIGNER_INFO.portraitImage}
                    alt="Naser eddine"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Overlaid Status */}
                  <div className="absolute bottom-3 right-3 left-3 bg-[#141C15]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#FAF6F0]" data-i18n="designer.name">
                        {t('designer.name')}
                      </p>
                      <p className="text-[11px] text-[#C5BBAE]" data-i18n="designer.role">
                        {t('designer.role')}
                      </p>
                    </div>
                    <span
                      className="text-[11px] font-semibold text-[#D96528] bg-[#D96528]/10 px-2 py-0.5 rounded border border-[#D96528]/30"
                      data-i18n="designer.yearsExpBadge"
                    >
                      {t('designer.yearsExpBadge')}
                    </span>
                  </div>
                </div>

                {/* Micro info inside card */}
                <div className="flex items-center justify-between text-xs text-[#4C5B4D] px-1 font-medium">
                  <span data-i18n="designer.location">{t('designer.location')}</span>
                  <span data-i18n="designer.specialtiesBadge">{t('designer.specialtiesBadge')}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Statistics Bar Below Hero */}
        <div
          style={{ borderColor: 'var(--border-subtle)' }}
          className="mt-16 sm:mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          <div
            style={{
              backgroundColor: 'var(--stat-box-bg)',
              borderColor: 'var(--stat-box-border)',
            }}
            className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} transition-transform hover:-translate-y-1 duration-200 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                style={{ color: 'var(--text-primary)' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black tabular-nums"
              >
                75+
              </span>
              <FolderKanban className="w-5 h-5 text-[#D96528]" />
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="text-xs sm:text-sm font-semibold" data-i18n="hero.statProjects">
              {t('hero.statProjects')}
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="text-[11px] mt-0.5" data-i18n="hero.statProjectsSub">
              {t('hero.statProjectsSub')}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--stat-box-bg)',
              borderColor: 'var(--stat-box-border)',
            }}
            className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} transition-transform hover:-translate-y-1 duration-200 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                style={{ color: 'var(--text-primary)' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black tabular-nums"
              >
                5+
              </span>
              <Clock className="w-5 h-5 text-[#D96528]" />
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="text-xs sm:text-sm font-semibold" data-i18n="hero.statExp">
              {t('hero.statExp')}
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="text-[11px] mt-0.5" data-i18n="hero.statExpSub">
              {t('hero.statExpSub')}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--stat-box-bg)',
              borderColor: 'var(--stat-box-border)',
            }}
            className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} transition-transform hover:-translate-y-1 duration-200 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                style={{ color: 'var(--text-primary)' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black tabular-nums"
              >
                50+
              </span>
              <Users className="w-5 h-5 text-[#D96528]" />
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="text-xs sm:text-sm font-semibold" data-i18n="hero.statClients">
              {t('hero.statClients')}
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="text-[11px] mt-0.5" data-i18n="hero.statClientsSub">
              {t('hero.statClientsSub')}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--stat-box-bg)',
              borderColor: 'var(--stat-box-border)',
            }}
            className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} transition-transform hover:-translate-y-1 duration-200 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                style={{ color: 'var(--text-primary)' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black tabular-nums"
              >
                100%
              </span>
              <Award className="w-5 h-5 text-[#D96528]" />
            </div>
            <p style={{ color: 'var(--text-secondary)' }} className="text-xs sm:text-sm font-semibold" data-i18n="hero.statRate">
              {t('hero.statRate')}
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="text-[11px] mt-0.5" data-i18n="hero.statRateSub">
              {t('hero.statRateSub')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
