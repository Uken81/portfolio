import { SetStateAction } from 'react';
import { ProjectName, projects } from '../common/projects';
import { AiTwotoneHome } from 'react-icons/ai';

export const Menu: React.FC<{
  setSelectedProject: React.Dispatch<SetStateAction<ProjectName>>;
  setIsDrawerOpen: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setSelectedProject, setIsDrawerOpen }) => {
  const projectList = Object.values(projects).filter((project) => project.keyName !== 'welcome');

  return (
    <ul className="menu min-h-full w-80 bg-stone-800 p-4 text-white">
      <AiTwotoneHome
        size={'2em'}
        onClick={() => setSelectedProject('welcome')}
        className="mb-10"
        color="white"
      />
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="divider divider-warning" />

      {projectList.map((item) => (
        <li key={item.keyName} onClick={() => setIsDrawerOpen(false)}>
          <span className="text-lg" onClick={() => setSelectedProject(item.keyName)}>
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
