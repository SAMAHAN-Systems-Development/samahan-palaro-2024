import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import Image from 'next/image';

const galleryStyles = cva('overflow-hidden font-vt323', {
  variants: {
    layout: {
      wide: 'w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]',
      square: 'w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]',
    },
    borderColor: {
      pink: 'border-pink rounded-none border-8',
      white: 'border-white rounded-none border-8',
      green: 'border-green rounded-none border-8',
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
    <div
      className={`${galleryStyles({ layout, borderColor })} relative box-border`}
    >
      {sportName && (
        <div
          className={`${galleryStyles({ titleColor, position })} min-w-44 text-4 md:text-lg lg:text-3xl p-2 text-center mx-14`}
        >
          {sportName}
        </div>
      )}
      <Image
        width={600}
        height={600}
        src={`/images/sports-picture/${image}`}
        alt={sportName || "Image"}
        className="object-cover w-full h-full"
        unoptimized
      />
    </div>
  );
};



export default GalleryComponent;
