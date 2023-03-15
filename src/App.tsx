import { useState } from 'react';
import { ProjectName } from './components/common/projectsList';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectName>('welcome');

  return (
    <div className="min-h-screen bg-gray-900 p-6  text-stone-300 sm:p-12 md:p-24">
      <Header setSelectedProject={setSelectedProject} />
      <Demo selectedProject={selectedProject} />
      <div className="lg:flex lg:px-24 xl:px-36 2xl:px-56">
        <MainMessage selectedProject={selectedProject} />
        <Projects setSelectedProject={setSelectedProject} />
      </div>
    </div>
  );
}

export default App;
