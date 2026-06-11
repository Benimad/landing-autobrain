import { useRef, useEffect, useState } from 'react';
import {
  HeroSection,
  FeaturesSection,
  DownloadSection,
  Footer,
  StickyDownloadButton,
  DemoPhoneSection,
  PrivacyPolicy
} from './components';

function App() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');

  // Handle pathname-based routing
  useEffect(() => {
    const handlePathChange = () => {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname === '/privacy' || pathname === '/privacy/') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handlePathChange();
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const handleWatchDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle APK download with visual feedback
  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = 'https://github.com/Benimad/landing-autobrain/raw/main/public/apk/AutoBrain.apk';
    link.download = 'AutoBrain.apk';
    link.click();
  };

  // Navigate to privacy policy
  const handleNavigateToPrivacy = () => {
    window.history.pushState(null, '', '/privacy');
    setCurrentPage('privacy');
    window.scrollTo(0, 0);
  };

  // Navigate back to home
  const handleBackToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Section 1: Hero */}
      <HeroSection onDownload={handleDownload} onWatchDemo={handleWatchDemo} />

      {/* Section 1.5: Demo Videos */}
      <DemoPhoneSection ref={demoRef} />

      {/* Section 2: Features & App Preview */}
      <FeaturesSection />

      {/* Section 3: Download CTA */}
      <DownloadSection onDownload={handleDownload} />

      {/* Footer */}
      <Footer onPrivacyClick={handleNavigateToPrivacy} />

      {/* Sticky Download Button (appears on scroll) */}
      <StickyDownloadButton onDownload={handleDownload} />
    </div>
  );
}

export default App;
