
import { GoogleGenAI } from "@google/genai";
import { Project } from '../types';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // In a real app, strict error handling for missing key is needed.
    // For this portfolio, we assume the environment is set up correctly as per instructions.
    const apiKey = process.env.API_KEY || ''; 
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateAIResponse = async (
  userQuery: string,
  currentProject: Project,
  contextHistory: string[] = []
): Promise<string> => {
  const ai = getAiClient();
  
  const systemInstruction = `
    You are Soubhagya Ranjan Pradhan, the Data Scientist who created this project. 
    You are helpful, technical, and concise. 
    You are replying to a comment on your project video titled "${currentProject.title}".
    
    Project Description: ${currentProject.description}
    Tech Stack: ${currentProject.techStack.join(', ')}
    
    Answer the user's question specifically about this project or your skills.
    If the question is unrelated, politely bring it back to the project or data science.
    Keep the tone professional but conversational, like a YouTube creator replying to fans.
    Keep responses under 100 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Thanks for your comment! I'm glad you liked the video.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic on my AI server, but feel free to connect with me on LinkedIn!";
  }
};
