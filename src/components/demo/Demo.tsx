import test from '../../assets/demoImages/test.gif';
import gardenGif from '../../assets/demoImages/gardenManagerDemo.gif';
export type DemoImage = 'gccm' | 'garden';

export const Demo: React.FC<{ demoImage: string }> = ({ demoImage }) => {
  let image;
  //also change to object, amybe put in same file as message obj??
  switch (demoImage) {
    case 'gccm':
      image = test;
      break;
    case 'garden':
      image = gardenGif;
  }

  return (
    <img
      src={image}
      className="mb-16 max-h-80 transform transition-transform duration-500 hover:scale-150"></img>
  );
};
