//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const dna_rna = {
    "A": "U",
    "C": "G",
    "G": "C",
    "T": "A"
  };
  return [...dna].map(n => {
    return dna_rna[n];
  }).join('');
};
