import { Download, Smartphone, Shield, Zap } from 'lucide-react';

interface DownloadSectionProps {
  onDownload: () => void;
}

export function DownloadSection({ onDownload }: DownloadSectionProps) {
  return (
    <section id="download" className="section-spacing relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--color-surface-1), var(--color-midnight-black), var(--color-midnight-black))' }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-3xl rounded-full"
          style={{ background: 'rgba(45, 212, 191, 0.1)' }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* CTA Card */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="badge-teal mb-6 sm:mb-8">
            <Smartphone className="w-4 h-4" />
            <span>Available Now</span>
          </div>

          {/* Headline - Professional, inviting */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span style={{ color: 'var(--color-text-primary)' }}>Experience the Future of</span>
            <br />
            <span className="gradient-text">Vehicle Diagnostics</span>
          </h2>

          <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Download now and experience AI-powered car evaluation.
          </p>

          {/* Download Button */}
          <button 
            onClick={onDownload}
            className="btn-primary-cta text-xl sm:text-2xl px-10 sm:px-14 py-5 sm:py-6 mb-8 sm:mb-10"
            aria-label="Download AutoBrain APK"
          >
            <Download className="w-6 h-6 sm:w-7 sm:h-7" />
            Download for Android
          </button>

          {/* Key Benefits - Professional features */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: 'var(--color-electric-teal)' }} />
              <span className="text-sm sm:text-base">Instant Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: 'var(--color-electric-teal)' }} />
              <span className="text-sm sm:text-base">Expert Diagnostics</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" style={{ color: 'var(--color-electric-teal)' }} />
              <span className="text-sm sm:text-base">Easy to Use</span>
            </div>
          </div>

          {/* Installation Steps */}
          <div 
            className="mt-12 p-6 rounded-xl text-left max-w-md mx-auto"
            style={{ 
              background: 'rgba(45, 55, 72, 0.3)',
              border: '1px solid var(--color-border)'
            }}
          >
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text-primary)' }}>
              <Smartphone className="w-4 h-4" style={{ color: 'var(--color-electric-teal)' }} />
              Quick Install Guide
            </h4>
            <ol className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-electric-teal)' }}>1.</span>
                Download the APK file to your Android device
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-electric-teal)' }}>2.</span>
                Enable "Install from unknown sources" in your device Settings
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-electric-teal)' }}>3.</span>
                Open the downloaded file and follow the installation prompts
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-electric-teal)' }}>4.</span>
                Launch AutoBrain and start diagnosing your vehicle!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
