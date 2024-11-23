'use client';
import Article from '@/components/ui/Article';
import SportsWinnersContainer from '@/components/ui/SportsWinnersContainer';
import React, { useMemo } from 'react';
import sportsArticleData from '@/data/sportsArticleData.json';
import sportsWinnersData from '@/data/sportsWinnersData.json';
import { transformSportsData } from '@/utils/transformSportsData';

const COLORS = ['blue', 'green', 'pink', 'white'];

const getValidColors = (bgColor: string, borderColor?: string) => {
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

const calculateColorScheme = (seed: number) => {
  const bgColor = COLORS[seed % COLORS.length];
  const validColors = getValidColors(bgColor);
  const borderColorIndex = seed % validColors.length;
  const borderColor = validColors[borderColorIndex];
  const validTextColors = getValidColors(bgColor);
  const textColorIndex = (seed + 1) % validTextColors.length;
  const textColor = validTextColors[textColorIndex];
  const headerColorIndex = (seed + 2) % validTextColors.length;
  const headerColor = validTextColors[headerColorIndex];
  const validButtonColors = getValidColors(bgColor, borderColor);
  const buttonTextColor =
    validButtonColors[(seed + 3) % validButtonColors.length];
  return {
    bgColor,
    borderColor,
    textColor,
    headerColor,
    buttonTextColor,
  };
};

const data = transformSportsData(sportsWinnersData, sportsArticleData);

export default function Test() {
  const colorSchemes = useMemo(() => {
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
          <div key={index} className="flex min-h-[25vh]">
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
