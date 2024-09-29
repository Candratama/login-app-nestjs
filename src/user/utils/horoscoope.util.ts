// src/user/utils/horoscope.util.ts
export function getHoroscopeAndZodiac(birthdate: Date | string): {
  horoscope: string;
  zodiac: string;
} {
  const date = new Date(birthdate);
  const year = date.getFullYear();
  const previousYear = year - 1;
  const nextYear = year + 1;

  const horoscopes = [
    {
      sign: 'Aries',
      start: new Date(previousYear, 2, 21),
      end: new Date(previousYear, 3, 19),
    },
    {
      sign: 'Taurus',
      start: new Date(previousYear, 3, 20),
      end: new Date(previousYear, 4, 20),
    },
    {
      sign: 'Gemini',
      start: new Date(previousYear, 4, 21),
      end: new Date(previousYear, 5, 21),
    },
    {
      sign: 'Cancer',
      start: new Date(previousYear, 5, 22),
      end: new Date(previousYear, 6, 22),
    },
    {
      sign: 'Leo',
      start: new Date(previousYear, 6, 23),
      end: new Date(previousYear, 7, 22),
    },
    {
      sign: 'Virgo',
      start: new Date(previousYear, 7, 23),
      end: new Date(previousYear, 8, 22),
    },
    {
      sign: 'Libra',
      start: new Date(previousYear, 8, 23),
      end: new Date(previousYear, 9, 23),
    },
    {
      sign: 'Scorpio',
      start: new Date(previousYear, 9, 24),
      end: new Date(previousYear, 10, 21),
    },
    {
      sign: 'Sagittarius',
      start: new Date(previousYear, 10, 22),
      end: new Date(previousYear, 11, 21),
    },
    {
      sign: 'Capricorn',
      start: new Date(previousYear, 11, 22),
      end: new Date(year, 0, 19),
    },
    {
      sign: 'Aquarius',
      start: new Date(year, 0, 20),
      end: new Date(year, 1, 18),
    },
    {
      sign: 'Pisces',
      start: new Date(year, 1, 19),
      end: new Date(year, 2, 20),
    },
    {
      sign: 'Aries',
      start: new Date(year, 2, 21),
      end: new Date(year, 3, 19),
    },
    {
      sign: 'Taurus',
      start: new Date(year, 3, 20),
      end: new Date(year, 4, 20),
    },
    {
      sign: 'Gemini',
      start: new Date(year, 4, 21),
      end: new Date(year, 5, 21),
    },
    {
      sign: 'Cancer',
      start: new Date(year, 5, 22),
      end: new Date(year, 6, 22),
    },
    {
      sign: 'Leo',
      start: new Date(year, 6, 23),
      end: new Date(year, 7, 22),
    },
    {
      sign: 'Virgo',
      start: new Date(year, 7, 23),
      end: new Date(year, 8, 22),
    },
    {
      sign: 'Libra',
      start: new Date(year, 8, 23),
      end: new Date(year, 9, 23),
    },
    {
      sign: 'Scorpio',
      start: new Date(year, 9, 24),
      end: new Date(year, 10, 21),
    },
    {
      sign: 'Sagittarius',
      start: new Date(year, 10, 22),
      end: new Date(year, 11, 21),
    },
    {
      sign: 'Capricorn',
      start: new Date(year, 11, 22),
      end: new Date(nextYear, 0, 19),
    },
    {
      sign: 'Aquarius',
      start: new Date(nextYear, 0, 20),
      end: new Date(nextYear, 1, 18),
    },
    {
      sign: 'Pisces',
      start: new Date(nextYear, 1, 19),
      end: new Date(nextYear, 2, 20),
    },
  ];

  const zodiacSigns = [
    {
      sign: 'Rat',
      years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
    },
    {
      sign: 'Ox',
      years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
    },
    {
      sign: 'Tiger',
      years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
    },
    {
      sign: 'Rabbit',
      years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
    },
    {
      sign: 'Dragon',
      years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
    },
    {
      sign: 'Snake',
      years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
    },
    {
      sign: 'Horse',
      years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
    },
    {
      sign: 'Goat',
      years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
    },
    {
      sign: 'Monkey',
      years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    },
    {
      sign: 'Rooster',
      years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    },
    {
      sign: 'Dog',
      years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    },
    {
      sign: 'Pig',
      years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
    },
  ];

  const horoscope =
    horoscopes.find((h) => date >= h.start && date <= h.end)?.sign || 'Unknown';
  const zodiac =
    zodiacSigns.find((z) => z.years.includes(date.getFullYear()))?.sign ||
    'Unknown';

  return { horoscope, zodiac };
}
