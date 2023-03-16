import { useState } from 'react';
import { ProjectName } from './components/common/projectsList';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectName>('welcome');
  const welcomeMargin = selectedProject === 'welcome' ? 'lg:mt-56' : null;

  return (
    <div className="min-h-screen bg-gray-900 p-6  text-stone-300 sm:px-12 md:px-24 lg:px-36">
      <Header setSelectedProject={setSelectedProject} />
      <Demo selectedProject={selectedProject} />
      <div className={`${welcomeMargin} lg:flex lg:px-10 xl:px-36 2xl:px-64`}>
        <MainMessage selectedProject={selectedProject} />
        <Projects setSelectedProject={setSelectedProject} />
      </div>
    </div>
  );
}

export default App;
