
export const calculateDayDifference = (date: string): number => {
  // Calculate the difference in days between the published date and current date
  const todaysDate = new Date(Date.now());
  const postedDate = new Date(date);

  const differenceInTime: number = todaysDate.getTime() - postedDate.getTime();
  const differenceInDays: number = parseInt((differenceInTime / (1000 * 3600 * 24)).toPrecision(1));

  return differenceInDays;
}
