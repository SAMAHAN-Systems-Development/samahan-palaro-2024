interface OldSportEvent {
  game_title: string;
  variant: string;
  split_type?: string;
  first_place_name?: string;
  second_place_name?: string;
  third_place_name?: string;
  var1_first_place_name?: string;
  var1_second_place_name?: string;
  var1_third_place_name?: string;
  var2_first_place_name?: string;
  var2_second_place_name?: string;
  var2_third_place_name?: string;
}

interface ArticleData {
  title: string;
  body: string;
  url: string;
  image: string;
}

interface NewSportEvent {
  game_title: string;
  variant: string;
  split_type?: string; // Keep the original strict typing
  winners: {
    place: string;
    name: string;
  }[];
  articleTitle: string;
  articleBody: string;
  articleUrl: string;
  articleImage: string;
}

export function transformSportsData(
  oldData: OldSportEvent[],
  articles: ArticleData[]
): NewSportEvent[] {
  return oldData.map((event, index) => {
    const article = articles[index];

    const getWinners = () => {
      if (event.variant === 'split') {
        let variant1: string;
        let variant2: string;

        if (event.split_type === 'gender') {
          variant1 = "Women's";
          variant2 = "Men's";
        } else if (event.split_type === 'game type') {
          variant1 = 'Doubles';
          variant2 = 'Singles';
        } else {
          variant1 = 'Variant 1';
          variant2 = 'Variant 2';
        }

        const splitWinners = [
          {
            place: `${variant1} First`,
            name: event.var1_first_place_name || '',
          },
          {
            place: `${variant1} Second`,
            name: event.var1_second_place_name || '',
          },
          {
            place: `${variant1} Third`,
            name: event.var1_third_place_name || '',
          },
          {
            place: `${variant2} First`,
            name: event.var2_first_place_name || '',
          },
          {
            place: `${variant2} Second`,
            name: event.var2_second_place_name || '',
          },
          {
            place: `${variant2} Third`,
            name: event.var2_third_place_name || '',
          },
        ];

        return splitWinners.filter((winner) => winner.name !== '');
      } else {
        const normalWinners = [
          { place: 'First', name: event.first_place_name || '' },
          { place: 'Second', name: event.second_place_name || '' },
          { place: 'Third', name: event.third_place_name || '' },
        ];
        return normalWinners.filter((winner) => winner.name !== '');
      }
    };

    return {
      game_title: event.game_title,
      variant: event.variant,
      split_type: event.split_type,
      winners: getWinners(),
      articleTitle: article.title,
      articleBody: article.body,
      articleUrl: article.url,
      articleImage: article.image,
    };
  });
}
