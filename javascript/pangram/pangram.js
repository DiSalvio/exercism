//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let letter of letters) {
    if (!word.toLowerCase().includes(letter)) {
      return false;
    }
  }
  return true;
};
