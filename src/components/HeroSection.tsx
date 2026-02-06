import { Download, Play, Cpu, Car, Shield } from 'lucide-react';

interface HeroSectionProps {
  onDownload: () => void;
  onWatchDemo?: () => void;
}

export function HeroSection({ onDownload, onWatchDemo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Limited to 2 */}
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ background: 'rgba(45, 212, 191, 0.1)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl"
          style={{ 
            background: 'rgba(20, 184, 166, 0.15)',
            animation: 'float 6s ease-in-out infinite -3s'
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45, 212, 191, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45, 212, 191, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="section-container relative z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge - Professional positioning */}
            <div className="badge-neutral mb-6 sm:mb-8">
              <Cpu className="w-4 h-4" style={{ color: 'var(--color-electric-teal)' }} />
              <span>AI-Native Technology</span>
            </div>

            {/* Main Headline - Professional, production-ready */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span style={{ color: 'var(--color-text-primary)' }}>Your Car's</span>
              <br />
              <span className="gradient-text">AI Diagnostic</span>
              <br />
              <span style={{ color: 'var(--color-text-primary)' }}>Assistant</span>
            </h1>

            {/* Tagline - Clear value proposition */}
            <p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              AutoBrain is an AI-native automotive assistant built on Gemini multimodal intelligence, 
              analyzing engine sounds and videos to deliver instant, expert-level diagnostics from your phone.
            </p>

            {/* Features Mini List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                { icon: Car, text: 'Audio & Video Analysis' },
                { icon: Shield, text: 'Expert-Level Diagnostics' },
                { icon: Cpu, text: 'Instant Results' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                  <item.icon className="w-4 h-4" style={{ color: 'var(--color-electric-teal)' }} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={onDownload}
                className="btn-primary-cta text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5"
                aria-label="Download AutoBrain APK"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Download for Android
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  onWatchDemo?.();
                }}
                className="btn-secondary"
                aria-label="Watch demo video"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-down">
            <div className="relative">
              {/* Glow Effect Behind Phone */}
              <div 
                className="absolute inset-0 blur-3xl rounded-full scale-75"
                style={{ background: 'rgba(45, 212, 191, 0.2)' }}
              />

              {/* Phone Mockup */}
              <div className="phone-mockup relative z-10 animate-float">
                <div className="phone-mockup-screen">
                  <img
                    src="/assets/images/im.jpeg"
                    alt="AutoBrain App Interface showing vehicle diagnostics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div 
                className="absolute -top-4 -left-8 glass-card p-3 animate-float hidden sm:block" 
                style={{ animationDelay: '-2s' }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                  >
                    <Shield className="w-4 h-4" style={{ color: 'var(--color-success)' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Health Score</p>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-success)' }}>92/100</p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -right-8 glass-card p-3 animate-float hidden sm:block" 
                style={{ animationDelay: '-4s' }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(45, 212, 191, 0.2)' }}
                  >
                    <Cpu className="w-4 h-4" style={{ color: 'var(--color-electric-teal)' }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>AI Analysis</p>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-electric-teal)' }}>Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div 
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: '2px solid rgba(107, 114, 128, 0.5)' }}
        >
          <div 
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ background: 'var(--color-electric-teal)' }}
          />
        </div>
      </div>
    </section>
  );
}
