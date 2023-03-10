import { useState } from 'react';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [selectedProject, setSelectedProject] = useState('welcome');
  const [demoImage, setDemoImage] = useState<string | null>(null);

  const closeDemo = () => {
    setDemoImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 px-52 py-32 text-gray-400">
      <Header setSelectedProject={setSelectedProject} closeDemo={closeDemo} />
      <div className="px-52">
        <div className="flex justify-center p-16">
          <Demo demoImage={demoImage} closeDemo={closeDemo} />
        </div>
        <div className="flex flex-row justify-center">
          <MainMessage
            selectedProject={selectedProject}
            setDemoImage={setDemoImage}
          />
          <Projects
            setSelectedProject={setSelectedProject}
            closeDemo={closeDemo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
