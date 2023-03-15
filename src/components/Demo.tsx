import gccmGif from '../assets/demoImages/gccm.gif';
import gardenGif from '../assets/demoImages/gardenManagerDemo.gif';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { ProjectName } from './common/projectsList';

export const Demo: React.FC<{
  selectedProject: ProjectName;
}> = ({ selectedProject }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const images = {
      gccm: gccmGif,
      garden: gardenGif,
      welcome: ''
    };

    const gif = images[selectedProject];
    setImage(gif);
  }, [selectedProject]);

  return image !== '' ? (
    <div className="flex flex-col items-center px-6 pb-6 md:px-12 md:pb-12">
      {/* <div className="transform transition-transform duration-500 hover:scale-150 "> */}
      <div>
        <AiOutlineClose
          onClick={() => setImage('')}
          className="ml-auto mr-1 mb-1 cursor-pointer bg-gray-900 hover:text-white"
        />
        <div className="rounded border-8 border-double border-stone-300">
          <img src={image} className="max-h-96 " />
          {/* <img src={image} className="max-h-72 " /> */}
        </div>
      </div>
    </div>
  ) : null;
};
