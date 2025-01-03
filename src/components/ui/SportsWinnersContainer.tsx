import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

// Border Styles with Responsive Text Sizes
const borderTextStyles = cva(['font-chakra-petch'], {
  variants: {
    borderColor: {
      green: 'border-green',
      blue: 'border-blue',
      white: 'border-white',
      pink: 'border-pink',
    },
    textColor: {
      green: 'text-green',
      blue: 'text-blue',
      white: 'text-white',
      pink: 'text-pink',
    },
    size: {
      content: 'text-xs sm:text-base md:text-lg lg:text-lg',
      header: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    },
  },
  defaultVariants: {
    borderColor: 'blue',
    textColor: 'blue',
    size: 'content',
  },
});

// Title Text Color with Responsive Text Sizes
const titleStyles = cva(['font-chakra-petch'], {
  variants: {
    titleTextColor: {
      green: 'text-green',
      blue: 'text-blue',
      white: 'text-white',
      pink: 'text-pink',
    },
    size: {
      content: 'text-xs sm:text-base md:text-lg lg:text-lg',
      header: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    },
  },
  defaultVariants: {
    titleTextColor: 'blue',
    size: 'header',
  },
});

type BorderColorVariants = VariantProps<typeof borderTextStyles>['borderColor'];
type TextColorVariants = VariantProps<typeof borderTextStyles>['textColor'];
type TitleTextColorVariants = VariantProps<
  typeof titleStyles
>['titleTextColor'];
type SizeVariants = VariantProps<typeof borderTextStyles>['size'];

interface Winner {
  place: string;
  name: string;
}

interface SportsWinnerContainerProps {
  game_title: string;
  winners: Winner[];
  borderColor: BorderColorVariants;
  textColor: TextColorVariants;
  titleTextColor: TitleTextColorVariants;
  size?: SizeVariants; // New prop for size
}

const SportsWinnerContainer: FC<SportsWinnerContainerProps> = ({
  game_title,
  winners,
  borderColor,
  textColor,
  titleTextColor,
  size = 'content', // Default size is 'content'
}) => {
  const renderWinners = () => {
    const hasVariants = winners.some(
      (winner) =>
        winner.place.includes("Women's") ||
        winner.place.includes("Men's") ||
        winner.place.includes('Doubles') ||
        winner.place.includes('Singles')
    );

    if (hasVariants) {
      const groupedWinners = winners.reduce<{ [key: string]: Winner[] }>(
        (acc, winner) => {
          let groupKey = 'Singles';

          if (winner.place.includes("Women's")) {
            groupKey = "Women's";
          } else if (winner.place.includes("Men's")) {
            groupKey = "Men's";
          } else if (winner.place.includes('Doubles')) {
            groupKey = 'Doubles';
          }

          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(winner);
          return acc;
        },
        {}
      );

      return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {Object.entries(groupedWinners).map(([groupName, groupWinners]) => (
            <div key={groupName} className="flex-1">
              <p className={`font-bold mb-2 ${borderTextStyles({ size })}`}>
                {groupName}
              </p>
              {groupWinners.map((winner, index) => (
                <div key={index} className="mb-2">
                  <p>{winner.place.split(' ')[1]} Place</p>
                  <p>{winner.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {winners.map((winner, index) => (
          <div key={index}>
            <p>{winner.place} Place</p>
            <p>{winner.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`${borderTextStyles({
        borderColor,
        textColor,
        size,
      })} border-4 px-4 sm:px-8 pb-4 flex flex-col gap-4 text-center text-xl font-medium rounded-sm shadow-sm`}
    >
      <div>
        <h1
          className={`!py-2 px-3 !font-semibold bg-${borderColor} ${titleStyles(
            {
              titleTextColor,
              size: 'header',
            }
          )}`}
        >
          {game_title}
        </h1>
      </div>
      {renderWinners()}
    </div>
  );
};

export default SportsWinnerContainer;
