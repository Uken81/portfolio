import { useState } from 'react';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [selectedProject, setSelectedProject] = useState('welcome');
  const [demoImage, setDemoImage] = useState<string | null>(null);

  const closeDemo = () => {
    setDemoImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-stone-300">
      <Header setSelectedProject={setSelectedProject} closeDemo={closeDemo} />
      <Demo demoImage={demoImage} closeDemo={closeDemo} />
      <MainMessage selectedProject={selectedProject} />
      <Projects setSelectedProject={setSelectedProject} closeDemo={closeDemo} />
    </div>
  );
}

export default App;
