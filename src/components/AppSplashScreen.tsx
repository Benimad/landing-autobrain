/**
 * AutoBrain Splash Screen Component
 * Displays inside the phone mockup for a professional look
 */
export function AppSplashScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0a1628] to-[#0d1117] relative overflow-hidden">
      {/* Logo - Car with Brain */}
      <div className="mb-4">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Brain */}
          <g transform="translate(35, 5)">
            {/* Left brain hemisphere */}
            <path
              d="M25 8C20 8 16 12 16 17C14 17 12 19 12 22C10 22 8 24 8 27C8 30 10 32 12 33C12 36 14 38 17 38C17 40 19 42 22 42C24 42 26 41 27 39"
              stroke="url(#brainGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right brain hemisphere */}
            <path
              d="M25 8C30 8 34 12 34 17C36 17 38 19 38 22C40 22 42 24 42 27C42 30 40 32 38 33C38 36 36 38 33 38C33 40 31 42 28 42C26 42 24 41 23 39"
              stroke="url(#brainGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Brain details - left */}
            <circle cx="18" cy="22" r="2" fill="#2DD4BF" />
            <circle cx="14" cy="28" r="1.5" fill="#2DD4BF" />
            <circle cx="20" cy="32" r="1.5" fill="#2DD4BF" />
            {/* Brain details - right */}
            <circle cx="32" cy="22" r="2" fill="#2DD4BF" />
            <circle cx="36" cy="28" r="1.5" fill="#2DD4BF" />
            <circle cx="30" cy="32" r="1.5" fill="#2DD4BF" />
            {/* Center line */}
            <line x1="25" y1="12" x2="25" y2="38" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="2 2" />
          </g>
          
          {/* Car body */}
          <g transform="translate(10, 45)">
            {/* Car outline */}
            <path
              d="M20 25C15 25 10 27 8 30L5 35C3 37 2 40 2 43V48C2 50 4 52 6 52H10C10 48 13 45 17 45C21 45 24 48 24 52H76C76 48 79 45 83 45C87 45 90 48 90 52H94C96 52 98 50 98 48V43C98 40 97 37 95 35L92 30C90 27 85 25 80 25H20Z"
              stroke="url(#carGradient)"
              strokeWidth="2"
              fill="none"
            />
            {/* Windshield */}
            <path
              d="M25 25L30 15H70L75 25"
              stroke="url(#carGradient)"
              strokeWidth="2"
              fill="none"
            />
            {/* Front grille */}
            <path
              d="M35 35H65"
              stroke="#2DD4BF"
              strokeWidth="2"
            />
            {/* Headlights */}
            <ellipse cx="15" cy="35" rx="5" ry="3" stroke="#2DD4BF" strokeWidth="1.5" fill="none" />
            <ellipse cx="85" cy="35" rx="5" ry="3" stroke="#2DD4BF" strokeWidth="1.5" fill="none" />
            {/* Wheels */}
            <circle cx="17" cy="52" r="6" stroke="#1a5f5a" strokeWidth="2" fill="none" />
            <circle cx="83" cy="52" r="6" stroke="#1a5f5a" strokeWidth="2" fill="none" />
            {/* A logo on car */}
            <text x="50" y="40" textAnchor="middle" fill="#2DD4BF" fontSize="10" fontWeight="bold">A</text>
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#5EEAD4" />
            </linearGradient>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* App Name */}
      <h1 className="text-2xl font-bold mb-1">
        <span className="text-[#14b8a6]">Auto</span>
        <span className="text-[#2DD4BF]">Brain</span>
      </h1>
      
      {/* Tagline */}
      <p className="text-[#8B949E] text-xs mb-8">AI Diagnostics & Valuation</p>

      {/* App Name Large */}
      <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">AutoBrain</h2>
      
      {/* Underline */}
      <div className="w-32 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#2DD4BF] mb-12 rounded-full" />

      {/* Loading Bar */}
      <div className="w-48 h-1 bg-[#1a2332] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#14b8a6] to-[#2DD4BF] rounded-full animate-loading"
          style={{
            width: '60%',
            animation: 'loading 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* CSS for loading animation */}
      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
