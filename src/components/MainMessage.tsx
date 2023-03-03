export const MainMessage: React.FC<{
  messageType: string;
  setDemoImage: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ messageType, setDemoImage }) => {
  const messages: {
    [key: string]: {
      title: string;
      text: string;
      links?: { site: string; github: string; demo: string };
    };
  } = {
    //export below object to its own file??
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
      <div className="mb-10 cursor-default">
        <h1 className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text p-3 text-6xl font-extrabold text-transparent hover:bg-gradient-to-l">
          {props.title}
        </h1>
      </div>
      <div className="max-w-lg bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="ml-2 cursor-default bg-gray-900 pl-4">
          <span>{props.text}</span>
        </div>

        {message.links && (
          <div className="ml-2 flex max-w-lg bg-gray-900 pt-4 pl-4">
            <div className="ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 duration-1000 hover:bg-gradient-to-l">
              <div className="mb-0.5 bg-gray-900">
                <a
                  href={message.links?.site}
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
    <Message title={message.title} text={message.text} links={message.links} />
  );
};
