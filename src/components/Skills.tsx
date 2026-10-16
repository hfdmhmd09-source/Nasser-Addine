import React from 'react';
import { PenTool, Palette, Share2, Layers, Cpu, Layout, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();

  const skillsConfig = [
    { key: 's1', icon: <PenTool className="w-5 h-5 text-[#D96528]" />, level: 96 },
    { key: 's2', icon: <Palette className="w-5 h-5 text-[#D96528]" />, level: 98 },
    { key: 's3', icon: <Share2 className="w-5 h-5 text-[#D96528]" />, level: 92 },
    { key: 's4', icon: <Layers className="w-5 h-5 text-[#D96528]" />, level: 94 },
    { key: 's5', icon: <Cpu className="w-5 h-5 text-[#D96528]" />, level: 96 },
    { key: 's6', icon: <Layout className="w-5 h-5 text-[#D96528]" />, level: 90 },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D96528] mb-2.5">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span data-i18n="skills.kicker">{t('skills.kicker')}</span>
          </div>
          <h2
            style={{ color: 'var(--text-primary)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            data-i18n="skills.title"
          >
            {t('skills.title')}
          </h2>
          <p
            style={{ color: 'var(--text-secondary)' }}
            className="text-base sm:text-lg leading-relaxed"
            data-i18n="skills.subtitle"
          >
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsConfig.map((item) => (
            <div
              key={item.key}
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--surface-card-border)',
              }}
              className={`border rounded-2xl p-6 ${isRTL ? 'text-right' : 'text-left'} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  style={{ backgroundColor: 'var(--inner-pill-bg)' }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  {item.icon}
                </div>
                
                {/* Level Percentage */}
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span className="text-2xl font-black text-[#141C15] tabular-nums font-mono">
                    {item.level}
                  </span>
                  <span className="text-sm font-bold text-[#D96528]">%</span>
                </div>
              </div>

              {/* Skill Name & Category */}
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="text-lg font-bold text-[#141C15] group-hover:text-[#D96528] transition-colors"
                  data-i18n={`skills.${item.key}.name`}
                >
                  {t(`skills.${item.key}.name`)}
                </h3>
                <span
                  className="text-xs font-medium text-[#677768]"
                  data-i18n={`skills.${item.key}.cat`}
                >
                  {t(`skills.${item.key}.cat`)}
                </span>
              </div>

              {/* Skill Description */}
              <p
                className="text-xs sm:text-sm text-[#4D5D4E] leading-relaxed mb-5 min-h-[38px]"
                data-i18n={`skills.${item.key}.desc`}
              >
                {t(`skills.${item.key}.desc`)}
              </p>

              {/* Progress Bar with Burnt Orange fill */}
              <div
                style={{
                  backgroundColor: theme === 'dark' ? '#E4DCD0' : '#E8E1D5',
                }}
                className="w-full rounded-full h-2.5 overflow-hidden p-[1px]"
              >
                <div
                  className="bg-[#D96528] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <div
          style={{
            backgroundColor: 'var(--stat-box-bg)',
            borderColor: 'var(--stat-box-border)',
          }}
          className={`mt-12 border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? 'text-right' : 'text-left'} shadow-sm`}
        >
          <div className="space-y-1">
            <h4
              style={{ color: 'var(--text-primary)' }}
              className="text-lg font-bold"
              data-i18n="skills.calloutTitle"
            >
              {t('skills.calloutTitle')}
            </h4>
            <p
              style={{ color: 'var(--text-muted)' }}
              className="text-xs sm:text-sm"
              data-i18n="skills.calloutDesc"
            >
              {t('skills.calloutDesc')}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#D96528] hover:bg-[#C2551C] rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
          >
            <span data-i18n="skills.calloutBtn">{t('skills.calloutBtn')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
