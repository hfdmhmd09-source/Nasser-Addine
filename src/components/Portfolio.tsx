import React, { useState } from 'react';
import { Eye, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_STATIC_INFO } from '../data/translations';

interface PortfolioProps {
  onSelectProjectForInquiry: (projectName: string) => void;
}

type FilterType = 'all' | 'logos' | 'identities' | 'social';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const { t, isRTL } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filterOptions: { id: FilterType; i18nKey: string }[] = [
    { id: 'all', i18nKey: 'portfolio.filterAll' },
    { id: 'logos', i18nKey: 'portfolio.filterLogos' },
    { id: 'identities', i18nKey: 'portfolio.filterIdentities' },
    { id: 'social', i18nKey: 'portfolio.filterSocial' },
  ];

  const projects = [
    { num: 'p1', ...PROJECTS_STATIC_INFO[0] },
    { num: 'p2', ...PROJECTS_STATIC_INFO[1] },
    { num: 'p3', ...PROJECTS_STATIC_INFO[2] },
    { num: 'p4', ...PROJECTS_STATIC_INFO[3] },
    { num: 'p5', ...PROJECTS_STATIC_INFO[4] },
    { num: 'p6', ...PROJECTS_STATIC_INFO[5] },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--canvas-alt)',
        borderColor: 'var(--border-subtle)',
      }}
      className="py-20 md:py-28 border-t border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D96528] mb-2.5">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span data-i18n="portfolio.kicker">{t('portfolio.kicker')}</span>
            </div>
            <h2
              style={{ color: 'var(--text-primary)' }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
              data-i18n="portfolio.title"
            >
              {t('portfolio.title')}
            </h2>
            <p
              style={{ color: 'var(--text-secondary)' }}
              className="text-base sm:text-lg leading-relaxed"
              data-i18n="portfolio.subtitle"
            >
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            style={{
              backgroundColor: 'var(--canvas-bg)',
              borderColor: 'var(--border-subtle)',
            }}
            className="flex items-center p-1.5 rounded-xl border self-start md:self-auto overflow-x-auto max-w-full shadow-sm"
          >
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  style={{
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#D96528] shadow-md'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  data-i18n={opt.i18nKey}
                >
                  {t(opt.i18nKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--surface-card-border)',
              }}
              className={`border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer flex flex-col ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {/* Project Card Image Container */}
              <div className="relative aspect-[4/3] bg-[#EAE2D5] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`project.${project.num}.title`)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141C15]/90 text-white text-xs font-bold backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-4 h-4 text-[#D96528]" />
                    <span data-i18n="portfolio.viewDetails">{t('portfolio.viewDetails')}</span>
                  </span>
                </div>

                {/* Category Tag */}
                <div className={`absolute top-3.5 ${isRTL ? 'right-3.5' : 'left-3.5'}`}>
                  <span
                    className="text-[11px] font-bold text-[#141C15] bg-[#FAF6F0]/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-black/5"
                    data-i18n={`project.${project.num}.catLabel`}
                  >
                    {t(`project.${project.num}.catLabel`)}
                  </span>
                </div>
              </div>

              {/* Project Card Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6A7B6B] mb-2">
                    <span data-i18n={`project.${project.num}.client`}>{t(`project.${project.num}.client`)}</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <h3
                    className="text-xl font-black text-[#141C15] group-hover:text-[#D96528] transition-colors mb-2.5"
                    data-i18n={`project.${project.num}.title`}
                  >
                    {t(`project.${project.num}.title`)}
                  </h3>

                  <p
                    className="text-xs sm:text-sm text-[#4D5D4E] leading-relaxed line-clamp-2 mb-4"
                    data-i18n={`project.${project.num}.shortDesc`}
                  >
                    {t(`project.${project.num}.shortDesc`)}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D96528] group-hover:underline flex items-center gap-1">
                    <span data-i18n="portfolio.detailsLabel">{t('portfolio.detailsLabel')}</span>
                    {isRTL ? (
                      <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>

                  <span className="text-[11px] text-[#7A8B7B]">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
          onSelectProjectForInquiry={onSelectProjectForInquiry}
        />

      </div>
    </section>
  );
};
