import gccmGif from '../assets/demoImages/gccm.gif';
import gardenGif from '../assets/demoImages/gardenLogger.gif';
import takeachanceGif from '../assets/demoImages/takeachance.gif';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { ProjectName } from './common/projectsList';

export const Demo: React.FC<{
  selectedProject: ProjectName;
}> = ({ selectedProject }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const images = {
      sadbois: '',
      gccm: gccmGif,
      garden: gardenGif,
      chance: takeachanceGif,
      welcome: ''
    };

    const gif = images[selectedProject];
    setImage(gif);
  }, [selectedProject]);

  return image !== '' ? (
    <div className="flex flex-col items-center px-6 pb-6 md:px-12 md:pb-12">
      <div>
        <AiOutlineClose
          onClick={() => setImage('')}
          className="ml-auto mr-1 mb-1 cursor-pointer bg-gray-900 hover:text-white"
        />
        <div className="rounded border-8 border-double border-stone-300">
          <img src={image} className="max-h-96 " />
        </div>
      </div>
    </div>
  ) : null;
};
