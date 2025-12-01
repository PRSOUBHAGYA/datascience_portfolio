
import React, { useState } from 'react';
import { Project } from '../types';

interface PlaylistProps {
  projects: Project[];
  currentProjectId: string;
  onProjectSelect: (project: Project) => void;
  watchedIds: Set<string>;
}

type FilterType = 'all' | 'watched' | 'not-watched';

const Playlist: React.FC<PlaylistProps> = ({ projects, currentProjectId, onProjectSelect, watchedIds }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'watched') return watchedIds.has(project.id);
    if (activeFilter === 'not-watched') return !watchedIds.has(project.id);
    return true;
  });

  const getButtonStyle = (filter: FilterType) => {
    return activeFilter === filter
      ? "px-3 py-1.5 bg-yt-text text-yt-black text-sm font-semibold rounded-lg whitespace-nowrap transition-colors"
      : "px-3 py-1.5 bg-yt-hover text-white text-sm font-medium rounded-lg hover:bg-[#4d4d4d] whitespace-nowrap transition-colors";
  };

  return (
    <div className="flex flex-col gap-2 w-full lg:w-[400px] shrink-0">
      <div className="flex gap-2 mb-2 overflow-x-auto pb-2 scrollbar-hide">
        <button 
          className={getButtonStyle('all')}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={getButtonStyle('watched')}
          onClick={() => setActiveFilter('watched')}
        >
          Already watched
        </button>
        <button 
          className={getButtonStyle('not-watched')}
          onClick={() => setActiveFilter('not-watched')}
        >
          Not watched
        </button>
      </div>

      {filteredProjects.length === 0 && (
         <div className="text-center py-10 text-yt-textSec text-sm">
            No videos found for this filter.
         </div>
      )}

      {filteredProjects.map((project) => {
        const isWatched = watchedIds.has(project.id);
        
        return (
          <div 
            key={project.id} 
            className={`flex gap-2 cursor-pointer group ${project.id === currentProjectId ? 'bg-[#222222] rounded-xl p-1 -mx-1' : ''}`}
            onClick={() => onProjectSelect(project)}
          >
            <div className="relative w-[168px] h-[94px] shrink-0 rounded-lg overflow-hidden">
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-transform duration-200 ${project.id === currentProjectId ? '' : 'group-hover:scale-105'} ${isWatched && project.id !== currentProjectId ? 'opacity-80 grayscale-[0.3]' : ''}`} 
              />
              <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded font-medium">
                {project.duration}
              </span>
              {project.id === currentProjectId && (
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-xs font-bold uppercase tracking-wider">Now Playing</span>
                 </div>
              )}
              {isWatched && project.id !== currentProjectId && (
                <div className="absolute bottom-1 left-1 bg-black/60 text-yt-textSec text-[10px] px-1 rounded font-medium uppercase">
                  Watched
                </div>
              )}
            </div>
            <div className="flex flex-col pt-0.5 min-w-0 pr-6 relative">
              <h3 className={`text-sm font-semibold leading-5 mb-1 line-clamp-2 ${isWatched && project.id !== currentProjectId ? 'text-yt-textSec' : 'text-white'}`}>
                {project.title}
              </h3>
              <div className="text-xs text-yt-textSec flex flex-col gap-0.5">
                <span>{project.channelName}</span>
                <div className="flex items-center">
                   <span>{project.views} views</span>
                   <span className="mx-1">•</span>
                   <span>{project.uploadedAt}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlist;
