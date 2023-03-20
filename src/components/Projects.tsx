import { ProjectName, projects } from './common/projectsList';

const gradientRight = 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l';

const gradientBottom = 'bg-gradient-to-b from-sky-500 to-indigo-500 hover:bg-gradient-to-t';

const Project: React.FC<{
  handleClick: () => void;
  title: string;
}> = ({ handleClick, title }) => (
  <div className={`max-w-fit ${gradientRight}`}>
    <p
      onClick={handleClick}
      className="mb-0.5 cursor-pointer whitespace-nowrap bg-gray-900 pt-2 duration-300 hover:tracking-wider hover:text-white">
      {title}
    </p>
  </div>
);

export const Projects: React.FC<{
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectName>>;
}> = ({ setSelectedProject }) => {
  const projectList = Object.values(projects).filter((project) => project.keyName !== 'welcome');

  return (
    <div className="pb-24 lg:ml-auto">
      <div className={`flex h-10 w-20 rounded-l ${gradientRight} pl-1 pt-1`}>
        <div className="flex flex-col  bg-gray-900 pl-4 pt-4">
          <h1
            className={`cursor-default ${gradientBottom} bg-clip-text text-xl font-extrabold text-transparent text-shadow-md  sm:text-2xl`}>
            Projects
          </h1>
          {projectList.map((project) => (
            <Project
              key={project.keyName}
              title={project.title}
              handleClick={() => setSelectedProject(project.keyName)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
