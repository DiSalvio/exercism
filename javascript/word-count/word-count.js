export const countWords = (words) => {
  return words.toLowerCase().match(/[a-z0-9]+(?:'[a-z]+)?/g).reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count
  }, {});
};
