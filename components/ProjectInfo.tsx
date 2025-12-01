
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, Download } from 'lucide-react';
import { Project } from '../types';
import { PORTFOLIO_OWNER } from '../constants';

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className="mt-3 pb-4 max-w-[850px]">
      <h1 className="text-xl font-bold mb-3">{project.title}</h1>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Channel Info */}
        <div className="flex items-center gap-3">
          <img src={PORTFOLIO_OWNER.avatar} alt={PORTFOLIO_OWNER.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <h3 className="font-semibold text-base cursor-pointer hover:text-gray-300 transition">{PORTFOLIO_OWNER.name}</h3>
            <span className="text-xs text-yt-textSec">{PORTFOLIO_OWNER.subscribers} subscribers</span>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm ml-4 hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <div className="flex items-center bg-[#222222] rounded-full h-9">
             <button className="flex items-center gap-2 px-4 h-full border-r border-[#3e3e3e] hover:bg-yt-hover rounded-l-full transition">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm font-medium">4.5K</span>
             </button>
             <button className="px-3 h-full hover:bg-yt-hover rounded-r-full transition">
                <ThumbsDown className="w-5 h-5" />
             </button>
          </div>
          <button className="flex items-center gap-2 bg-[#222222] px-4 h-9 rounded-full hover:bg-yt-hover transition whitespace-nowrap">
             <Share2 className="w-5 h-5" />
             <span className="text-sm font-medium">Share</span>
          </button>
          
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#222222] px-4 h-9 rounded-full hover:bg-yt-hover transition whitespace-nowrap text-white no-underline"
          >
             <Download className="w-5 h-5" />
             <span className="text-sm font-medium">Code</span>
          </a>

          <button className="bg-[#222222] w-9 h-9 flex items-center justify-center rounded-full hover:bg-yt-hover transition shrink-0">
             <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Description Box */}
      <div className="mt-4 bg-[#222222] rounded-xl p-3 cursor-pointer hover:bg-[#333333] transition relative group"
           onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
        <div className="flex gap-2 text-sm font-bold mb-1">
          <span>{project.views} views</span>
          <span>{project.uploadedAt}</span>
          <span className="text-yt-textSec">#{project.category.replace(/\s/g, '')}</span>
        </div>
        
        <div className={`text-sm whitespace-pre-line leading-5 ${!isDescriptionExpanded ? 'line-clamp-2' : ''}`}>
          {project.description}
          <br /><br />
          <div className="flex items-center gap-2">
            <span className="font-bold">Project Source:</span>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" onClick={(e) => e.stopPropagation()}>
              {project.githubUrl}
            </a>
          </div>
          <br />
          <span className="font-bold">Tech Stack:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map(tech => (
              <span key={tech} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button className="text-sm font-bold mt-1 text-yt-textSec group-hover:text-white transition">
           {isDescriptionExpanded ? 'Show less' : '...more'}
        </button>
      </div>
    </div>
  );
};

export default ProjectInfo;
