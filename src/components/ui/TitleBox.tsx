import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const titleBoxStyles = cva('overflow-hidden font-vt323', {
  variants: {
    layout: {
      wide: `w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]`,
      normal: `w-2/5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]`,
    },
    borderColor: {
      pink: 'border-pink rounded-none border-8',
      white: 'border-white rounded-none border-8',
      green: 'border-green rounded-none border-8',
    },
    titleColor: {
      pink: 'text-pink',
      white: 'text-white',
      green: 'text-green',
    },
    bgColor: {
      pink: 'bg-pink',
      white: 'bg-white',
      green: 'bg-green',
    },
  },
});

interface TitleBoxComponentProps extends VariantProps<typeof titleBoxStyles> {
  sportName: string;
  layout?: 'wide' | 'normal';
  borderColor?: 'pink' | 'white' | 'green';
  titleColor?: 'pink' | 'white' | 'green';
  bgColor?: 'pink' | 'white' | 'green';
}

const extractSportName = (title: string): string => {
  const lowerTitle = title.toLowerCase();

  const suffixes = [
    ' men',
    ' women',
    ' boys',
    ' girls',
    ' singles',
    ' doubles',
    ' teams',
    ' individual',
    ' male',
    ' female',
    'and',
    'mixed',
  ];

  let result = lowerTitle;

  for (const suffix of suffixes) {
    result = result.replace(suffix, '');
  }

  result = result.trim();
  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
};

const TitleBox: FC<TitleBoxComponentProps> = ({
  sportName,
  layout,
  borderColor,
  titleColor,
  bgColor,
}) => {
  const extractedSportName = extractSportName(sportName);

  return (
    <div
      className={`${titleBoxStyles({ layout })} flex justify-center items-center`}
    >
      <div
        className={`${titleBoxStyles({ borderColor })} relative flex items-center h-fit w-fit`}
      >
        {sportName && (
          <div
            className={`${titleBoxStyles({ titleColor })} min-w-44 text-7xl p-2 text-center mx-14`}
          >
            {extractedSportName}
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleBox;
