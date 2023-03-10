import { projects } from './common/projectsList';

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

  const Project = (props: { onClickParam: string; title: string }) => (
    <div className="max-w-fit bg-gradient-to-br from-sky-500 to-indigo-500">
      <p
        onClick={() => handleClick(props.onClickParam)}
        className="mb-0.5 cursor-pointer bg-gray-900 duration-300 hover:tracking-wider hover:text-white">
        {props.title}
      </p>
    </div>
  );

  return (
    <div className="ml-auto mr-8 max-h-20 rounded-l bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="mt-2 ml-2 flex  h-52 flex-col justify-between bg-gray-900 p-10 text-gray-400">
        <h1 className="mb-2 cursor-default bg-gradient-to-br from-sky-500 to-indigo-500 bg-clip-text text-3xl font-extrabold text-transparent">
          Projects
        </h1>
        {projectList.map((project) => (
          <Project
            key={project.keyName}
            title={project.title}
            onClickParam={project.keyName}
          />
        ))}
      </div>
    </div>
  );
};
