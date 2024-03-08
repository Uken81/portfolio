import { ReactNode, SetStateAction, useState } from 'react';
import { ProjectName } from '../common/projects';
import { AiTwotoneHome } from 'react-icons/ai';
import { Socials } from '../Socials';
import { Menu } from './Menu';
import { Hamburger } from './Hamburger';

export const Navbar: React.FC<{
  setSelectedProject: React.Dispatch<SetStateAction<ProjectName>>;
  children: ReactNode;
}> = ({ setSelectedProject, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="drawer">
      <input
        id="nav"
        type="checkbox"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <div className="navbar flex-1 md:px-12">
          <Hamburger />
          <div className="mx-2 hidden flex-1 px-2 lg:block">
            <AiTwotoneHome
              size={'2em'}
              onClick={() => setSelectedProject('welcome')}
              className="cursor-pointer duration-300 sm:hover:scale-110"
              color="white"
            />
            H
          </div>
          <div className="hidden flex-none lg:block">
            <Socials />
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="nav" aria-label="close sidebar" className="drawer-overlay"></label>
        <Menu setSelectedProject={setSelectedProject} setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
};
