import React from 'react';
import { ArrowUp, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--footer-bg)',
        borderColor: 'var(--footer-border)',
        color: 'var(--text-primary)',
      }}
      className="border-t py-12 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div
          style={{ borderColor: 'var(--footer-border)' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b"
        >
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <span
              style={{
                backgroundColor: theme === 'dark' ? '#1E2B1F' : '#DFD5C6',
                borderColor: theme === 'dark' ? '#2D3E2E' : '#C8BCAB',
              }}
              className="w-9 h-9 rounded-lg border flex items-center justify-center text-[#D96528] font-black text-lg"
              data-i18n="designer.initial"
            >
              {t('designer.initial')}
            </span>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p style={{ color: 'var(--text-primary)' }} className="text-base font-bold" data-i18n="designer.name">
                {t('designer.name')}
              </p>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs" data-i18n="designer.role">
                {t('designer.role')}
              </p>
            </div>
          </div>

          {/* Social Links in Footer */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: theme === 'dark' ? '#1A251B' : '#E2D8CA',
                color: 'var(--text-primary)',
              }}
              className="p-2 rounded-lg hover:text-[#10B981] transition-colors"
              title={t('nav.whatsappBtn')}
              aria-label={t('nav.whatsappBtn')}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={DESIGNER_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: theme === 'dark' ? '#1A251B' : '#E2D8CA',
                color: 'var(--text-primary)',
              }}
              className="p-2 rounded-lg hover:text-[#E1306C] transition-colors"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={DESIGNER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: theme === 'dark' ? '#1A251B' : '#E2D8CA',
                color: 'var(--text-primary)',
              }}
              className="p-2 rounded-lg hover:text-[#0A66C2] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              backgroundColor: theme === 'dark' ? '#1E2B1F' : '#E2D8CA',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold border rounded-xl transition-all cursor-pointer group"
          >
            <span data-i18n="footer.backToTop">{t('footer.backToTop')}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#D96528]" />
          </button>
        </div>

        {/* Bottom Row: Simple Copyright */}
        <div
          style={{ color: 'var(--text-muted)' }}
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center ${
            isRTL ? 'sm:text-right' : 'sm:text-left'
          }`}
        >
          <p>
            © {currentYear} <span data-i18n="designer.name">{t('designer.name')}</span> —{' '}
            <span data-i18n="designer.role">{t('designer.role')}</span>.{' '}
            <span data-i18n="footer.rightsReserved">{t('footer.rightsReserved')}</span>.
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span data-i18n="footer.craftedWith">{t('footer.craftedWith')}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
