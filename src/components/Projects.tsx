export const Projects: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setMessageType, closeDemo }) => {
  const handleClick = (type: string) => {
    setMessageType(type);
    closeDemo();
  };
  return (
    <div className="ml-auto mr-8 max-h-20 rounded-l bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="mt-2 ml-2 flex  h-52 flex-col justify-between bg-gray-900 p-10 text-gray-400">
        <h1 className="mb-2 cursor-default bg-gradient-to-br from-sky-500 to-indigo-500 bg-clip-text text-3xl font-extrabold text-transparent">
          Projects
        </h1>
        <div className="max-w-fit bg-gradient-to-br from-sky-500 to-indigo-500">
          <p
            onClick={() => handleClick('gccm')}
            className="mb-0.5 bg-gray-900 duration-300 hover:cursor-pointer hover:text-white">
            GCCM
          </p>
        </div>
        <div className="max-w-fit bg-gradient-to-br from-sky-500 to-indigo-500">
          <p
            onClick={() => handleClick('garden')}
            className="mb-0.5 bg-gray-900 duration-300 hover:cursor-pointer hover:text-white">
            Garden Logger
          </p>
        </div>
      </div>
    </div>
  );
};
