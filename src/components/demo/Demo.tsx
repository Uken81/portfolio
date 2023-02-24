import test from '../../assets/demoImages/test.png';
import gardenGif from '../../assets/demoImages/gardenManagerDemo.gif';
export type DemoImage = 'gccm' | 'garden';

export const Demo: React.FC<{ demoImage: string }> = ({ demoImage }) => {
  let image;
  switch (demoImage) {
    case 'gccm':
      image = test;
      break;
    case 'garden':
      image = gardenGif;
  }
  console.log('img', image);
  //leave below until i know that a transform transition cant occur on render.
  // return demoImage !== '' ? (
  //   <img
  //     src={image}
  //     className="max-h-80 transform transition-transform hover:scale-125"></img>
  // ) : null;
  return (
    <img
      src={image}
      className="max-h-80 transform transition-transform duration-500 hover:scale-150"></img>
  );
};
