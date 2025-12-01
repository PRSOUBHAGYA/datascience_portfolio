
import React from 'react';
import { 
  Home, 
  FileText, 
  Brain, 
  Eye, 
  BarChart2, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  Trophy,
  Terminal,
  Instagram,
  Facebook
} from 'lucide-react';
import { PORTFOLIO_OWNER } from '../constants';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-5 px-3 py-2.5 rounded-lg cursor-pointer transition-colors text-left ${active ? 'bg-yt-hover font-medium' : 'hover:bg-yt-hover'}`}
  >
    <Icon className={`w-6 h-6 ${active ? 'text-white' : 'text-white'}`} fill={active ? "currentColor" : "none"} />
    <span className="text-sm truncate">{label}</span>
  </button>
);

interface SidebarProps {
  isOpen: boolean;
  onResumeClick: () => void;
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onResumeClick, onCategorySelect, selectedCategory }) => {
  
  // Return null if closed to completely hide it
  if (!isOpen) return null;

  const handleDomainClick = (category: string) => {
    onCategorySelect(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    onCategorySelect(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    onResumeClick();
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = PORTFOLIO_OWNER.socials.email;
  };

  return (
    <div className="flex flex-col w-[240px] h-[calc(100vh-56px)] fixed top-14 left-0 bg-yt-black overflow-y-auto pr-4 pb-4 pl-2 hover:overflow-y-scroll custom-scrollbar group z-40 border-r border-yt-hover/20">
      
      {/* Primary Navigation */}
      <div className="flex flex-col gap-1 p-2">
        <SidebarItem 
          icon={Home} 
          label="Home" 
          active={selectedCategory === null} 
          onClick={handleHomeClick} 
        />
        <SidebarItem 
          icon={FileText} 
          label="Text Resume / CV" 
          onClick={handleResumeClick} 
        />
      </div>
      
      <div className="border-t border-yt-hover my-2 mx-3" />
      
      {/* Project Domains */}
      <div className="flex flex-col gap-1 p-2">
        <h3 className="px-3 py-1 text-base font-semibold mb-1">Domains</h3>
        <SidebarItem 
          icon={Brain} 
          label="GenAI & LLMs" 
          active={selectedCategory === 'GenAI & LLMs'}
          onClick={() => handleDomainClick('GenAI & LLMs')} 
        />
        <SidebarItem 
          icon={Eye} 
          label="Computer Vision" 
          active={selectedCategory === 'Computer Vision'}
          onClick={() => handleDomainClick('Computer Vision')} 
        />
        <SidebarItem 
          icon={BarChart2} 
          label="Data Visualization" 
          active={selectedCategory === 'Data Visualization'}
          onClick={() => handleDomainClick('Data Visualization')} 
        />
        <SidebarItem 
          icon={Terminal} 
          label="NLP" 
          active={selectedCategory === 'NLP'}
          onClick={() => handleDomainClick('NLP')} 
        />
        <SidebarItem 
          icon={Database} 
          label="Data Engineering" 
          active={selectedCategory === 'Data Engineering'}
          onClick={() => handleDomainClick('Data Engineering')} 
        />
      </div>

      <div className="border-t border-yt-hover my-2 mx-3" />

      {/* Social Profiles */}
      <div className="flex flex-col gap-1 p-2">
         <h3 className="px-3 py-1 text-base font-semibold mb-1">Social Profiles</h3>
         <SidebarItem 
            icon={Linkedin} 
            label="LinkedIn" 
            onClick={() => handleSocialClick(PORTFOLIO_OWNER.socials.linkedin)}
         />
         <SidebarItem 
            icon={Github} 
            label="GitHub" 
            onClick={() => handleSocialClick(PORTFOLIO_OWNER.socials.github)}
         />
         <SidebarItem 
            icon={Trophy} 
            label="Kaggle & Competitions" 
            onClick={() => handleSocialClick('https://www.kaggle.com/sopradhan')} 
         />
         <SidebarItem 
            icon={Instagram} 
            label="Instagram" 
            onClick={() => handleSocialClick(PORTFOLIO_OWNER.socials.instagram)}
         />
         <SidebarItem 
            icon={Facebook} 
            label="Facebook" 
            onClick={() => handleSocialClick(PORTFOLIO_OWNER.socials.facebook)}
         />
         <SidebarItem 
            icon={Mail} 
            label="Contact via Email" 
            onClick={handleEmailClick} 
         />
      </div>
      
      <div className="border-t border-yt-hover my-2 mx-3" />
      
      <div className="px-5 py-3 text-xs text-yt-textSec font-medium">
        <p className="mb-2">
          Portfolio built with React, Tailwind, and Gemini API.
        </p>
        <p className="mt-4 text-[#717171]">© 2024 Soubhagya Ranjan Pradhan</p>
      </div>
    </div>
  );
};

export default Sidebar;
