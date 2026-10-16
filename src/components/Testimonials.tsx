import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const testimonialList = [
    { key: 't1', rating: 5 },
    { key: 't2', rating: 5 },
    { key: 't3', rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D96528] mb-2.5">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span data-i18n="testimonials.kicker">{t('testimonials.kicker')}</span>
          </div>
          <h2
            style={{ color: 'var(--text-primary)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            data-i18n="testimonials.title"
          >
            {t('testimonials.title')}
          </h2>
          <p
            style={{ color: 'var(--text-secondary)' }}
            className="text-base sm:text-lg leading-relaxed"
            data-i18n="testimonials.subtitle"
          >
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialList.map((item) => (
            <div
              key={item.key}
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--surface-card-border)',
              }}
              className={`border rounded-3xl p-6 sm:p-8 ${
                isRTL ? 'text-right' : 'text-left'
              } shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                {/* Top Row: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#D96528]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D96528]" />
                    ))}
                  </div>
                  <div
                    style={{ backgroundColor: 'var(--inner-pill-bg)' }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#7A8B7B]"
                  >
                    <Quote className="w-4 h-4 rotate-180" />
                  </div>
                </div>

                {/* Quote Text */}
                <p
                  className="text-sm sm:text-base text-[#2C3C2D] leading-relaxed mb-6 font-normal"
                  data-i18n={`testimonials.${item.key}.quote`}
                >
                  "{t(`testimonials.${item.key}.quote`)}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-5 border-t border-[#E8DFD5] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#141C15] text-[#FAF6F0] font-black text-sm flex items-center justify-center shrink-0 border border-[#344736]">
                  {t(`testimonials.${item.key}.name`).slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3
                      className="text-sm font-bold text-[#141C15]"
                      data-i18n={`testimonials.${item.key}.name`}
                    >
                      {t(`testimonials.${item.key}.name`)}
                    </h3>
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  </div>
                  <p
                    className="text-xs text-[#526353]"
                    data-i18n={`testimonials.${item.key}.role`}
                  >
                    {t(`testimonials.${item.key}.role`)}
                  </p>
                  <p
                    className="text-[11px] text-[#7A8B7B] mt-0.5"
                    data-i18n={`testimonials.${item.key}.company`}
                  >
                    {t(`testimonials.${item.key}.company`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Metric Banner */}
        <div
          style={{
            backgroundColor: 'var(--stat-box-bg)',
            borderColor: 'var(--stat-box-border)',
          }}
          className={`mt-14 border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center ${
            isRTL ? 'sm:text-right' : 'sm:text-left'
          } shadow-sm`}
        >
          <div>
            <p
              style={{ color: 'var(--text-primary)' }}
              className="text-base font-bold"
              data-i18n="testimonials.bannerTitle"
            >
              {t('testimonials.bannerTitle')}
            </p>
            <p
              style={{ color: 'var(--text-muted)' }}
              className="text-xs"
              data-i18n="testimonials.bannerDesc"
            >
              {t('testimonials.bannerDesc')}
            </p>
          </div>
          <div className="flex items-center gap-1 text-[#D96528]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D96528]" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
