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
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <button
        onClick={onDownload}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-text-on-accent transition-all duration-300 hover:scale-105 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)',
          boxShadow: '0 0 30px rgba(45, 212, 191, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline">Download APK</span>
      </button>
    </div>
  );
}
