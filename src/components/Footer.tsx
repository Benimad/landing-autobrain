import { Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(45, 212, 191, 0.2)' }}
            >
              <Cpu className="w-5 h-5" style={{ color: 'var(--color-electric-teal)' }} />
            </div>
            <span className="text-base sm:text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
              AutoBrain
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm order-3 sm:order-2" style={{ color: 'var(--color-text-muted)' }}>
            © {currentYear} AutoBrain. All rights reserved.
          </p>

          {/* Tagline */}
          <p className="text-xs sm:text-sm order-2 sm:order-3" style={{ color: 'var(--color-text-muted)' }}>
            AI-Native Automotive Diagnostics
          </p>
        </div>
      </div>
    </footer>
  );
}
