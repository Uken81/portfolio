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

  const Message = (props: Project) => (
    <div className="flex flex-col">
      <div className="mb-10 cursor-default">
        <h1 className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text p-3 text-6xl font-extrabold text-transparent hover:bg-gradient-to-l">
          {props.title}
        </h1>
      </div>
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-2 cursor-default bg-gray-900 pl-4">
          <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        </div>
        {project.links && (
          <div className="ml-2 flex max-w-lg bg-gray-900 pt-4 pl-4">
            <div className="ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 duration-1000 hover:bg-gradient-to-l">
              <div className="mb-0.5 bg-gray-900">
                <a
                  href={project.links?.site}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="duration-300 hover:text-white">
                    View Site
                  </span>
                </a>
              </div>
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <div className="mb-0.5 bg-gray-900">
                <a
                  href={props.links?.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="duration-300 hover:text-white">GitHub</span>
                </a>
              </div>
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <div className="mb-0.5 bg-gray-900">
                <p
                  onClick={handleClick}
                  className="cursor-pointer duration-300 hover:text-white">
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
