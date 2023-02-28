export const Projects: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setMessageType, closeDemo }) => {
  const handleClick = (type: string) => {
    setMessageType(type);
    closeDemo();
  };
  return (
    <div className="max-w-1 ml-auto mr-8 max-h-20 rounded-l bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="mt-2 ml-2 flex  h-52 flex-col justify-between bg-gray-900 p-10 text-gray-400">
        <h1 className="mb-2 text-3xl">Projects</h1>
        <span
          onClick={() => handleClick('gccm')}
          className="hover:cursor-pointer">
          GCCM
        </span>
        <span
          onClick={() => handleClick('garden')}
          className="hover:cursor-pointer">
          Garden Logger
        </span>
      </div>
    </div>
  );
};
