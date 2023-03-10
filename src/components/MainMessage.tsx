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
        <span className="pb-1">{props.linkText}</span>
      </a>
    </div>
  );

  const Message = (props: Project) => (
    <div className="mb-24 flex flex-col">
      <div className="mb-6 flex cursor-default flex-col justify-center text-center">
        <h1 className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text p-1 text-4xl font-extrabold text-transparent hover:bg-gradient-to-l">
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: props.subtitle }}></h2>
        )}
      </div>
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-1 cursor-default bg-gray-900 pl-4 pr-8 text-sm leading-6">
          <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        </div>
        {project.links && (
          <div className="ml-1 flex max-w-lg bg-gray-900 pt-4 pl-4">
            <div className="ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.site} linkText="View Site" />
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.github} linkText="GitHub" />
            </div>
            <div className="ml-8  bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <div className="bg-gray-900">
                <span onClick={handleClick}>Demo</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Message
      title={project.title}
      subtitle={project.subtitle}
      text={project.text}
      links={project.links}
    />
  );
};
