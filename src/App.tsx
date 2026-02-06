import { useRef } from 'react';
import {
  HeroSection,
  FeaturesSection,
  DownloadSection,
  Footer,
  StickyDownloadButton,
  DemoPhoneSection
} from './components';

function App() {
  const demoRef = useRef<HTMLDivElement>(null);

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
      <Footer />

      {/* Sticky Download Button (appears on scroll) */}
      <StickyDownloadButton onDownload={handleDownload} />
    </div>
  );
}

export default App;
