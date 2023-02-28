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
      <div className="mb-10 rounded-r rounded-l bg-gradient-to-r from-sky-500 to-indigo-500 text-center">
        <h1 className="p-3 text-6xl">{props.title}</h1>
      </div>
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-2 bg-gray-900 pl-4">
          <span>{props.text}</span>
        </div>

        {message.links && (
          <div className="ml-2 max-w-lg bg-gray-900 pt-4 pl-4">
            <a
              href={message.links?.site}
              target="_blank"
              rel="noopener noreferrer">
              View Site
            </a>
            <a
              href={message.links?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-8">
              GitHub
            </a>
            <span onClick={handleClick} className="pl-8 hover:cursor-pointer">
              Demo
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Message title={message.title} text={message.text} links={message.links} />
  );
};
