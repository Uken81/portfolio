import { SiGmail } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

export const Socials: React.FC = () => (
  <ul className="menu menu-horizontal">
    <li>
      <a href="mailto:brendanhurd@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail size={'2em'} color={'white'} className="mr-2 duration-300 hover:scale-110" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/brendan-hurd-36b211259/"
        target="_blank"
        rel="noopener noreferrer">
        <AiOutlineLinkedin
          size={'2em'}
          className="mr-2 duration-300 hover:scale-110"
          color={'white'}
        />
      </a>
    </li>
    <li>
      <a href="https://github.com/Uken81" target="_blank" rel="noopener noreferrer">
        <GoMarkGithub size={'2em'} className="mr-2 duration-300 hover:scale-110" color={'white'} />
      </a>
    </li>
  </ul>
);
