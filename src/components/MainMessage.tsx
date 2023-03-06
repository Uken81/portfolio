import { Project, projects } from './common/projectsList';

export const MainMessage: React.FC<{
  selectedProject: string;
  setDemoImage: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ selectedProject, setDemoImage }) => {
  const project = projects[selectedProject];

  const handleClick = () => {
    if (project.links) {
      setDemoImage(project.links.demo);
    }
  };

  const Link = (props: { linkText: string; linkRef: string }) => (
    <div className="mb-0.5 bg-gray-900">
      <a href={props.linkRef} target="_blank" rel="noopener noreferrer">
        <span className="text-lg duration-300 hover:text-white">
          {props.linkText}
        </span>
      </a>
    </div>
  );

  const Message = (props: Project) => (
    <div className="flex flex-col">
      <div className="mb-8 cursor-default">
        <h1 className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text p-4 text-6xl font-extrabold text-transparent hover:bg-gradient-to-l">
          {props.title}
        </h1>
      </div>
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-2 max-h-56 cursor-default overflow-y-auto bg-gray-900 pl-4 scrollbar-none">
          <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        </div>
        {project.links && (
          <div className="ml-2 flex max-w-lg bg-gray-900 pt-4 pl-4">
            <div className="ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.site} linkText="View Site" />
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.github} linkText="GitHub" />
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <div className="mb-0.5 bg-gray-900">
                <p
                  onClick={handleClick}
                  className="cursor-pointer text-lg duration-300 hover:text-white">
                  Demo
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Message title={project.title} text={project.text} links={project.links} />
  );
};
