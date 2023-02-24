import test from '../../assets/demoImages/test.png';
import gardenGif from '../../assets/demoImages/gardenManagerDemo.gif';
export type DemoImage = 'gccm' | 'garden';

export const Demo: React.FC<{ demoImage: string }> = ({ demoImage }) => {
  let image;
  console.log('img', image);
  switch (demoImage) {
    case 'gccm':
      image = test;
      break;
    case 'garden':
      image = gardenGif;
  }
  return demoImage !== '' ? <img src={image} className="max-h-80"></img> : null;
};
