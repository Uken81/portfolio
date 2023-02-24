export const Projects: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setMessageType, closeDemo }) => {
  const handleClick = (type: string) => {
    setMessageType(type);
    closeDemo();
  };
  return (
    <div className="mt-16 mr-8 ml-auto flex flex-col">
      <h1 className="text-3xl">Projects</h1>
      <span onClick={() => handleClick('gccm')}>GCCM</span>
      <span onClick={() => handleClick('garden')}>Garden Logger</span>
    </div>
  );
};
