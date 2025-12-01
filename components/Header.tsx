import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, MonitorPlay, X, Trophy, ArrowLeft } from 'lucide-react';
import { PORTFOLIO_OWNER, PROJECTS, ACHIEVEMENTS } from '../constants';
import { Project } from '../types';

interface HeaderProps {
  onSearchSelect: (project: Project) => void;
  onProfileClick: () => void;
  onMenuClick: () => void;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchSelect, onProfileClick, onMenuClick, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  // Filter projects based on search query
  const searchResults = searchQuery.trim() 
    ? PROJECTS.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (achievementsRef.current && !achievementsRef.current.contains(event.target as Node)) {
        setIsAchievementsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (project: Project) => {
    onSearchSelect(project);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-yt-black flex items-center justify-between px-4 z-50 border-b border-yt-hover/20">
      <div className="flex items-center gap-4">
        <button 
          className="p-2 hover:bg-yt-hover rounded-full transition-colors"
          onClick={onBack}
          title="Back to Welcome Page"
        >
          <ArrowLeft className="text-white w-6 h-6" />
        </button>

        <button 
          className="p-2 hover:bg-yt-hover rounded-full transition-colors"
          onClick={onMenuClick}
        >
          <Menu className="text-white w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-yt-red p-1 rounded-lg">
             <MonitorPlay className="text-white w-5 h-5" fill="currentColor" />
          </div>
          <span className="text-white text-xl font-bold tracking-tighter">CSLog by SOUBHAGYA</span>
        </div>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-[720px] ml-10 relative" ref={searchRef}>
        <div className="flex items-center w-full relative z-50">
          <div className={`flex flex-1 items-center bg-[#121212] border ${isSearchFocused ? 'border-blue-500' : 'border-[#303030]'} rounded-full ml-8 px-4 py-0.5 shadow-inner`}>
            {isSearchFocused && <Search className="w-4 h-4 mr-2 text-white hidden sm:block" />}
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full bg-transparent text-white border-none outline-none py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-yt-hover rounded-full">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
            <button className="p-2 hover:bg-yt-hover rounded-full ml-2">
              <Search className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Suggestions Dropdown */}
        {isSearchFocused && searchResults.length > 0 && (
          <div className="absolute top-full left-8 right-0 bg-[#222] border border-yt-hover rounded-xl mt-2 shadow-2xl py-2 overflow-hidden z-40">
            {searchResults.map((project) => (
              <div 
                key={project.id}
                onClick={() => handleResultClick(project)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-[#333] cursor-pointer transition-colors"
              >
                <div className="w-8 h-5 rounded overflow-hidden shrink-0">
                  <img src={project.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-white text-sm font-medium truncate">{project.title}</span>
                  <span className="text-xs text-yt-textSec">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 md:gap-4 relative" ref={achievementsRef}>
        <button 
          className="p-2 hover:bg-yt-hover rounded-full relative"
          onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
          title="Achievements"
        >
          <Trophy className="text-white w-6 h-6" />
          {ACHIEVEMENTS.length > 0 && (
            <span className="absolute top-1 right-1 bg-yt-red text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {ACHIEVEMENTS.length}
            </span>
          )}
        </button>

        {/* Achievements Dropdown */}
        {isAchievementsOpen && (
          <div className="absolute top-12 right-0 w-80 bg-[#222] border border-yt-hover rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
             <div className="px-4 py-3 border-b border-yt-hover bg-[#2a2a2a]">
               <h3 className="font-semibold text-white">Achievements</h3>
             </div>
             <div className="max-h-80 overflow-y-auto">
               {ACHIEVEMENTS.map((ach) => (
                 <div key={ach.id} className="px-4 py-3 hover:bg-[#333] border-b border-yt-hover/50 last:border-0 cursor-pointer transition-colors group">
                    <div className="flex items-start gap-3">
                       <div className="bg-yellow-600/20 p-2 rounded-full mt-1 shrink-0">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                       </div>
                       <div>
                          <p className="text-sm font-medium text-white leading-snug group-hover:text-blue-400 transition-colors">
                            {ach.title}
                          </p>
                          <p className="text-xs text-yt-textSec mt-1">{ach.date}</p>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}
        
        {/* Profile Avatar Trigger */}
        <div 
          className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-95 transition-transform ml-2 border border-transparent hover:border-white"
          onClick={onProfileClick}
          title="Watch Video Resume"
        >
           <img src={PORTFOLIO_OWNER.avatar} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;