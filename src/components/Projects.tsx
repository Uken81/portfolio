import { projects } from './common/projectsList';

const gradientRight =
  'bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l';

const gradientBottom =
  'bg-gradient-to-b from-sky-500 to-indigo-500 hover:bg-gradient-to-l';

const Project: React.FC<{
  onClickParam: string;
  handleClick: any;
  title: string;
}> = ({ onClickParam, handleClick, title }) => (
  <div className={`max-w-fit ${gradientRight}`}>
    <p
      onClick={() => handleClick(onClickParam)}
      className="mb-0.5 cursor-pointer whitespace-nowrap bg-gray-900 pt-2 duration-300">
      {title}
    </p>
  </div>
);

export const Projects: React.FC<{
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setSelectedProject, closeDemo }) => {
  const projectList = Object.values(projects).filter(
    (project) => project.keyName !== 'welcome'
  );

  const handleClick = (name: string) => {
    setSelectedProject(name);
    closeDemo();
  };

  return (
    <div className="pb-24">
      <div className={`flex h-10 w-20 rounded-l ${gradientRight} pl-1 pt-1`}>
        <div className="flex flex-col  bg-gray-900 p-4">
          <h1
            className={`mb-2 cursor-default ${gradientBottom} bg-clip-text text-xl font-extrabold text-transparent`}>
            Projects
          </h1>
          {projectList.map((project) => (
            <Project
              key={project.keyName}
              title={project.title}
              onClickParam={project.keyName}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
