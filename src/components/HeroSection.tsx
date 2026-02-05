import { Download, Play, Cpu, Car, Shield } from 'lucide-react';


interface HeroSectionProps {
  onDownload: () => void;
}

export function HeroSection({ onDownload }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-dark/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

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

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-gray/50 border border-border-dark mb-8">
              <Cpu className="w-4 h-4 text-electric-teal" />
              <span className="text-sm text-text-secondary">AI-Powered Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-text-primary">Smart Car</span>
              <br />
              <span className="gradient-text">Evaluation</span>
              <br />
              <span className="text-text-primary">Made Simple</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8">
              AutoBrain uses advanced AI to analyze your vehicle's condition,
              providing instant diagnostics and accurate health scores in seconds.
            </p>

            {/* Features Mini List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {[
                { icon: Car, text: 'Vehicle Analysis' },
                { icon: Shield, text: 'Trusted Results' },
                { icon: Cpu, text: 'AI Powered' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-text-secondary">
                  <item.icon className="w-4 h-4 text-electric-teal" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onDownload}
                className="btn-primary text-xl px-10 py-5 animate-pulse-glow"
              >
                <Download className="w-6 h-6" />
                Download APK
              </button>

              <a
                href="#demo"
                className="btn-secondary"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Trust Indicator */}
            <p className="mt-6 text-sm text-text-muted">
              📱 Android 8.0+ • 🔒 No account required • ⚡ 160MB
            </p>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-down">
            <div className="relative">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 bg-electric-teal/20 blur-3xl rounded-full scale-75" />

              {/* Phone Mockup */}
              <div className="phone-mockup relative z-10 animate-float">
                <div className="phone-mockup-screen">
                  <img
                    src="/assets/images/im.jpeg"
                    alt="App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-8 glass-card p-3 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-success-green/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-success-green" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Health Score</p>
                    <p className="text-sm font-bold text-success-green">92/100</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-8 glass-card p-3 animate-float" style={{ animationDelay: '-4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-electric-teal/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-electric-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">AI Analysis</p>
                    <p className="text-sm font-bold text-electric-teal">Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-electric-teal rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
