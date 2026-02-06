import {
  Mic,
  Video,
  DollarSign,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Audio Diagnostics',
    model: 'AI Powered',
    description: 'Record your engine sound for just 5 seconds. Our advanced AI performs instant on-device classification, then analyzes audio waveforms with 95%+ accuracy to identify potential issues.',
    details: [
      'Severity scoring (1-10)',
      'Repair cost estimation',
      'Urgency assessment'
    ]
  },
  {
    icon: Video,
    title: 'Video Analysis',
    model: 'AI Powered',
    description: 'Record your exhaust pipe for 10 seconds. Our AI detects smoke type and vibration patterns, analyzing for specific issues like oil burning or coolant leaks.',
    details: [
      'Blue/White/Black smoke detection',
      'Vibration pattern analysis',
      'Component failure identification'
    ]
  },
  {
    icon: DollarSign,
    title: 'Smart Valuation',
    model: 'AI Powered',
    description: 'Get market-aware vehicle valuations adjusted for your car\'s actual condition. Our AI analyzes diagnostic findings and real-time market depreciation factors.',
    details: [
      'Condition-adjusted pricing',
      'Regional market variations',
      'Future value predictions'
    ]
  },
  {
    icon: BookOpen,
    title: 'Maintenance Logbook',
    model: 'AI Powered',
    description: 'Track your maintenance history with AI-powered predictions. Our system processes your entire service history to predict upcoming maintenance needs.',
    details: [
      'Oil change predictions',
      'Major service milestones',
      'Preventive maintenance alerts'
    ]
  },
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    model: 'Chat Support',
    description: 'Ask questions in natural language. Your AI assistant is context-aware, knowing your car model, previous diagnostics, and complete maintenance records.',
    details: [
      'Natural language Q&A',
      'Context-aware responses',
      'Personalized maintenance advice'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Health Report',
    model: 'Trust Score',
    description: 'Get a comprehensive health report combining all diagnostic data. Includes an AI Health Score and verification tools to help you avoid scam repair quotes.',
    details: [
      'Overall health score (0-100)',
      'Issue prioritization',
      'Shareable PDF reports'
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
    <section className="section-spacing relative overflow-hidden" style={{ background: 'var(--color-midnight-black)' }}>
      {/* Background Elements - Coordinated with midnight-black theme */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--color-surface-1), var(--color-midnight-black))' }} />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(45, 212, 191, 0.2), transparent)' }} />

      {/* Ambient glow - subtle teal accent for depth */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] blur-[140px] rounded-full pointer-events-none"
        style={{ background: 'rgba(45, 212, 191, 0.06)' }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="section-container text-center mb-12 sm:mb-16">
          <div className="badge-teal mb-6">
            <Activity className="w-4 h-4" />
            <span>App Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span style={{ color: 'var(--color-text-primary)' }}>See </span>
            <span className="gradient-text">AutoBrain</span>
            <span style={{ color: 'var(--color-text-primary)' }}> in Action</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Transform your Android device into a professional automotive diagnostic assistant. 
            Powered by advanced AI that understands your car like an expert mechanic.
          </p>
        </div>

        {/* Subsection 1: Professional Scrolling Phone Mockups */}
        <div className="mb-20 sm:mb-32 relative">
          {/* Gradient Masks for smooth fade edges - coordinated with section background */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-midnight-black), transparent)' }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--color-midnight-black), transparent)' }}
          />

          {/* Scrolling Container with Phone Mockups */}
          <div className="flex w-full overflow-hidden py-8">
            <div className="flex gap-6 sm:gap-8 animate-scroll-x min-w-full">
              {/* First Set of Phones */}
              {allScreens.map((src, index) => (
                <div
                  key={`original-${index}`}
                  className="relative flex-none group"
                  style={{ perspective: '1000px' }}
                >
                  {/* Subtle glow behind each phone - matching video section design */}
                  <div 
                    className="absolute inset-0 blur-3xl rounded-full scale-75 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: 'rgba(45, 212, 191, 0.12)' }}
                  />

                  {/* Phone Mockup - consistent with DemoPhoneSection */}
                  <div 
                    className="phone-mockup relative z-10 transition-all duration-500 group-hover:scale-105"
                    style={{
                      width: '260px',
                      height: '540px',
                      background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-midnight-black))',
                      borderRadius: '38px',
                      padding: '11px',
                      boxShadow: `
                        0 0 40px rgba(45, 212, 191, 0.25),
                        0 20px 45px rgba(0, 0, 0, 0.5),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                      `
                    }}
                  >
                    {/* Notch */}
                    <div
                      style={{
                        content: '',
                        position: 'absolute',
                        top: '18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '75px',
                        height: '22px',
                        background: 'var(--color-midnight-black)',
                        borderRadius: '14px',
                        zIndex: 10
                      }}
                    />

                    {/* Screen */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        background: 'var(--color-midnight-black)'
                      }}
                    >
                      <img
                        src={src}
                        alt={`AutoBrain App Screen ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Hover overlay - subtle interaction feedback */}
                    <div 
                      className="absolute inset-0 rounded-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ 
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(45, 212, 191, 0.1))',
                        border: '1px solid transparent',
                        borderImageSource: 'linear-gradient(135deg, transparent, rgba(45, 212, 191, 0.3))',
                        borderImageSlice: 1
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {allScreens.map((src, index) => (
                <div
                  key={`dupe-${index}`}
                  className="relative flex-none group"
                  style={{ perspective: '1000px' }}
                >
                  <div 
                    className="absolute inset-0 blur-3xl rounded-full scale-75 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: 'rgba(45, 212, 191, 0.12)' }}
                  />

                  <div 
                    className="phone-mockup relative z-10 transition-all duration-500 group-hover:scale-105"
                    style={{
                      width: '260px',
                      height: '540px',
                      background: 'linear-gradient(145deg, var(--color-surface-2), var(--color-midnight-black))',
                      borderRadius: '38px',
                      padding: '11px',
                      boxShadow: `
                        0 0 40px rgba(45, 212, 191, 0.25),
                        0 20px 45px rgba(0, 0, 0, 0.5),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                      `
                    }}
                  >
                    <div
                      style={{
                        content: '',
                        position: 'absolute',
                        top: '18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '75px',
                        height: '22px',
                        background: 'var(--color-midnight-black)',
                        borderRadius: '14px',
                        zIndex: 10
                      }}
                    />

                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        background: 'var(--color-midnight-black)'
                      }}
                    >
                      <img
                        src={src}
                        alt={`AutoBrain App Screen ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div 
                      className="absolute inset-0 rounded-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ 
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(45, 212, 191, 0.1))',
                        border: '1px solid transparent',
                        borderImageSource: 'linear-gradient(135deg, transparent, rgba(45, 212, 191, 0.3))',
                        borderImageSlice: 1
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling indicator - helpful context */}
          <div className="text-center mt-8">
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-muted)' }}>
              ↔ Hover over any phone to pause scrolling • {allScreens.length} app screens showcased
            </p>
          </div>
        </div>

        {/* Subsection 2: Detailed Feature Grid */}
        <div className="section-container">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Powerful Features
            </h3>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, var(--color-electric-teal), transparent)' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-electric-teal/50 hover:bg-surface-2/50"
                style={{ 
                  background: 'rgba(45, 55, 72, 0.3)',
                  border: '1px solid var(--color-border)'
                }}
              >
                {/* Hover Glow */}
                <div 
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
                  style={{ background: 'linear-gradient(to bottom right, rgba(45, 212, 191, 0.2), transparent)' }}
                />

                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ 
                      background: 'var(--color-surface-1)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--color-electric-teal)' }} />
                  </div>
                  <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(45, 212, 191, 0.1)' }}>
                    <Sparkles className="w-3 h-3" style={{ color: 'var(--color-electric-teal)' }} />
                    <span style={{ color: 'var(--color-electric-teal)' }}>{feature.model}</span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h4>
                <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm group-hover:text-text-secondary transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-electric-teal)' }} />
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
