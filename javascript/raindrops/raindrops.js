export const convert = (num) => {
  const sounds = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong'
  }
  return Object.entries(sounds).map(sound => {
    if (num % +sound[0] == 0) {
      return sound[1]
    }
  }).join('') || num.toString();
};
