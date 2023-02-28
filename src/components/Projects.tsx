export const Projects: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setMessageType, closeDemo }) => {
  const handleClick = (type: string) => {
    setMessageType(type);
    closeDemo();
  };
  return (
    <div className="max-w-1 ml-auto mr-8 max-h-20 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="mt-1 ml-1 flex  h-44 flex-col justify-between bg-gray-900 p-10 text-gray-400">
        <h1 className="text-3xl">Projects</h1>
        <span onClick={() => handleClick('gccm')}>GCCM</span>
        <span onClick={() => handleClick('garden')}>Garden Logger</span>
      </div>
    </div>
  );
};
