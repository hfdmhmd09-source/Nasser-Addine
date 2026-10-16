import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Send, MessageCircle, Mail, MapPin, CheckCircle2, ArrowUpLeft, ArrowUpRight, Instagram, Linkedin, Clock } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export interface ContactRef {
  setProjectTopic: (projectName: string) => void;
  focusForm: () => void;
}

export const Contact = forwardRef<ContactRef, {}>((_, ref) => {
  const { theme } = useTheme();
  const { t, isRTL, currentLang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'option1',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setProjectTopic: (projectName: string) => {
      setFormData((prev) => ({
        ...prev,
        service: 'option4',
        message: currentLang === 'ar'
          ? `مرحباً ${t('designer.name')}، أود الاستفسار عن إمكانية تصميم مشروع مماثل لمشروع "${projectName}".`
          : `Hello ${t('designer.name')}, I would like to inquire about a project similar to "${projectName}".`,
      }));
    },
    focusForm: () => {
      const el = document.getElementById('contact-name-input');
      if (el) el.focus();
    },
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t('contact.errorRequired'));
      return;
    }

    setError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--canvas-alt)',
        borderColor: 'var(--border-subtle)',
      }}
      className="py-20 md:py-28 border-t relative transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D96528] mb-2.5">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span data-i18n="contact.kicker">{t('contact.kicker')}</span>
          </div>
          <h2
            style={{ color: 'var(--text-primary)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            data-i18n="contact.title"
          >
            {t('contact.title')}
          </h2>
          <p
            style={{ color: 'var(--text-secondary)' }}
            className="text-base sm:text-lg leading-relaxed"
            data-i18n="contact.subtitle"
          >
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Container Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels & Social Accounts (5 cols) */}
          <div className={`lg:col-span-5 space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            
            {/* Social Media & Instant Channels Card */}
            <div
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--surface-card-border)',
              }}
              className="border rounded-3xl p-6 sm:p-8 text-[#141C15] shadow-sm"
            >
              <h3 className="text-xl font-bold mb-3 text-[#141C15]" data-i18n="contact.channelsTitle">
                {t('contact.channelsTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#4D5D4E] leading-relaxed mb-6" data-i18n="contact.channelsDesc">
                {t('contact.channelsDesc')}
              </p>

              {/* Direct Channels List */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className="flex items-center justify-between p-3.5 hover:opacity-90 rounded-2xl border transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#1EAA50]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#526353]" data-i18n="contact.whatsappLabel">
                        {t('contact.whatsappLabel')}
                      </p>
                      <p className="text-sm font-bold text-[#141C15] font-mono" dir="ltr" data-i18n="designer.whatsapp">
                        {t('designer.whatsapp')}
                      </p>
                    </div>
                  </div>
                  {isRTL ? (
                    <ArrowUpLeft className="w-4 h-4 text-[#7A8B7B] group-hover:text-[#141C15] transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#7A8B7B] group-hover:text-[#141C15] transition-transform group-hover:translate-x-1" />
                  )}
                </a>

                {/* Email */}
                <a
                  href={`mailto:${t('designer.email')}`}
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className="flex items-center justify-between p-3.5 hover:opacity-90 rounded-2xl border transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D96528]/15 flex items-center justify-center text-[#D96528]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#526353]" data-i18n="contact.emailLabel">
                        {t('contact.emailLabel')}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#141C15] font-mono" dir="ltr" data-i18n="designer.email">
                        {t('designer.email')}
                      </p>
                    </div>
                  </div>
                  {isRTL ? (
                    <ArrowUpLeft className="w-4 h-4 text-[#7A8B7B] group-hover:text-[#141C15] transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#7A8B7B] group-hover:text-[#141C15] transition-transform group-hover:translate-x-1" />
                  )}
                </a>

                {/* Location */}
                <div
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#141C15]/10 flex items-center justify-center text-[#141C15]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#526353]" data-i18n="contact.locationLabel">
                      {t('contact.locationLabel')}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#141C15]" data-i18n="designer.location">
                      {t('designer.location')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Media Accounts */}
              <div
                style={{ borderColor: 'var(--inner-pill-border)' }}
                className="mt-8 pt-6 border-t"
              >
                <h4 className="text-xs font-bold text-[#526353] mb-4" data-i18n="contact.socialHeading">
                  {t('contact.socialHeading')}
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${t('designer.whatsapp').replace(/\D/g, '')}?text=${encodeURIComponent(t('designer.whatsappMsg'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'var(--inner-pill-bg)',
                      borderColor: 'var(--inner-pill-border)',
                    }}
                    className="w-11 h-11 rounded-xl hover:bg-[#25D366] hover:text-white text-[#2C3C2D] border flex items-center justify-center transition-all shadow-sm"
                    title={t('contact.whatsappLabel')}
                    aria-label={t('contact.whatsappLabel')}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                  <a
                    href={DESIGNER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'var(--inner-pill-bg)',
                      borderColor: 'var(--inner-pill-border)',
                    }}
                    className="w-11 h-11 rounded-xl hover:bg-[#E1306C] hover:text-white text-[#2C3C2D] border flex items-center justify-center transition-all shadow-sm"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a
                    href={DESIGNER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'var(--inner-pill-bg)',
                      borderColor: 'var(--inner-pill-border)',
                    }}
                    className="w-11 h-11 rounded-xl hover:bg-[#0A66C2] hover:text-white text-[#2C3C2D] border flex items-center justify-center transition-all shadow-sm"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Response Promise */}
              <div
                style={{
                  backgroundColor: 'var(--inner-pill-bg)',
                  borderColor: 'var(--inner-pill-border)',
                }}
                className="mt-6 p-3 rounded-xl border flex items-center gap-2.5 text-xs text-[#4D5D4E]"
              >
                <Clock className="w-4 h-4 text-[#D96528] shrink-0" />
                <span data-i18n="contact.responsePromise">{t('contact.responsePromise')}</span>
              </div>

            </div>

          </div>

          {/* Contact Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--surface-card-border)',
              }}
              className={`border rounded-3xl p-6 sm:p-8 md:p-10 text-[#141C15] shadow-sm ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              
              <h3 className="text-2xl font-black mb-2 text-[#141C15]" data-i18n="contact.formTitle">
                {t('contact.formTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#4D5D4E] mb-8" data-i18n="contact.formDesc">
                {t('contact.formDesc')}
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: 'var(--inner-pill-bg)',
                    borderColor: 'var(--inner-pill-border)',
                  }}
                  className="p-8 rounded-2xl border text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#141C15]" data-i18n="contact.successTitle">
                    {t('contact.successTitle')}
                  </h4>
                  <p className="text-sm text-[#4D5D4E] max-w-md mx-auto leading-relaxed" data-i18n="contact.successMsg">
                    {t('contact.successMsg')}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'option1',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-[#FAF6F0] bg-[#141C15] hover:bg-[#253526] rounded-xl transition-colors cursor-pointer"
                  >
                    <span data-i18n="contact.sendAnotherBtn">{t('contact.sendAnotherBtn')}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block text-xs font-bold text-[#2C3C2D] mb-2"
                      data-i18n="contact.nameLabel"
                    >
                      {t('contact.nameLabel')} <span className="text-[#D96528]">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder={t('contact.namePlaceholder')}
                      data-i18n-placeholder="contact.namePlaceholder"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        backgroundColor: theme === 'dark' ? '#ffffff' : '#FAFAF8',
                        borderColor: '#DFD6CA',
                      }}
                      className="w-full px-4 py-3 rounded-xl border text-[#141C15] placeholder-[#9C9385] text-sm focus:outline-none focus:ring-2 focus:ring-[#D96528] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email-input"
                      className="block text-xs font-bold text-[#2C3C2D] mb-2"
                      data-i18n="contact.emailLabelInput"
                    >
                      {t('contact.emailLabelInput')} <span className="text-[#D96528]">*</span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      dir="ltr"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        backgroundColor: theme === 'dark' ? '#ffffff' : '#FAFAF8',
                        borderColor: '#DFD6CA',
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-[#141C15] placeholder-[#9C9385] text-sm focus:outline-none focus:ring-2 focus:ring-[#D96528] focus:border-transparent transition-all ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Service selection */}
                  <div>
                    <label
                      htmlFor="contact-service-select"
                      className="block text-xs font-bold text-[#2C3C2D] mb-2"
                      data-i18n="contact.serviceLabel"
                    >
                      {t('contact.serviceLabel')}
                    </label>
                    <select
                      id="contact-service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        backgroundColor: theme === 'dark' ? '#ffffff' : '#FAFAF8',
                        borderColor: '#DFD6CA',
                      }}
                      className="w-full px-4 py-3 rounded-xl border text-[#141C15] text-sm focus:outline-none focus:ring-2 focus:ring-[#D96528] focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="option1" data-i18n="contact.serviceOption1">{t('contact.serviceOption1')}</option>
                      <option value="option2" data-i18n="contact.serviceOption2">{t('contact.serviceOption2')}</option>
                      <option value="option3" data-i18n="contact.serviceOption3">{t('contact.serviceOption3')}</option>
                      <option value="option4" data-i18n="contact.serviceOption4">{t('contact.serviceOption4')}</option>
                      <option value="option5" data-i18n="contact.serviceOption5">{t('contact.serviceOption5')}</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-bold text-[#2C3C2D] mb-2"
                      data-i18n="contact.messageLabel"
                    >
                      {t('contact.messageLabel')} <span className="text-[#D96528]">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      placeholder={t('contact.messagePlaceholder')}
                      data-i18n-placeholder="contact.messagePlaceholder"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        backgroundColor: theme === 'dark' ? '#ffffff' : '#FAFAF8',
                        borderColor: '#DFD6CA',
                      }}
                      className="w-full px-4 py-3 rounded-xl border text-[#141C15] placeholder-[#9C9385] text-sm focus:outline-none focus:ring-2 focus:ring-[#D96528] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button in Burnt Orange */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#D96528] hover:bg-[#C2551C] disabled:bg-[#D96528]/60 active:scale-[0.99] rounded-xl shadow-lg shadow-[#D96528]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span data-i18n="contact.submittingBtn">{t('contact.submittingBtn')}</span>
                      </>
                    ) : (
                      <>
                        <span data-i18n="contact.submitBtn">{t('contact.submitBtn')}</span>
                        <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#7A8B7B] text-center pt-2" data-i18n="contact.privacyNote">
                    {t('contact.privacyNote')}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});
