import {
  Mic,
  Video,
  DollarSign,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Activity,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Audio Diagnostics (Gemini 3 Pro)',
    description: 'Record your engine sound for 5 seconds. TensorFlow Lite performs on-device classification (<100ms), then Gemini 3 Pro analyzes audio waveforms and cross-validates results for 95%+ accuracy.',
    details: [
      'Severity scoring (1-10)',
      'Repair cost estimation',
      'Urgency assessment'
    ]
  },
  {
    icon: Video,
    title: 'Video Diagnostics (Gemini 3 Pro)',
    description: 'Record your exhaust pipe for 10 seconds. ML Kit detects smoke type and vibration patterns, while Gemini analyzes for specific issues like oil burning or coolant leaks.',
    details: [
      'Blue/White/Black smoke analysis',
      'Vibration pattern detection',
      'Component failure ID'
    ]
  },
  {
    icon: DollarSign,
    title: 'AI Price Estimation (Gemini 3 Pro)',
    description: 'Get market-aware vehicle valuations adjusted for condition. Gemini analyzes diagnostic findings, maintenance history, and real-time market depreciation factors.',
    details: [
      'Condition-adjusted value',
      'Regional price variations',
      'Future value prediction'
    ]
  },
  {
    icon: BookOpen,
    title: 'Smart Car Logbook (Gemini 3 Pro)',
    description: 'Track maintenance history with AI-powered predictions. Gemini\'s 1M-token context window processes your entire service history to predict upcoming needs.',
    details: [
      'Oil change prediction',
      'Major service milestones',
      'Preventive alerts'
    ]
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Assistant (Gemini 3 Flash)',
    description: 'Ask questions in natural language. The assistant is context-aware, knowing your car model, previous diagnostics, and maintenance records.',
    details: [
      'Natural language Q&A',
      'Context-aware responses',
      'Maintenance advice'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Trust Report (Anti-Scam Shield)',
    description: 'Combine all diagnostic data into a comprehensive health report. Includes an AI Health Score and "Verify this claim" mode to combat scam quotes.',
    details: [
      'AI Health Score (0-100)',
      'Issue prioritization',
      'PDF export & scam verify'
    ]
  }
];

const homeScreens = [
  '/assets/images/home.jpeg',
  '/assets/images/home-3.jpeg',
  '/assets/images/im.jpeg'
];

const toolScreens = [
  '/assets/images/all-tools.jpeg',
  '/assets/images/audio.jpeg',
  '/assets/images/vedio.jpeg',
  '/assets/images/vedion-scren.jpeg',
  '/assets/images/price.jpeg'
];

const logbookScreens = [
  '/assets/images/cranetlog.jpeg',
  '/assets/images/cranetlog1.jpeg',
  '/assets/images/cranetlog2.jpeg',
  '/assets/images/cranetlog3.jpeg',
  '/assets/images/cranetlog4.jpeg'
];

const aiScreens = [
  '/assets/images/chtabot.jpeg',
  '/assets/images/chtabot-6.jpeg',
  '/assets/images/chatbo-2.jpeg'
];

// Combine all screens for the "train" flow
const allScreens = [
  ...homeScreens,
  ...toolScreens,
  ...logbookScreens,
  ...aiScreens
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-midnight-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy to-midnight-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-teal/20 to-transparent" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="section-container text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-teal/10 border border-electric-teal/20 mb-6">
            <Activity className="w-4 h-4 text-electric-teal" />
            <span className="text-sm font-medium text-electric-teal">Live Demo</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-text-primary">See It In </span>
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            AutoBrain transforms your Android device into a professional automotive diagnostic
            assistant using Google Gemini as its brain. The application orchestrates three
            AI systems in harmony to deliver professional-grade results.
          </p>
        </div>

        {/* Subsection 1: Train-like Scrolling Flow */}
        <div className="mb-32 relative">
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-midnight-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-midnight-black to-transparent pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-6 animate-scroll-x min-w-full">
              {/* First Set */}
              {allScreens.map((src, index) => (
                <div
                  key={`original-${index}`}
                  className="relative flex-none w-[280px] h-[580px] rounded-[32px] overflow-hidden border border-border-dark shadow-2xl group transition-transform hover:scale-[1.02] duration-300"
                >
                  <img
                    src={src}
                    alt={`App Screen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {allScreens.map((src, index) => (
                <div
                  key={`dupe-${index}`}
                  className="relative flex-none w-[280px] h-[580px] rounded-[32px] overflow-hidden border border-border-dark shadow-2xl group transition-transform hover:scale-[1.02] duration-300"
                >
                  <img
                    src={src}
                    alt={`App Screen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 2: Detailed Feature Grid */}
        <div className="section-container">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Core Capabilities
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-teal to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-slate-gray/30 rounded-2xl p-8 border border-border-dark hover:border-electric-teal/50 transition-all duration-300 hover:bg-slate-gray/50"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-electric-teal/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-deep-navy border border-border-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                  <feature.icon className="w-7 h-7 text-electric-teal" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-electric-teal shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
