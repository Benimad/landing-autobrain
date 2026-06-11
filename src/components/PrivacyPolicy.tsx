import { ArrowLeft, Mail, Globe } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-black via-surface-1 to-midnight-black">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border-subtle backdrop-blur-md bg-midnight-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-teal to-teal-dark flex items-center justify-center">
              <span className="text-text-on-accent font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold text-text-primary hidden sm:block">
              AutoBrain
            </h1>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-2 hover:bg-surface-3 text-text-primary transition-colors duration-200 border border-border"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Glassmorphism Container */}
          <div className="backdrop-blur-xl bg-surface-1/40 border border-electric-teal/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-3">
                Privacy Policy
              </h1>
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-sm">Last Updated: June 11, 2026</span>
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-electric-teal to-teal-dark rounded-full mt-4"></div>
            </div>

            {/* Introduction */}
            <p className="text-text-primary text-lg leading-relaxed mb-8">
              Welcome to AutoBrain. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") and our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We collect information that you voluntarily provide to us when you register on the App, or when you use certain features of the App.
              </p>

              <div className="space-y-6 ml-0 sm:ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-electric-teal mb-3">
                    A. Personal Information
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Name and Age:</strong> To personalize your profile and verify you meet our minimum age requirement (18+).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Email Address:</strong> Used for account authentication, password recovery, and communication.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Vehicle Information:</strong> Details about your car (Make, Model, Year, Maintenance records) to provide accurate AI diagnostics and valuations.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-electric-teal mb-3">
                    B. Sensitive Data
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Audio Recordings:</strong> We record and collect engine sound audio exclusively when you use the Engine Sound Analysis feature to provide diagnostics.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Video Recordings:</strong> We record and collect video clips of your vehicle (e.g., exhaust smoke, vibrations) exclusively when you use the Video Diagnostics feature.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Camera and Microphone Access:</strong> Required in real-time to facilitate the diagnostic recordings.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-electric-teal mb-3">
                    C. Automatically Collected Information
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Device Information:</strong> We collect Firebase Cloud Messaging (FCM) tokens to send you push notifications, alerts, and service reminders.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-electric-teal flex-shrink-0">•</span>
                      <span><strong>Usage Data:</strong> Diagnostic results, AI scores, and timestamps are logged to maintain your history.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our App, specifically to:
              </p>
              <ul className="space-y-2 text-text-secondary ml-0 sm:ml-4">
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Create, manage, and secure your account.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Analyze your engine's audio and video using AI to provide diagnostic feedback.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Estimate your vehicle's market value.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Store your maintenance records and send you reminders.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Facilitate the AI Chatbot assistant feature to answer your automotive queries.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-teal flex-shrink-0">•</span>
                  <span>Communicate with you about updates, security alerts, and administrative messages.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  3
                </span>
                Third-Party Sharing and Disclosure
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                We do not sell your personal data. We share your data only with third-party service providers necessary to provide our core features:
              </p>
              <div className="space-y-4 ml-0 sm:ml-4">
                <div className="p-4 rounded-lg bg-surface-2/50 border border-border-subtle">
                  <h3 className="font-semibold text-electric-teal mb-2">Google Firebase</h3>
                  <p className="text-text-secondary text-sm">We use Firebase Authentication to securely manage your account, Firestore to store your profile and car logs, and Firebase Storage to privately store your audio and video diagnostic files.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-2/50 border border-border-subtle">
                  <h3 className="font-semibold text-electric-teal mb-2">Google Gemini AI</h3>
                  <p className="text-text-secondary text-sm">Vehicle details, maintenance history, and diagnostic transcripts are sent to Google Gemini APIs to generate AI scores, insights, and chatbot responses.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-2/50 border border-border-subtle">
                  <h3 className="font-semibold text-electric-teal mb-2">Remove.bg / Imagin Studio</h3>
                  <p className="text-text-secondary text-sm">Vehicle details may be sent to these APIs to generate or fetch realistic car imagery for your profile.</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mt-6 italic p-4 rounded-lg bg-warning/10 border border-warning/20">
                <strong>Note:</strong> Your audio and video files are stored privately in Firebase Storage and are not shared directly with external AI services without processing.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  4
                </span>
                Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  5
                </span>
                Data Retention
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We keep your personal information, including audio and video diagnostic files, for as long as your account is active or as needed to provide you the services. Temporary diagnostic files may be automatically deleted after a specified period to conserve storage and enhance privacy.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  6
                </span>
                Your Data Rights and Account Deletion
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal data.
              </p>
              <div className="p-4 rounded-lg bg-electric-teal/10 border border-electric-teal/30">
                <h3 className="font-semibold text-electric-teal mb-2">Account Deletion</h3>
                <p className="text-text-secondary text-sm">
                  You may delete your account and all associated data directly within the App's settings via the <strong>Data Controls</strong> section, or by contacting us. Upon deletion, your profile, vehicle data, and all audio/video files stored in Firebase will be permanently removed.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  7
                </span>
                Children's Privacy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The App is not intended for users under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you become aware that a child has provided us with personal data, please contact us.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  8
                </span>
                Changes to this Privacy Policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric-teal/20 border border-electric-teal flex items-center justify-center text-electric-teal font-semibold">
                  9
                </span>
                Contact Us
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-2/50 border border-border-subtle hover:border-electric-teal/50 transition-colors">
                  <Mail size={20} className="text-electric-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Email</p>
                    <a
                      href="mailto:support@autobrain.app"
                      className="text-electric-teal hover:text-electric-teal/80 font-semibold transition-colors"
                    >
                      support@autobrain.app
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-2/50 border border-border-subtle hover:border-electric-teal/50 transition-colors">
                  <Globe size={20} className="text-electric-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Website</p>
                    <a
                      href="https://autobrain.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-teal hover:text-electric-teal/80 font-semibold transition-colors"
                    >
                      https://autobrain.app
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Last Updated Badge */}
            <div className="pt-8 border-t border-border-subtle">
              <p className="text-xs text-text-muted text-center">
                This Privacy Policy was last updated on June 11, 2026
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-surface-1/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-teal to-teal-dark flex items-center justify-center">
                  <span className="text-text-on-accent font-bold text-sm">A</span>
                </div>
                <span className="font-bold text-text-primary">AutoBrain</span>
              </div>
              <p className="text-text-secondary text-sm">
                AI-powered automotive diagnostics for the modern driver.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  <a href="#" onClick={onBack} className="hover:text-electric-teal transition-colors">
                    Back to Home
                  </a>
                </li>
                <li>
                  <a href="mailto:support@autobrain.app" className="hover:text-electric-teal transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  <span className="text-electric-teal">Privacy Policy</span>
                </li>
                <li>
                  <a href="#" className="hover:text-electric-teal transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border-subtle pt-8">
            <p className="text-center text-text-secondary text-sm">
              © 2026 AutoBrain. All rights reserved. | Built with care for privacy and security.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
