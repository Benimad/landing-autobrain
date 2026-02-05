import { Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border-dark">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-electric-teal/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-electric-teal" />
            </div>
            <span className="text-lg font-bold text-text-primary">AutoBrain</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} AutoBrain. Built for Gemini 3 Hackathon.
          </p>

          {/* Made with */}
          <p className="text-sm text-text-muted">
            Made with <span className="text-error-red">❤</span> using AI
          </p>
        </div>
      </div>
    </footer>
  );
}
