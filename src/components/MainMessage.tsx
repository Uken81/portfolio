import { Project, projects } from './common/projectsList';

const Titles: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle
}) => (
  <div className="mb-6 flex cursor-default flex-col justify-center text-center">
    <h1
      className={
        'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text p-1 text-4xl font-extrabold text-transparent'
      }>
      {title}
    </h1>
    {subtitle && <h2 dangerouslySetInnerHTML={{ __html: subtitle }}></h2>}
  </div>
);

const Link: React.FC<{ linkText: string; linkRef: string }> = ({
  linkText,
  linkRef
}) => (
  <div className="mb-0.5 bg-gray-900">
    <a href={linkRef} target="_blank" rel="noopener noreferrer">
      <span className="pb-1">{linkText}</span>
    </a>
  </div>
);

const Message: React.FC<{
  project: Project;
}> = ({ project }) => {
  return (
    <div className="mb-24 flex flex-col">
      <Titles title={project.title} subtitle={project.subtitle} />
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-1 cursor-default bg-gray-900 pl-4 pr-8 text-sm leading-6">
          <span dangerouslySetInnerHTML={{ __html: project.text }}></span>
        </div>
        {project.links && (
          <div className="ml-1 flex max-w-lg bg-gray-900 pt-4 pl-4">
            <div className="ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.site} linkText="View Site" />
            </div>
            <div className="ml-8 bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l">
              <Link linkRef={project.links.github} linkText="GitHub" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const MainMessage: React.FC<{
  selectedProject: string;
}> = ({ selectedProject }) => {
  const project = projects[selectedProject];

  return <Message project={project} />;
};
