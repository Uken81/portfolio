export const Projects: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setMessageType }) => {
  return (
    <div className="mt-16 mr-8 ml-auto flex flex-col">
      <h1 className="text-3xl">Projects</h1>
      <span onClick={() => setMessageType('gccm')}>GCCM</span>
      <span onClick={() => setMessageType('garden')}>Garden Logger</span>
    </div>
  );
};
