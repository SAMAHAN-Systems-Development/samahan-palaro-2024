import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const readMoreButtonStyles = cva(
  'font-jersey10 transition-all duration-300 cursor-pointer',
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
          'text-lg sm:text-xl md:text-2xl lg:text-3xl w-32 sm:w-36 md:w-40 lg:w-48 h-8 sm:h-9 md:h-10 lg:h-11',
        small: 'text-3xl w-48 h-11',
        big: 'text-5xl w-[332px] h-[102px]',
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
