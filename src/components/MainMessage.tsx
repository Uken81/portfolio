export const MainMessage: React.FC<{
  messageType: string;
  setDemoImage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ messageType, setDemoImage }) => {
  const messages: {
    [key: string]: {
      title: string;
      text: string;
      links?: { site: string; github: string; demo: string };
    };
  } = {
    gccm: {
      title: 'GCCM',
      text: 'Aliqua sunt culpa irure anim. Anim magna aliquip officia in ullamco non laborum laboris ullamco dolore ex. Reprehenderit nostrud duis consequat nisi enim ex sint ipsum laboris. Anim et ea duis veniam aute irure quis in. Exercitation quis eu consequat aliquip ut pariatur enim irure labore.',
      links: {
        site: 'https://pensive-goldstine-f0979f.netlify.app/',
        github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
        demo: 'gccm'
      }
    },
    garden: {
      title: 'Garden Logger',
      text: 'Mollit laboris nulla incididunt ullamco quis. Ex exercitation aliqua commodo consequat consectetur proident elit ullamco do. Anim laboris elit Lorem ullamco ea. Adipisicing fugiat occaecat minim ut laboris voluptate anim est. Ex sit irure proident ad ex ipsum incididunt ipsum veniam deserunt anim Lorem. Quis ea ut non ea nostrud exercitation duis. Excepteur eu ea occaecat eu fugiat sit.',
      links: {
        site: 'https://pensive-goldstine-f0979f.netlify.app/',
        github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
        demo: 'garden'
      }
    },
    welcome: {
      title: 'Welcome.',
      text: 'Consectetur excepteur proident laboris incididunt laboris proident tempor aliqua id aliquip. Incididunt proident amet mollit anim voluptate. Qui incididunt officia ipsum cupidatat velit officia commodo ullamco deserunt incididunt ex reprehenderit. Veniam id adipisicing duis veniam reprehenderit eiusmod amet voluptate. Duis eiusmod veniam quis commodo nostrud adipisicing laborum. Do minim esse est tempor id commodo ex nisi irure minim.'
    }
  };

  const message = messages[messageType];
  const handleClick = () => {
    if (message.links) {
      setDemoImage(message.links.demo);
    }
  };
  const Message = (props: {
    title: string;
    text: string;
    links?: { site: string; github: string; demo: string };
  }) => (
    <div className="flex flex-col">
      <h1 className="mb-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-6xl">
        {props.title}
      </h1>
      <span className="max-w-lg border-l-4 pl-2 text-gray-400">
        {props.text}
      </span>
      {message.links && (
        <div className="flex max-w-sm justify-between">
          <a
            href={message.links?.site}
            target="_blank"
            rel="noopener noreferrer">
            View Site
          </a>
          <a
            href={message.links?.github}
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          <span onClick={handleClick}>Demo</span>
        </div>
      )}
    </div>
  );

  return (
    <Message title={message.title} text={message.text} links={message.links} />
  );
};
