import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Filter, Sparkles, Trash2, Info } from 'lucide-react';
import { Project, Comment } from '../types';
import { INITIAL_COMMENTS, PORTFOLIO_OWNER } from '../constants';
import { generateAIResponse } from '../services/gemini';

interface CommentSectionProps {
  currentProject: Project;
}

const CommentSection: React.FC<CommentSectionProps> = ({ currentProject }) => {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Load comments from LocalStorage on mount or when project changes
  useEffect(() => {
    const savedComments = localStorage.getItem(`cslog-comments-${currentProject.id}`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        console.error("Failed to parse comments", e);
        setComments(INITIAL_COMMENTS);
      }
    } else {
      setComments(INITIAL_COMMENTS);
    }
  }, [currentProject.id]);

  // Save comments to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`cslog-comments-${currentProject.id}`, JSON.stringify(comments));
  }, [comments, currentProject.id]);

  const handlePostComment = async () => {
    if (!input.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: "You", // Identified as the user
      text: input,
      timestamp: "Just now",
      likes: 0,
      avatar: "https://picsum.photos/seed/guest/40/40"
    };

    setComments(prev => [newComment, ...prev]);
    const userQuery = input;
    setInput('');

    // Trigger AI response
    setIsTyping(true);
    try {
      const aiText = await generateAIResponse(userQuery, currentProject);
      
      const aiComment: Comment = {
        id: (Date.now() + 1).toString(),
        author: PORTFOLIO_OWNER.name,
        text: aiText,
        timestamp: "Just now",
        likes: 0,
        avatar: PORTFOLIO_OWNER.avatar,
        isAiResponse: true
      };

      setComments(prev => [aiComment, ...prev]);
    } catch (e) {
      console.error("AI failed to reply");
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearHistory = () => {
    if (confirm("Clear your chat history for this project?")) {
      setComments(INITIAL_COMMENTS);
      localStorage.removeItem(`cslog-comments-${currentProject.id}`);
    }
  };

  return (
    <div className="mt-6 max-w-[850px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-8">
          <h3 className="text-xl font-bold">{comments.length} Comments</h3>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Filter className="w-5 h-5" />
            <span>Sort by</span>
          </div>
        </div>
        
        {/* Static Site Context Badge */}
        <div className="flex items-center gap-2 text-xs text-yt-textSec bg-[#222] px-3 py-1.5 rounded-full border border-[#333]">
           <Info className="w-3 h-3" />
           <span className="hidden sm:inline">Session Local Storage</span>
           {comments.length > INITIAL_COMMENTS.length && (
             <button 
                onClick={handleClearHistory} 
                className="ml-2 hover:text-red-400 transition-colors flex items-center gap-1"
                title="Clear History"
             >
                <Trash2 className="w-3 h-3" />
             </button>
           )}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex gap-4 mb-8">
        <img src="https://picsum.photos/seed/guest/40/40" alt="User" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <div className="relative">
             <input
                type="text"
                placeholder="Ask Alex about this project..."
                className="w-full bg-transparent border-b border-yt-hover outline-none pb-1 focus:border-white transition-colors text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePostComment()}
              />
              <div className="absolute right-0 bottom-2 flex items-center gap-1 text-xs text-blue-400 pointer-events-none opacity-70">
                 <Sparkles className="w-3 h-3" />
                 <span>AI Powered</span>
              </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs text-yt-textSec">Gemini AI will answer based on project context.</div>
            <div className="flex items-center gap-4">
              <button 
                className="text-sm font-medium hover:bg-yt-hover px-3 py-2 rounded-full"
                onClick={() => setInput('')}
              >
                Cancel
              </button>
              <button 
                className={`text-sm font-medium px-4 py-2 rounded-full ${input.trim() ? 'bg-blue-500 text-black hover:bg-blue-400' : 'bg-yt-hover text-gray-500 cursor-not-allowed'}`}
                disabled={!input.trim()}
                onClick={handlePostComment}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Indicator for AI */}
      {isTyping && (
        <div className="flex gap-4 mb-6 animate-pulse opacity-70">
           <img src={PORTFOLIO_OWNER.avatar} alt="AI" className="w-10 h-10 rounded-full" />
           <div className="flex flex-col gap-2 w-full">
              <div className="h-3 bg-yt-hover rounded w-24"></div>
              <div className="h-3 bg-yt-hover rounded w-1/2"></div>
           </div>
        </div>
      )}

      {/* Comments List */}
      <div className="flex flex-col gap-6">
        {comments.map((comment, index) => (
          <div key={`${comment.id}-${index}`} className="flex gap-4 group">
            <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-sm font-semibold ${comment.isAiResponse ? 'bg-yt-hover px-2 rounded-full text-xs py-0.5 flex items-center gap-1' : ''} ${comment.author === 'You' ? 'text-blue-400' : ''}`}>
                  {comment.author}
                  {comment.isAiResponse && <Sparkles className="w-3 h-3 text-yellow-400" />}
                </span>
                <span className="text-xs text-yt-textSec">{comment.timestamp}</span>
              </div>
              <p className="text-sm text-yt-text leading-5 whitespace-pre-wrap">{comment.text}</p>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <ThumbsUp className="w-4 h-4 text-yt-textSec group-hover:text-white" />
                  <span className="text-xs text-yt-textSec">{comment.likes > 0 ? comment.likes : ''}</span>
                </div>
                <div className="cursor-pointer">
                   <ThumbsDown className="w-4 h-4 text-yt-textSec group-hover:text-white" />
                </div>
                <span className="text-xs font-semibold text-yt-textSec cursor-pointer hover:text-white">Reply</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;