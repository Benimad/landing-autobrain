import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StickyDownloadButtonProps {
  onDownload: () => void;
}

export function StickyDownloadButton({ onDownload }: StickyDownloadButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 animate-fade-in-up">
      <button
        onClick={onDownload}
        className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-electric-teal), var(--color-teal-dark))',
          color: 'var(--color-text-on-accent)',
          boxShadow: 'var(--shadow-glow), 0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
        aria-label="Download AutoBrain APK"
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline text-sm sm:text-base">Download APK</span>
      </button>
    </div>
  );
}
