import { Project, projects } from './common/projectsList';

const gradientClasses =
  'bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l';
const grayClasses = 'bg-gray-900';

const Titles: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle
}) => (
  <div className="mb-6 flex cursor-default flex-col justify-center text-center">
    <h1
      className={`${gradientClasses} bg-clip-text p-1 text-4xl font-extrabold text-transparent`}>
      {title}
    </h1>
    {subtitle && <h2 dangerouslySetInnerHTML={{ __html: subtitle }}></h2>}
  </div>
);

const Link: React.FC<{ linkText: string; linkRef: string }> = ({
  linkText,
  linkRef
}) => (
  <div className="mb-0.5">
    <a href={linkRef} target="_blank" rel="noopener noreferrer">
      <span className="pb-1">{linkText}</span>
    </a>
  </div>
);

const RepoLink: React.FC<{ linkRef: string; linkText: string }> = ({
  linkRef,
  linkText
}) => (
  <div className={`ml-8 ${gradientClasses}`}>
    <Link linkRef={linkRef} linkText={linkText} />
  </div>
);

const DemoLink: React.FC<{ handleClick: () => void }> = ({ handleClick }) => (
  <div className={`ml-8 ${gradientClasses}`}>
    <div className={grayClasses}>
      <span onClick={handleClick}>Demo</span>
    </div>
  </div>
);

const Message: React.FC<{
  project: Project;
  setDemoImage: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ project, setDemoImage }) => {
  const handleClick = () => {
    if (project.links?.demo) {
      setDemoImage(project.links.demo);
    }
  };

  return (
    <div className="mb-24 flex flex-col">
      <Titles title={project.title} subtitle={project.subtitle} />
      <div
        className={`${grayClasses} max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500`}>
        <div className="ml-1 cursor-default pl-4 pr-8 text-sm leading-6">
          <span dangerouslySetInnerHTML={{ __html: project.text }}></span>
        </div>
        {project.links && (
          <div className="ml-1 flex max-w-lg pt-4 pl-4">
            <div className={`ml-4 ${gradientClasses}`}>
              <Link linkRef={project.links.site} linkText="View Site" />
            </div>
            <ActionLink linkRef={project.links.github} linkText="GitHub" />
            <DemoLink handleClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export const MainMessage: React.FC<{
  selectedProject: string;
  setDemoImage: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ selectedProject, setDemoImage }) => {
  const project = projects[selectedProject];

  return <Message project={project} setDemoImage={setDemoImage} />;
};
