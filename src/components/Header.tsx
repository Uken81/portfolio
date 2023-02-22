import { GoBold } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
export const Header = () => {
  return (
    <div className="mb-5 flex">
      <GoBold size={'2em'} />
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
