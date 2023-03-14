import { AiTwotoneHome } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

export const Header: React.FC<{
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  closeDemo: () => void;
}> = ({ setSelectedProject, closeDemo }) => {
  const handleClick = () => {
    setSelectedProject('welcome');
    closeDemo();
  };

  return (
    <div className="mb-6 flex justify-between">
      <AiTwotoneHome
        size={'2em'}
        onClick={handleClick}
        className="cursor-pointer"
        color="white"
      />
      <div className="flex ">
        <a
          href="mailto:brendanhurd@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <SiGmail size={'2em'} color={'white'} className="mr-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/brendan-hurd-36b211259/"
          target="_blank"
          rel="noopener noreferrer">
          <AiOutlineLinkedin size={'2em'} className="mr-2" color={'white'} />
        </a>
        <a
          href="https://github.com/Uken81"
          target="_blank"
          rel="noopener noreferrer">
          <GoMarkGithub size={'2em'} className="mr-2" color={'white'} />
        </a>
      </div>
    </div>
  );
};
