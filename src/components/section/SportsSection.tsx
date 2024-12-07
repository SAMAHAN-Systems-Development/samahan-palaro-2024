'use client';
import Article from '@/components/ui/Article';
import SportsWinnersContainer from '@/components/ui/SportsWinnersContainer';
import React, { useMemo } from 'react';
import sportsArticleData from '@/data/sportsArticleData.json';
import sportsWinnersData from '@/data/sportsWinnersData.json';
import { transformSportsData } from '@/utils/transformSportsData';

// Define color types
type ColorType = 'blue' | 'green' | 'pink' | 'white';
const COLORS: ColorType[] = ['blue', 'green', 'pink', 'white'];

interface ColorScheme {
  bgColor: ColorType;
  borderColor: ColorType;
  textColor: ColorType;
  headerColor: ColorType;
  buttonTextColor: ColorType;
}

const getValidColors = (bgColor: ColorType, borderColor?: ColorType): ColorType[] => {
  return COLORS.filter((color) => {
    if (color === bgColor) return false;
    if (
      (bgColor === 'green' && color === 'white') ||
      (bgColor === 'white' && color === 'green')
    )
      return false;
    if (borderColor && color === borderColor) return false;
    if (
      (borderColor === 'green' && color === 'white') ||
      (borderColor === 'white' && color === 'green')
    )
      return false;
    return true;
  });
};

const calculateColorScheme = (seed: number): ColorScheme => {
  const bgColor = COLORS[seed % COLORS.length];
  const validColors = getValidColors(bgColor);
  const borderColor = validColors[seed % validColors.length];
  const validTextColors = getValidColors(bgColor);
  const textColor = validTextColors[(seed + 1) % validTextColors.length];
  const headerColor = validTextColors[(seed + 2) % validTextColors.length];
  const validButtonColors = getValidColors(bgColor, borderColor);
  const buttonTextColor = validButtonColors[(seed + 3) % validButtonColors.length];

  return {
    bgColor,
    borderColor,
    textColor,
    headerColor,
    buttonTextColor,
  };
};

const data = transformSportsData(sportsWinnersData, sportsArticleData);

interface ColorSchemes {
  articleColors: ColorScheme;
  sportsWinnerColors: ColorScheme;
}

export default function Test() {
  const colorSchemes = useMemo<ColorSchemes[]>(() => {
    return data.map((_, index) => ({
      articleColors: calculateColorScheme(index),
      sportsWinnerColors: calculateColorScheme(index + 2),
    }));
  }, []);

  return (
    <div className="w-full">
      {data.map((event, index) => {
        const { articleColors, sportsWinnerColors } = colorSchemes[index];

        return (
          <div key={index} className="grid-cols-1 md:grid-row-2 flex min-h-[25vh]">
            <div
              className={`w-3/5 px-4 py-10 flex justify-center items-center bg-${articleColors.bgColor}`}
            >
              <Article
                imageUrl={event.articleImage}
                title={event.articleTitle}
                content={event.articleBody}
                url={event.articleUrl}
                borderColor={articleColors.borderColor}
                headerColor={articleColors.headerColor}
                textColor={articleColors.textColor}
                buttonTextColor={articleColors.buttonTextColor}
              />
            </div>
            <div
              className={`w-2/5 p-4 flex justify-center items-center bg-${sportsWinnerColors.bgColor}`}
            >
              <SportsWinnersContainer
                game_title={event.game_title}
                winners={event.winners}
                borderColor={sportsWinnerColors.borderColor}
                textColor={sportsWinnerColors.textColor}
                titleTextColor={sportsWinnerColors.buttonTextColor}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}