export const transform = (old) => {
  return Object.fromEntries(Object.entries(old).map(entry => {
    return entry[1].map(letter => {
      return [letter.toLowerCase(), Number(entry[0])];
    });
  }).flat());
};
