import { useState } from 'react';
import { ProjectName } from './components/common/projects';
import { Demo } from './components/Demo';
import { MainMessage } from './components/MainMessage/MainMessage';
import { Projects } from './components/Projects';
import './style.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectName>('welcome');

  const welcomeMargin = selectedProject === 'welcome' ? 'mt-48' : null;

  return (
    <main className="min-h-screen bg-gray-900 ">
      <Navbar setSelectedProject={setSelectedProject}>
        <div className="p-6 text-stone-300 sm:px-12 md:px-24 lg:px-36">
          <Demo selectedProject={selectedProject} />
          <div
            className={`${welcomeMargin} flex w-full justify-center lg:px-10 xl:px-36 2xl:max-w-[90rem] 2xl:px-64`}>
            <MainMessage selectedProject={selectedProject} />
            <Projects setSelectedProject={setSelectedProject} />
          </div>
        </div>
      </Navbar>
    </main>
  );
}

export default App;
