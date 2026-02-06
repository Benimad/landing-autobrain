import { useRef, useState, useEffect, forwardRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoItem {
  id: number;
  src: string;
  title: string;
  poster?: string;
}

export const DemoPhoneSection = forwardRef<HTMLElement, {}>((_, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  // Merge refs function
  const setRefs = (element: HTMLElement | null) => {
    sectionRef.current = element;
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.animate-me');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const videos: VideoItem[] = [
    {
      id: 1,
      src: "/assets/video/AUDIO+VEDIO-TEST-REAL-CAR.mp4",
      title: "Real Car Test",
    },
    {
      id: 2,
      src: "/assets/video/WhatsApp-Video-2026-02-03-at-9.02.06-PM.mp4",
      title: "App Interface",
    },
    {
      id: 3,
      src: "/assets/video/WhatsApp-Video-2026-02-04-at-10.36.42-PM.mp4",
      title: "Diagnostics Demo",
    }
  ];

  const handlePlay = (id: number, videoElement: HTMLVideoElement) => {
    if (playingVideoId === id) {
      videoElement.pause();
      setPlayingVideoId(null);
    } else {
      // Pause all other videos
      document.querySelectorAll('video').forEach(v => v.pause());
      setPlayingVideoId(null);

      videoElement.play();
      setPlayingVideoId(id);
    }
  };

  return (
    <section
      id="demo"
      ref={setRefs}
      className="section-spacing relative overflow-hidden"
      style={{ background: 'var(--color-midnight-black)' }}
    >
      {/* Background decoration - coordinated with midnight black theme */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, var(--color-midnight-black), var(--color-surface-1))' }}
      />
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(45, 212, 191, 0.2), transparent)' }}
      />

      {/* Ambient glow - subtle teal accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] blur-[120px] rounded-full pointer-events-none"
        style={{ background: 'rgba(45, 212, 191, 0.08)' }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-12 sm:mb-20 animate-me opacity-0 translate-y-10 transition-all duration-700">
          <div className="badge-teal mb-6 sm:mb-8">
            <Play className="w-4 h-4 fill-current" />
            <span>Live Demo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            See <span className="gradient-text">AutoBrain</span> in Action
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Experience the power of AI diagnostics right on your phone.
            Watch how our advanced AI engine analyzes your vehicle in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-10 flex-wrap">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="animate-me opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                {/* Subtle glow behind each phone - coordinated with teal accent */}
                <div 
                  className="absolute inset-0 blur-3xl rounded-full scale-75 opacity-60"
                  style={{ background: 'rgba(45, 212, 191, 0.15)' }}
                />

                {/* Phone Mockup Frame - matches design system */}
                <div className="phone-mockup relative z-10 group transition-all duration-500 hover:scale-105">
                  <div className="phone-mockup-screen relative" style={{ background: 'var(--color-midnight-black)' }}>
                    {/* Video Element */}
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      playsInline
                      loop
                      onClick={(e) => handlePlay(video.id, e.currentTarget)}
                      onEnded={() => setPlayingVideoId(null)}
                      onPause={() => setPlayingVideoId((prev) => prev === video.id ? null : prev)}
                      aria-label={`Play ${video.title} demo video`}
                    />

                    {/* Custom Play/Pause Overlay - polished glass effect */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${playingVideoId === video.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                      style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))' }}
                      onClick={(e) => {
                        const videoEl = e.currentTarget.previousElementSibling as HTMLVideoElement;
                        handlePlay(video.id, videoEl);
                      }}
                    >
                      {/* Play Button - glass morphism design */}
                      <button 
                        className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4"
                        style={{ 
                          background: 'rgba(45, 212, 191, 0.2)',
                          backdropFilter: 'blur(16px)',
                          border: '2px solid rgba(45, 212, 191, 0.4)',
                          boxShadow: '0 8px 32px rgba(45, 212, 191, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                        }}
                        aria-label={`Play ${video.title}`}
                      >
                        {playingVideoId === video.id ? (
                          <Pause className="w-8 h-8" style={{ color: 'var(--color-electric-teal)' }} />
                        ) : (
                          <Play className="w-8 h-8 ml-1" style={{ color: 'var(--color-electric-teal)', fill: 'var(--color-electric-teal)' }} />
                        )}
                      </button>

                      {/* Title - clean typography */}
                      <div 
                        className="px-6 py-3 rounded-full text-center backdrop-blur-md"
                        style={{ 
                          background: 'rgba(21, 27, 35, 0.8)',
                          border: '1px solid rgba(45, 212, 191, 0.2)'
                        }}
                      >
                        <p className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                          {video.title}
                        </p>
                      </div>
                    </div>

                    {/* Playing Indicator - subtle pulse effect */}
                    {playingVideoId === video.id && (
                      <div 
                        className="absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse"
                        style={{ 
                          background: 'var(--color-error)',
                          boxShadow: '0 0 12px var(--color-error)'
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Floating label below phone - coordinated design */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="px-4 py-2 rounded-lg text-xs font-medium backdrop-blur-sm"
                    style={{ 
                      background: 'rgba(45, 212, 191, 0.1)',
                      border: '1px solid rgba(45, 212, 191, 0.2)',
                      color: 'var(--color-electric-teal)'
                    }}
                  >
                    Tap to {playingVideoId === video.id ? 'pause' : 'play'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a note below the videos */}
        <div className="text-center mt-16 sm:mt-20">
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            💡 Click on any phone to watch the demo • All videos recorded on real devices
          </p>
        </div>
      </div>
    </section>
  );
});

DemoPhoneSection.displayName = 'DemoPhoneSection';
