import { cva, type VariantProps } from 'class-variance-authority';
import type { FC } from 'react';
import Image from 'next/image';

const galleryStyles = cva('overflow-hidden font-vt323', {
  variants: {
    layout: {
      s_wide: 'w-3/5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]',
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
  layout?: 's_wide' | 'wide' | 'square';
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
  layout = 'wide',
  borderColor = 'pink',
  titleColor = 'pinkWhite',
  position = 'upperLeft',
}) => {
  // Calculate appropriate sizes based on layout
  const getSizes = () => {
    switch (layout) {
      case 's_wide':
        return '(max-width: 768px) 60vw, (max-width: 1200px) 60vw, 60vw';
      case 'wide':
        return '100vw';
      case 'square':
        return '(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw';
      default:
        return '100vw';
    }
  };

  return (
    <div
      className={`${galleryStyles({ layout, borderColor })} relative box-border`}
    >
      {sportName && (
        <div
          className={`${galleryStyles({ titleColor, position })} min-w-44 text-2xl md:text-3xl lg:text-4xl p-2 md:p-3 lg:p-4 text-center mx-14 z-10`}
        >
          {sportName}
        </div>
      )}
      <div className="relative w-full h-full">
        <Image
          fill
          src={`/images/sports-picture/${image}`}
          alt={sportName || 'Image'}
          className="object-cover"
          sizes={getSizes()}
          quality={90}
          priority={true}
        />
      </div>
    </div>
  );
};

export default GalleryComponent;
