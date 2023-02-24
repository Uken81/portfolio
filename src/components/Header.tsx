import { GoBold } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

interface Props {
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<{
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setMessageType }) => {
  return (
    <div className="mb-5 flex">
      <GoBold size={'2em'} onClick={() => setMessageType('welcome')} />
      <div className="ml-auto flex">
        <SiGmail size={'2em'} color={'red'} />
        <AiOutlineLinkedin size={'2em'} />
        <a href="https://github.com/Uken81">
          <GoMarkGithub size={'2em'} />
        </a>
      </div>
    </div>
  );
};
