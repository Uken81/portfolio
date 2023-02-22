interface Props {
  setMessageName: React.Dispatch<React.SetStateAction<string>>;
}
export const Projects = ({ setMessageName }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">Projects</h1>
      <span onClick={() => setMessageName('gccm')}>GCCM</span>
      <span onClick={() => setMessageName('garden')}>Garden Logger</span>
    </div>
  );
};
