import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

//Border & Text Colors
const borderTextStyles = cva(['font-chakra-petch'], {
  variants: {
    color: {
      blueBlue: 'border-blue text-blue',
      blueWhite: 'border-blue text-white',
      greenBlue: 'border-green text-blue',
      greenPink: 'border-green text-pink',
      greenWhite: 'border-green text-white',
      pinkGreen: 'border-pink text-green',
      pinkWhite: 'border-pink text-white',
      pinkBlue: 'border-pink text-blue',
      whiteBlue: 'border-white text-blue',
      whitePink: 'border-white text-pink',
      whiteWhite: 'border-white text-white',
    },
  },
  defaultVariants: {
    color: 'blueBlue',
  },
});

//Title Bakcground & Title Color
const titleStyles = cva('font-chakra-petch', {
  variants: {
    titleColor: {
      blueGreen: 'bg-blue text-green',
      pinkGreen: 'bg-pink text-green',
      blueWhite: 'bg-blue text-white',
      pinkWhite: 'bg-pink text-white',
      pinkBlue: 'bg-pink text-blue',
      greenBlue: 'bg-green text-blue',
      greenPink: 'bg-green text-pink',
      whiteBlue: 'bg-white text-blue',
      whitePink: 'bg-white text-pink',
    },
  },
  defaultVariants: {
    titleColor: 'greenBlue',
  },
});

interface Winners {
  id: number;
  game_title: string;
  first_place_name: string;
  second_place_name: string;
  third_place_name: string;
  color:
    | string
    | 'greenWhite'
    | 'blueBlue'
    | 'blueWhite'
    | 'greenBlue'
    | 'greenPink'
    | 'pinkGreen'
    | 'pinkWhite'
    | 'whiteBlue'
    | 'whitePink';
  titleColor:
    | string
    | 'greenBlue'
    | 'greenPink'
    | 'whiteBlue'
    | 'whitePink'
    | 'blueGreen'
    | 'blueWhite'
    | 'pinkGreen'
    | 'pinkWhite';
}

//Allows winnersArray prop to use color & titleColor
interface SportsWinnersContainerProps {
  winnersArray: Winners[];
}

const SportsWinnersContainer: FC<SportsWinnersContainerProps> = ({
  winnersArray,
}) => {
  return (
    <div
      style={{ backgroundColor: '#ced4da' }}
      className={`flex flex-col gap-4 max-w-lg min-w-sm text-xl m-auto p-6 `}
    >
      {winnersArray.map(
        ({
          id,
          game_title,
          first_place_name,
          second_place_name,
          third_place_name,
          color,
          titleColor,
        }) => {
          return (
            <div
              key={id}
              className={`${borderTextStyles({ color })} border-4 px-4 pb-4 flex flex-col gap-4 justify-items-center items-center text-xl font-medium rounded-sm shadow-sm`}
            >
              <div>
                <h1
                  className={`!text-3xl px-6 py-2 !font-semibold ${titleStyles({ titleColor })}`}
                >
                  {game_title}
                </h1>
              </div>
              <div
                className={`flex flex-col justify-items-center items-center`}
              >
                <p>First Place</p>
                <p>{first_place_name}</p>
              </div>
              <div
                className={`flex flex-col justify-items-center items-center`}
              >
                <p>Second Place</p>
                <p>{second_place_name}</p>
              </div>
              <div
                className={`flex flex-col justify-items-center items-center`}
              >
                <p>Third Place</p>
                <p>{third_place_name}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SportsWinnersContainer;
