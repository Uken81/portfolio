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
    <div className="flex flex-col justify-center p-16">
      {/* <div className="transform transition-transform duration-500 hover:scale-150 "> */}
      <AiOutlineClose
        onClick={() => setImage('')}
        className="ml-auto mr-1 mb-1 cursor-pointer bg-gray-900 hover:text-white"
      />
      {/* </div> */}
      <div className="rounded border-8 border-double border-gray-400">
        <img src={image} className="max-h-72 " />
      </div>
    </div>
  ) : null;
};
