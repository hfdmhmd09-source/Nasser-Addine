import React, { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact, ContactRef } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';

function PortfolioApp() {
  const contactRef = useRef<ContactRef>(null);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        contactRef.current?.focusForm();
      }, 500);
    }
  };

  const handleProjectsClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForInquiry = (projectName: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      contactRef.current?.setProjectTopic(projectName);
      setTimeout(() => {
        contactRef.current?.focusForm();
      }, 500);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--canvas-bg)',
        color: 'var(--text-primary)',
      }}
      className="min-h-screen selection:bg-[#D96528] selection:text-white flex flex-col font-sans transition-colors duration-200"
    >
      {/* Fixed Navigation Bar with Language Switcher & Theme Toggle */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. الواجهة الرئيسية */}
        <Hero
          onContactClick={handleContactClick}
          onProjectsClick={handleProjectsClick}
        />

        {/* 2. من أنا */}
        <About onContactClick={handleContactClick} />

        {/* 3. المهارات */}
        <Skills />

        {/* 4. أعمالي */}
        <Portfolio onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* 5. آراء العملاء */}
        <Testimonials />

        {/* 6. تواصل معي */}
        <Contact ref={contactRef} />
      </main>

      {/* 7. تذييل بسيط */}
      <Footer />

      {/* Floating Day / Night Toggle (ليل / نهار) */}
      <FloatingThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PortfolioApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}
