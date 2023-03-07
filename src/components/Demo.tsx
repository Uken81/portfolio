import gccmGif from '../assets/demoImages/gccm.gif';
import gardenGif from '../assets/demoImages/gardenManagerDemo.gif';
import { AiOutlineClose } from 'react-icons/ai';

export const Demo: React.FC<{
  demoImage: string | null;
  closeDemo: () => void;
}> = ({ demoImage, closeDemo }) => {
  let image;
  switch (demoImage) {
    case 'gccm':
      image = gccmGif;
      break;
    case 'garden':
      image = gardenGif;
  }

  return demoImage ? (
    <div className="flex flex-col justify-center p-16">
      <div className="transform transition-transform duration-500 hover:scale-150 ">
        <AiOutlineClose
          className="ml-auto mr-1 mb-1 cursor-pointer  bg-gray-900 hover:text-white"
          onClick={closeDemo}
        />
      </div>
      <div className="rounded border-8 border-double border-gray-400">
        <img src={image} className="max-h-72 " />
      </div>
    </div>
  ) : null;
};
