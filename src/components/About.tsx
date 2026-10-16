import React from 'react';
import { Briefcase, Calendar, Users2, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--canvas-alt)',
        borderColor: 'var(--border-subtle)',
      }}
      className="py-20 md:py-28 border-t border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D96528] mb-2.5">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span data-i18n="about.kicker">{t('about.kicker')}</span>
          </div>
          <h2
            style={{ color: 'var(--text-primary)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            data-i18n="about.title"
          >
            {t('about.title')}
          </h2>
          <p
            style={{ color: 'var(--text-secondary)' }}
            className="text-base sm:text-lg leading-relaxed"
            data-i18n="about.subtitle"
          >
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Grid: Portrait + Story & Numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait & Visual Anchor (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative contour */}
              <div
                style={{
                  backgroundColor: theme === 'dark' ? '#243325' : '#DED5C8',
                  borderColor: 'var(--border-subtle)',
                }}
                className={`absolute -inset-3 rounded-3xl ${
                  isRTL ? '-rotate-1' : 'rotate-1'
                } border -z-10`}
              />

              {/* Card container */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--surface-card-border)',
                }}
                className="p-4 sm:p-6 rounded-3xl border shadow-xl text-[#141C15]"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EAE2D5] mb-5">
                  <img
                    src={DESIGNER_INFO.portraitImage}
                    alt="Naser eddine"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} text-white`}>
                    <p className="text-lg font-bold" data-i18n="designer.name">{t('designer.name')}</p>
                    <p className="text-xs text-[#D8D0C2]" data-i18n="designer.role">{t('designer.role')}</p>
                  </div>
                </div>

                {/* Personal quote inside the card */}
                <div
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className={`p-3.5 rounded-xl border text-xs text-[#2B3B2C] leading-relaxed font-medium ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                  data-i18n="designer.quote"
                >
                  {t('designer.quote')}
                </div>
              </div>

            </div>
          </div>

          {/* Bio Content & The 3 Numbers (7 cols) */}
          <div className={`lg:col-span-7 flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'}`}>
            
            <h3
              style={{ color: 'var(--text-primary)' }}
              className="text-2xl sm:text-3xl font-black leading-snug mb-5"
              data-i18n="about.heading"
            >
              {t('about.heading')}
            </h3>

            <p
              style={{ color: 'var(--text-secondary)' }}
              className="text-base leading-relaxed mb-6 font-normal"
              data-i18n="designer.bioFull"
            >
              {t('designer.bioFull')}
            </p>

            <p
              style={{ color: 'var(--text-muted)' }}
              className="text-sm sm:text-base leading-relaxed mb-10"
              data-i18n="about.p2"
            >
              {t('about.p2')}
            </p>

            {/* The 3 Highlight Numbers as Light Beige Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              
              {/* Stat 1: عدد المشاريع */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--surface-card-border)',
                }}
                className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3 text-[#141C15]">
                  <span className="text-3xl sm:text-4xl font-black text-[#141C15] tabular-nums">
                    75+
                  </span>
                  <div
                    style={{ backgroundColor: 'var(--inner-pill-bg)' }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[#D96528]"
                  >
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#141C15] mb-1" data-i18n="about.cardProjectsTitle">
                  {t('about.cardProjectsTitle')}
                </h4>
                <p className="text-xs text-[#526353]" data-i18n="about.cardProjectsDesc">
                  {t('about.cardProjectsDesc')}
                </p>
              </div>

              {/* Stat 2: سنوات الخبرة */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--surface-card-border)',
                }}
                className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3 text-[#141C15]">
                  <span className="text-3xl sm:text-4xl font-black text-[#141C15] tabular-nums">
                    5+
                  </span>
                  <div
                    style={{ backgroundColor: 'var(--inner-pill-bg)' }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[#D96528]"
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#141C15] mb-1" data-i18n="about.cardExpTitle">
                  {t('about.cardExpTitle')}
                </h4>
                <p className="text-xs text-[#526353]" data-i18n="about.cardExpDesc">
                  {t('about.cardExpDesc')}
                </p>
              </div>

              {/* Stat 3: عدد العملاء */}
              <div
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--surface-card-border)',
                }}
                className={`border rounded-2xl p-5 ${isRTL ? 'text-right' : 'text-left'} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3 text-[#141C15]">
                  <span className="text-3xl sm:text-4xl font-black text-[#141C15] tabular-nums">
                    50+
                  </span>
                  <div
                    style={{ backgroundColor: 'var(--inner-pill-bg)' }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[#D96528]"
                  >
                    <Users2 className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#141C15] mb-1" data-i18n="about.cardClientsTitle">
                  {t('about.cardClientsTitle')}
                </h4>
                <p className="text-xs text-[#526353]" data-i18n="about.cardClientsDesc">
                  {t('about.cardClientsDesc')}
                </p>
              </div>

            </div>

            {/* Creative Process Strip */}
            <div
              style={{
                backgroundColor: 'var(--stat-box-bg)',
                borderColor: 'var(--stat-box-border)',
              }}
              className="w-full border rounded-2xl p-5 mb-8 shadow-sm"
            >
              <h4
                style={{ color: 'var(--text-primary)' }}
                className="text-xs font-bold mb-4"
                data-i18n="about.methodologyTitle"
              >
                {t('about.methodologyTitle')}
              </h4>
              <div
                style={{ color: 'var(--text-primary)' }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: theme === 'dark' ? '#253526' : '#EFE8DE',
                    }}
                    className="w-6 h-6 rounded-full text-[#D96528] font-bold flex items-center justify-center text-[11px] shrink-0"
                  >
                    1
                  </span>
                  <span data-i18n="about.step1">{t('about.step1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: theme === 'dark' ? '#253526' : '#EFE8DE',
                    }}
                    className="w-6 h-6 rounded-full text-[#D96528] font-bold flex items-center justify-center text-[11px] shrink-0"
                  >
                    2
                  </span>
                  <span data-i18n="about.step2">{t('about.step2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: theme === 'dark' ? '#253526' : '#EFE8DE',
                    }}
                    className="w-6 h-6 rounded-full text-[#D96528] font-bold flex items-center justify-center text-[11px] shrink-0"
                  >
                    3
                  </span>
                  <span data-i18n="about.step3">{t('about.step3')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: theme === 'dark' ? '#253526' : '#EFE8DE',
                    }}
                    className="w-6 h-6 rounded-full text-[#D96528] font-bold flex items-center justify-center text-[11px] shrink-0"
                  >
                    4
                  </span>
                  <span data-i18n="about.step4">{t('about.step4')}</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#D96528] hover:bg-[#C2551C] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span data-i18n="about.ctaBtn">{t('about.ctaBtn')}</span>
                {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>

              <a
                href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: theme === 'dark' ? '#1E2B1F' : '#EFE8DE',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border transition-colors hover:text-[#D96528]"
              >
                <span data-i18n="about.consultationBtn">{t('about.consultationBtn')}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
