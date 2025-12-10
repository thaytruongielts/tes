import React, { useState } from 'react';
import { BookOpen, Headphones, PenTool } from 'lucide-react';
import { ReadingModule } from './components/ReadingModule';
import { ListeningModule } from './components/ListeningModule';
import { WritingModule } from './components/WritingModule';

type Tab = 'reading' | 'listening' | 'writing';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('reading');

  const renderContent = () => {
    switch (activeTab) {
      case 'reading': return <ReadingModule />;
      case 'listening': return <ListeningModule />;
      case 'writing': return <WritingModule />;
      default: return <ReadingModule />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      <nav className="bg-gray-900 text-white shadow-lg flex-none z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl tracking-tight">IELTS Master</span>
            <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('reading')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'reading' 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Reading
              </button>
              <button
                onClick={() => setActiveTab('listening')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'listening' 
                    ? 'bg-purple-600 text-white shadow' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Headphones className="w-4 h-4 mr-2" />
                Listening
              </button>
              <button
                onClick={() => setActiveTab('writing')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'writing' 
                    ? 'bg-pink-600 text-white shadow' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <PenTool className="w-4 h-4 mr-2" />
                Writing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 overflow-hidden relative">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;