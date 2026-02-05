import { Download, Smartphone, HardDrive, CheckCircle } from 'lucide-react';

interface DownloadSectionProps {
  onDownload: () => void;
}

export function DownloadSection({ onDownload }: DownloadSectionProps) {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-midnight-black to-midnight-black" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-teal/10 blur-3xl rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* CTA Card */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-green/10 border border-success-green/30 mb-8">
            <CheckCircle className="w-4 h-4 text-success-green" />
            <span className="text-sm text-success-green">Ready for Hackathon Judging</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-text-primary">Ready to Try</span>
            <br />
            <span className="gradient-text">AutoBrain?</span>
          </h2>

          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Download now and experience AI-powered car evaluation. 
            Perfect for the Gemini 3 Hackathon demo.
          </p>

          {/* Download Button */}
          <button 
            onClick={onDownload}
            className="btn-primary text-2xl px-14 py-6 mb-8 animate-pulse-glow"
          >
            <Download className="w-7 h-7" />
            Download APK Now
          </button>

          {/* APK Info */}
          <div className="flex flex-wrap justify-center gap-6 text-text-secondary">
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-electric-teal" />
              <span>~160 MB</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-electric-teal" />
              <span>Android 8.0+</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success-green" />
              <span>No signup required</span>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mt-12 p-6 rounded-xl bg-slate-gray/30 border border-border-dark text-left max-w-md mx-auto">
            <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-electric-teal" />
              Quick Install Guide
            </h4>
            <ol className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-electric-teal font-bold">1.</span>
                Download the APK file
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal font-bold">2.</span>
                Enable "Install from unknown sources" in Settings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal font-bold">3.</span>
                Open the downloaded APK and install
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal font-bold">4.</span>
                Launch AutoBrain and start evaluating!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
