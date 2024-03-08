import { SetStateAction } from 'react';
import { ProjectName, projects } from '../common/projects';
import { AiTwotoneHome } from 'react-icons/ai';

export const Menu: React.FC<{
  setSelectedProject: React.Dispatch<SetStateAction<ProjectName>>;
  setIsDrawerOpen: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setSelectedProject, setIsDrawerOpen }) => {
  const projectList = Object.values(projects).filter((project) => project.keyName !== 'welcome');

  const handleSelect = (projectName: ProjectName) => {
    setSelectedProject(projectName);
    setIsDrawerOpen(false);
  };

  return (
    <ul className="menu min-h-full w-80 bg-stone-800 p-4 text-white">
      <AiTwotoneHome
        size={'2em'}
        onClick={() => handleSelect('welcome')}
        className="mb-10 hover:cursor-pointer"
        color="white"
      />
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="divider divider-warning" />

      {projectList.map((item) => (
        <li key={item.keyName} onClick={() => handleSelect(item.keyName)}>
          <span className="text-lg duration-500 hover:tracking-wider hover:text-blue-500">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
