import { Project, projects } from '../common/projectsList';
import { MessageText } from './MessageText';

const gradientRight = 'bg-gradient-to-r from-red-500 to-yellow-300 hover:bg-gradient-to-l';

const gradientBottom =
  'bg-gradient-to-b from-red-500 to-yellow-300 hover:bg-gradient-to-t duration-300';

const Title: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6 flex cursor-default flex-col">
    <h1
      className={`xl:text-7l ml-4 bg-clip-text pb-1 text-4xl ${gradientBottom} font-extrabold  text-transparent text-shadow-sm sm:text-5xl  lg:text-6xl`}>
      {title}
    </h1>
    {subtitle && (
      <h2 className="mt-6 ml-5 opacity-80" dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
    )}
  </div>
);

const Link: React.FC<{ linkText: string; linkRef: string }> = ({ linkText, linkRef }) => (
  <div className="mb-0.5 bg-gray-900">
    <a href={linkRef} target="_blank" rel="noopener noreferrer">
      <span className="pb-1 hover:text-white">{linkText}</span>
    </a>
  </div>
);

const Message: React.FC<{
  project: Project;
}> = ({ project }) => {
  return (
    <div className="mb-24 flex flex-col">
      <Title title={project.title} subtitle={project.subtitle} />
      <div className={`max-w-lg ${gradientBottom} opacity-80`}>
        <div className="ml-1 cursor-default bg-gray-900 pl-4 text-sm leading-6 ">
          <MessageText project={project} />
        </div>
        {project.links && (
          <div className="ml-1 flex max-w-lg bg-gray-900 pl-4 pt-4">
            <div className={`${gradientRight} hover:bg-gradient-to-l`}>
              <Link linkRef={project.links.site} linkText="View Site" />
            </div>
            <div className={`ml-8 ${gradientRight} hover:bg-gradient-to-l`}>
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
