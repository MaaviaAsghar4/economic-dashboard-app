export const fetchData = async (
  seriesCode: string,
  dateTo = "2021-01-01",
  dateFrom = "2015-01-01"
) => {
  const request = await fetch(
    `https://www.econdb.com/api/series/${seriesCode}/?from=${dateFrom}&to=${dateTo}&format=json`
  );

  const response = await request.json();

  return response;
};
