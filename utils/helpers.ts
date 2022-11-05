export const getRandomOfSix = (): number => {
  const minutes = new Date(Date.now()).getMinutes();
  return (minutes % 6) + 1;
};
