import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import ProjectInfo from './components/ProjectInfo';
import CommentSection from './components/CommentSection';
import ResumeModal from './components/ResumeModal';
import VideoResumeModal from './components/VideoResumeModal';
import WelcomePage from './components/WelcomePage';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [currentProject, setCurrentProject] = useState<Project>(PROJECTS[0]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isVideoResumeOpen, setIsVideoResumeOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Initialize watched videos from LocalStorage
  const [watchedIds, setWatchedIds] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cslog-watched-videos');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });

  // Effect to mark current project as watched when it changes
  useEffect(() => {
    if (!showWelcomePage) {
      setWatchedIds(prev => {
        const newSet = new Set(prev);
        if (!newSet.has(currentProject.id)) {
          newSet.add(currentProject.id);
          localStorage.setItem('cslog-watched-videos', JSON.stringify(Array.from(newSet)));
          return newSet;
        }
        return prev;
      });
    }
  }, [currentProject.id, showWelcomePage]);

  const handleProjectSelect = (project: Project) => {
    setCurrentProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSelect = (project: Project) => {
    // 1. Play the video
    setCurrentProject(project);
    // 2. Select the domain/playlist so the sidebar and playlist update
    setSelectedCategory(project.category);
    // 3. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWelcome = () => {
    setShowWelcomePage(true);
  };

  // Filter projects based on the selected category from the sidebar
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return PROJECTS;
    return PROJECTS.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  if (showWelcomePage) {
    return <WelcomePage onEnter={() => setShowWelcomePage(false)} />;
  }

  return (
    <div className="bg-yt-black min-h-screen text-white font-sans">
      <Header 
        onSearchSelect={handleSearchSelect} 
        onProfileClick={() => setIsVideoResumeOpen(true)}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onBack={handleBackToWelcome}
      />
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <VideoResumeModal
        isOpen={isVideoResumeOpen}
        onClose={() => setIsVideoResumeOpen(false)}
      />
      
      <div className="flex pt-14">
        <Sidebar 
          isOpen={isSidebarOpen}
          onResumeClick={() => setIsResumeOpen(true)}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        
        {/* Main Content Area - Adjust margin based on sidebar state */}
        <main className={`flex-1 p-4 md:p-6 flex flex-col lg:flex-row gap-6 justify-center transition-all duration-300 ${isSidebarOpen ? 'lg:ml-[240px]' : 'ml-0'}`}>
          
          {/* Primary Column (Video + Info + Comments) */}
          <div className="flex-1 max-w-[1280px] lg:min-w-[640px]">
            <VideoPlayer project={currentProject} />
            <ProjectInfo project={currentProject} />
            <div className="hidden lg:block border-t border-yt-hover my-4 max-w-[850px]" />
            <CommentSection currentProject={currentProject} />
          </div>

          {/* Secondary Column (Playlist) */}
          <div className="lg:w-[400px] shrink-0">
             <Playlist 
               projects={filteredProjects} 
               currentProjectId={currentProject.id}
               onProjectSelect={handleProjectSelect}
               watchedIds={watchedIds}
             />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;