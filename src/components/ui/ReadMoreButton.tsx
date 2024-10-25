import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const readMoreButtonStyles = cva(
  'font-jersey10 transition-all duration-300 cursor-pointer',
  {
    variants: {
      color: {
        blue1: 'bg-blue text-green',
        blue2: 'bg-blue text-white',
        green1: 'bg-green text-blue',
        green2: 'bg-green text-pink',
        pink1: 'bg-pink text-green',
        pink2: 'bg-pink text-white',
        white1: 'bg-white text-blue',
        white2: 'bg-white text-pink',
      },
      size: {
        small: 'text-3xl w-48 h-11',
        big: 'text-5xl w-[332px] h-[102px] ',
      },
    },
    defaultVariants: {
      color: 'blue1',
      size: 'small',
    },
  }
);

const ReadMoreButton: FC<VariantProps<typeof readMoreButtonStyles>> = ({
  color,
  size,
}) => {
  if (size === 'big' && !(color === 'pink1' || color === 'green2')) {
    color = 'pink1';
  }
  return (
    <button className={readMoreButtonStyles({ color, size })}>
      <span>
        Read More {'>'}
        {'>'}
      </span>
    </button>
  );
};

export default ReadMoreButton;
