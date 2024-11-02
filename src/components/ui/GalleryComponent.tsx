import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import Image from 'next/image';

const galleryStyles = cva('overflow-hidden font-jersey10', {
  variants: {
    layout: {
      wide: 'w-full h-96',
      square: 'w-1/2 h-96',
    },
    borderColor: {
      pink: 'border border-pink rounded-none border-4',
      white: 'border border-white rounded-none border-4',
      green: 'border border-green rounded-none border-4',
    },
    titleColor: {
      pinkWhite: 'bg-pink text-white',
      pinkGreen: 'bg-pink text-green',
      pinkBlue: 'bg-pink text-blue',
      greenPink: 'bg-green text-pink',
      greenBlue: 'bg-green text-blue',
      whiteBlue: 'bg-white text-blue',
      whitePink: 'bg-white text-pink',
    },
    position: {
      upperLeft: 'absolute top-0 left-0',
      upperRight: 'absolute top-0 right-0',
      lowerLeft: 'absolute bottom-0 left-0',
      lowerRight: 'absolute bottom-0 right-0',
    },
  },
});

interface GalleryComponentProps extends VariantProps<typeof galleryStyles> {
  image: string;
  sportName: string;
  layout?: 'wide' | 'square';
  borderColor?: 'pink' | 'white' | 'green';
  titleColor?:
    | 'pinkWhite'
    | 'pinkGreen'
    | 'pinkBlue'
    | 'greenPink'
    | 'greenBlue'
    | 'whiteBlue'
    | 'whitePink';
  position?: 'upperLeft' | 'upperRight' | 'lowerLeft' | 'lowerRight';
}

const GalleryComponent: FC<GalleryComponentProps> = ({
  image,
  sportName,
  layout,
  borderColor,
  titleColor,
  position,
}) => {
  return (
    <div className={`${galleryStyles({ layout, borderColor })} relative`}>
      <div
        className={`${galleryStyles({ titleColor, position })} min-w-44 text-4 text-3xl text-center mx-14`}
      >
        {sportName}
      </div>
      <Image
        src={`/images/sports-picture/${image}`}
        alt={sportName}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default GalleryComponent;
