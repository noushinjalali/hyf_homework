const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Breaking Bad",
    days: 16,
    hours: 21,
    minutes: 0,
  },
];

const perOfSeriesInYear = (obj) => {
  const lifeSpan = 80;
  const totalMinLifeSpan = 365 * 24 * 60 * lifeSpan;
  const percentages = [];
  let totalMinSeries = 0;
  let totalPercentage = 0;
  for (let series of seriesDurations) {
    const totalMinSeries =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const percentageOfLife = (totalMinSeries / totalMinLifeSpan) * 100;
    totalPercentage += percentageOfLife;
    console.log(
      `${series.title} took ${percentageOfLife.toFixed(3)} % of my life`
    );
  }

  console.log(`\nIn total, that is ${totalPercentage.toFixed(3)}% of my life`);
};

const percentageOfEachSeries = perOfSeriesInYear(seriesDurations);
