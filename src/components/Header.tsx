import { GoBold } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

export const Header: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setMessageType, closeDemo }) => {
  const handleClick = () => {
    setMessageType('welcome');
    closeDemo();
  };

  return (
    <div className="mb-5 flex justify-between hover:pointer-events-auto">
      <GoBold
        size={'2em'}
        onClick={handleClick}
        className="hover:cursor-pointer"
      />
      <div className="ml-auto flex ">
        <a href="mailto:brendanhurd@gmail.com">
          <SiGmail size={'2em'} color={'red'} className="mr-2" />
        </a>
        <a href="https://www.linkedin.com/in/brendan-hurd-36b211259/">
          <AiOutlineLinkedin size={'2em'} className="mr-2" />
        </a>
        <a href="https://github.com/Uken81">
          <GoMarkGithub size={'2em'} />
        </a>
      </div>
    </div>
  );
};
