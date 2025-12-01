
import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { RESUME_URL } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#1e1e1e] w-full max-w-[1000px] h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden border border-yt-hover relative">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-yt-hover bg-yt-black shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-500" />
            Resume / CV
          </h2>
          <div className="flex items-center gap-4">
            <a 
              href={RESUME_URL}
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors no-underline border border-transparent hover:border-gray-600"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-yt-hover rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer - Using Object Tag for better embedding support */}
        <div className="flex-1 bg-[#525659] relative w-full h-full flex flex-col">
          <object 
            data={RESUME_URL} 
            type="application/pdf" 
            className="w-full h-full"
          >
            {/* Fallback content if the browser blocks the embed */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#1e1e1e] h-full text-gray-300">
              <FileText className="w-16 h-16 mb-4 text-yt-textSec" />
              <p className="text-xl font-bold mb-2">Preview Unavailable</p>
              <p className="text-sm max-w-md mb-6 text-yt-textSec">
                Your browser or the hosting provider is preventing the PDF preview.
                <br />
                Don't worry, you can still view it externally.
              </p>
              <a 
                href={RESUME_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Open PDF in New Tab
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
