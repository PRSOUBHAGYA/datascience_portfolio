import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { VIDEO_RESUME_URL, PORTFOLIO_OWNER } from '../constants';

interface VideoResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoResumeModal: React.FC<VideoResumeModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-yt-hover">
        
        {/* Header/Close Button Overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
          <div className="pointer-events-auto">
             <h2 className="text-white font-bold text-lg drop-shadow-md">Video Resume</h2>
             <p className="text-gray-300 text-xs drop-shadow-md">{PORTFOLIO_OWNER.name}</p>
          </div>
          <button 
            onClick={onClose}
            className="pointer-events-auto bg-black/50 hover:bg-red-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <video 
          ref={videoRef}
          src={VIDEO_RESUME_URL}
          controls 
          controlsList="nodownload"
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoResumeModal;