import test from '../../assets/demoImages/test.gif';
import gardenGif from '../../assets/demoImages/gardenManagerDemo.gif';
import { AiOutlineClose } from 'react-icons/ai';

export type DemoImage = 'gccm' | 'garden';

export const Demo: React.FC<{
  demoImage: string | null;
  closeDemo: () => void;
}> = ({ demoImage, closeDemo }) => {
  let image;
  //also change to object, amybe put in same file as message obj??
  switch (demoImage) {
    case 'gccm':
      image = test;
      break;
    case 'garden':
      image = gardenGif;
  }

  return demoImage ? (
    <div className="mb-16 transform transition-transform duration-500 hover:scale-150 ">
      <AiOutlineClose
        className="ml-auto mr-1 mb-1 cursor-pointer  bg-gray-900 hover:text-white"
        onClick={closeDemo}
      />
      <div className="rounded border-8 border-double border-gray-400">
        <img src={image} className="max-h-72 " />
      </div>
    </div>
  ) : null;
};
