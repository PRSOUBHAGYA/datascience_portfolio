
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_OWNER, VIDEO_RESUME_URL } from '../constants';

interface WelcomePageProps {
  onEnter: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter }) => {

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f0f0f] text-white flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] to-black -z-10" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-in fade-in duration-700 slide-in-from-bottom-4">
        
        {/* Left Side: Profile Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src={PORTFOLIO_OWNER.avatar} 
              alt={PORTFOLIO_OWNER.name} 
              className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-[#1f1f1f] shadow-2xl"
            />
          </div>
          
          <div className="space-y-2">
            {/* Removed "Welcome to" text as requested */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              SOUBHAGYA <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                RANJAN PRADHAN
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed">
            {PORTFOLIO_OWNER.bio}
          </p>

          <button 
            onClick={onEnter}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-bold tracking-wide hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-4"
          >
            Visit my profile to Hire me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Video Resume Preview */}
        <div className="order-1 lg:order-2 w-full max-w-xl mx-auto lg:mx-0 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-[#333]">
            <video 
              src={VIDEO_RESUME_URL}
              className="w-full h-full object-contain"
              controls
              controlsList="nodownload"
              playsInline
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomePage;
