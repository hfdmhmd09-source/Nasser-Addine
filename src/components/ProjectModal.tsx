import React, { useEffect } from 'react';
import { X, Check, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: {
    num: string;
    id: string;
    category: 'logos' | 'identities' | 'social';
    image: string;
    year: string;
    duration: string;
    tools: string[];
  } | null;
  onClose: () => void;
  onSelectProjectForInquiry: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForInquiry,
}) => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const num = project.num;
  const projectTitle = t(`project.${num}.title`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          backgroundColor: 'var(--surface-card)',
          borderColor: 'var(--surface-card-border)',
        }}
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl border shadow-2xl overflow-y-auto ${
          isRTL ? 'text-right' : 'text-left'
        } text-[#141C15] z-10 focus:outline-none`}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 ${
            isRTL ? 'left-4' : 'right-4'
          } z-20 p-2.5 rounded-full bg-[#141C15]/85 hover:bg-[#141C15] text-[#FAF6F0] backdrop-blur-sm transition-colors cursor-pointer shadow-md`}
          aria-label={t('portfolio.modalClose')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#EAE2D5] overflow-hidden">
          <img
            src={project.image}
            alt={projectTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className={`absolute bottom-6 ${isRTL ? 'right-6 left-6' : 'left-6 right-6'} text-white`}>
            <span
              className="text-xs font-semibold text-[#D96528] bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-[#D96528]/40"
              data-i18n={`project.${num}.catLabel`}
            >
              {t(`project.${num}.catLabel`)}
            </span>
            <h3
              id="modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-black mt-2 text-[#FAF6F0]"
              data-i18n={`project.${num}.title`}
            >
              {projectTitle}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Metadata Bar */}
          <div
            style={{
              backgroundColor: 'var(--inner-pill-bg)',
              borderColor: 'var(--inner-pill-border)',
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl border text-xs"
          >
            <div>
              <p className="text-[#647565] font-medium mb-1" data-i18n="portfolio.modalClient">{t('portfolio.modalClient')}</p>
              <p className="font-bold text-[#141C15] text-sm" data-i18n={`project.${num}.client`}>{t(`project.${num}.client`)}</p>
            </div>
            <div>
              <p className="text-[#647565] font-medium mb-1" data-i18n="portfolio.modalYear">{t('portfolio.modalYear')}</p>
              <p className="font-bold text-[#141C15] text-sm font-mono tabular-nums">{project.year}</p>
            </div>
            <div>
              <p className="text-[#647565] font-medium mb-1" data-i18n="portfolio.modalDuration">{t('portfolio.modalDuration')}</p>
              <p className="font-bold text-[#141C15] text-sm">{project.duration}</p>
            </div>
            <div>
              <p className="text-[#647565] font-medium mb-1" data-i18n="portfolio.modalCategory">{t('portfolio.modalCategory')}</p>
              <p className="font-bold text-[#141C15] text-sm" data-i18n={`project.${num}.catLabel`}>{t(`project.${num}.catLabel`)}</p>
            </div>
          </div>

          {/* Tools & Tech used */}
          <div>
            <h4 className="text-xs font-bold text-[#647565] mb-2.5" data-i18n="portfolio.modalTools">
              {t('portfolio.modalTools')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className="px-3 py-1 text-xs font-semibold text-[#141C15] rounded-lg border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Narrative: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              style={{
                backgroundColor: 'var(--inner-pill-bg)',
                borderColor: 'var(--inner-pill-border)',
              }}
              className="p-5 rounded-2xl border"
            >
              <h4 className="text-sm font-black text-[#141C15] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D96528]" />
                <span data-i18n="portfolio.modalChallenge">{t('portfolio.modalChallenge')}</span>
              </h4>
              <p
                className="text-xs sm:text-sm text-[#4D5D4E] leading-relaxed"
                data-i18n={`project.${num}.challenge`}
              >
                {t(`project.${num}.challenge`)}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--inner-pill-bg)',
                borderColor: 'var(--inner-pill-border)',
              }}
              className="p-5 rounded-2xl border"
            >
              <h4 className="text-sm font-black text-[#141C15] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span data-i18n="portfolio.modalSolution">{t('portfolio.modalSolution')}</span>
              </h4>
              <p
                className="text-xs sm:text-sm text-[#4D5D4E] leading-relaxed"
                data-i18n={`project.${num}.solution`}
              >
                {t(`project.${num}.solution`)}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div
            style={{
              backgroundColor: 'var(--inner-pill-bg)',
              borderColor: 'var(--inner-pill-border)',
            }}
            className="p-5 rounded-2xl border"
          >
            <h4 className="text-sm font-black text-[#141C15] mb-3" data-i18n="portfolio.modalDeliverablesTitle">
              {t('portfolio.modalDeliverablesTitle')}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#2C3C2D]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D96528] shrink-0" />
                <span data-i18n={`project.${num}.del1`}>{t(`project.${num}.del1`)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D96528] shrink-0" />
                <span data-i18n={`project.${num}.del2`}>{t(`project.${num}.del2`)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D96528] shrink-0" />
                <span data-i18n={`project.${num}.del3`}>{t(`project.${num}.del3`)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D96528] shrink-0" />
                <span data-i18n={`project.${num}.del4`}>{t(`project.${num}.del4`)}</span>
              </li>
            </ul>
          </div>

          {/* Modal Bottom Actions */}
          <div
            style={{ borderColor: 'var(--surface-card-border)' }}
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-[#647565]" data-i18n="portfolio.modalInquiryPrompt">
              {t('portfolio.modalInquiryPrompt')}
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                style={{
                  backgroundColor: 'var(--inner-pill-bg)',
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#4D5D4E] hover:text-[#141C15] rounded-xl transition-colors cursor-pointer"
                data-i18n="portfolio.modalClose"
              >
                {t('portfolio.modalClose')}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectProjectForInquiry(projectTitle);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#D96528] hover:bg-[#C2551C] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span data-i18n="portfolio.modalInquiryBtn">{t('portfolio.modalInquiryBtn')}</span>
                {isRTL ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
