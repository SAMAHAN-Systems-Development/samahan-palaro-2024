import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const readMoreButtonStyles = cva(
  'font-jersey10 transition-all cursor-pointer flex items-center justify-center hover:scale-110 hover:transition-all duration-200 hover:ease-in-out',
  {
    variants: {
      bgColor: {
        blue: 'bg-blue',
        green: 'bg-green',
        pink: 'bg-pink',
        white: 'bg-white',
      },
      textColor: {
        blue: 'text-blue',
        green: 'text-green',
        pink: 'text-pink',
        white: 'text-white',
      },
      size: {
        responsive:
          'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl w-20 sm:w-28 md:w-36 lg:w-40 xl:w-48 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16',
        small: 'text-sm w-16 h-6',
        big: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl w-48 sm:w-60 md:w-72 lg:w-80 h-12 sm:h-16 md:h-20 lg:h-24',
      },
    },
    defaultVariants: {
      bgColor: 'blue',
      textColor: 'green',
      size: 'responsive',
    },
  }
);

interface ReadMoreButtonProps
  extends VariantProps<typeof readMoreButtonStyles> {
  url: string;
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({
  bgColor,
  textColor,
  size,
  url,
}) => {
  const handleClick = () => {
    window.open(`${url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={readMoreButtonStyles({ bgColor, textColor, size })}
      onClick={handleClick}
    >
      <span className="whitespace-nowrap">
        Read More {'>'}
        {'>'}
      </span>
    </button>
  );
};

export default ReadMoreButton;
