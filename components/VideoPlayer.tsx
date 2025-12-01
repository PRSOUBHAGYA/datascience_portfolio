import React, { useRef, useEffect } from 'react';
import { Project } from '../types';

interface VideoPlayerProps {
  project: Project;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      // Auto-play is restricted by many browsers unless muted, but for a portfolio "click to play" is often better UX anyway.
      // We will attempt to play.
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [project]);

  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        controls
        controlsList="nodownload"
        poster={project.thumbnailUrl}
        src={project.videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      {/* Overlay gradient only visible when controls are active or paused - handled by browser mostly, but we can add styling */}
    </div>
  );
};

export default VideoPlayer;