interface Props {
  setMessageName: React.Dispatch<React.SetStateAction<string>>;
}
export const Projects = ({ setMessageName }: Props) => {
  return (
    <div className="mt-16 mr-8 ml-auto flex flex-col">
      <h1 className="text-3xl">Projects</h1>
      <span onClick={() => setMessageName('gccm')}>GCCM</span>
      <span onClick={() => setMessageName('garden')}>Garden Logger</span>
    </div>
  );
};
