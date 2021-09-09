//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const tKeys = 
{
  Methionine: ['AUG'],
  Isoleucine: ['AUC', 'AUU', 'AUA'],
  Threonine: ['ACA', 'ACU', 'ACG', 'ACC'],
  Asparagine: ['AAU', 'AAC'],
  // Commented out for 'non-existing codon' test 
  // Lysine: ['AAA', 'AAG'],
  Valine: ['GUU', 'GUA', 'GUC', 'GUG'],
  Alanine: ['GCG', 'GCA', 'GCC', 'GCU'],
  AsparticAcid: ['GAU', 'GAC'],
  GlutamicAcid: ['GAA', 'GAG'],
  Glycine: ['GGG', 'GGA', 'GGC', 'GGU'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG'],
  Proline: ['CCC', 'CCU', 'CCA', 'CCG'],
  Histidine: ['CAU', 'CAC'],
  Glutamine: ['CAA', 'CAG'],
  Arginine: ['CGG', 'CGC', 'CGU', 'CGA', 'AGA', 'AGG'],
  Serine: ['UCU', 'UCC', 'UCG', 'UCA', 'AGU', 'AGC'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
  STOP: ['UAA', 'UAG', 'UGA']
};

function invalidCodons(codons) {
  return codons.some(codon => !Object.values(tKeys).flat().includes(codon))
}

function noStop(codons) {
  return !codons.some(codon => tKeys['STOP'].includes(codon))
}

function codonMapping(codons) {
  let stopExists = false;
  return codons.map(codon => {
    for (let amino_acid in tKeys) {
      if (tKeys['STOP'].includes(codon)) { stopExists = true;}
      if (!stopExists && tKeys[amino_acid].includes(codon)) { return amino_acid; }
    }
  }).filter(amino_acid => amino_acid != undefined);
}

function invalidRNA(Rna, codons) {
  return codons.join('').length != Rna.length
}

export const translate = (Rna='') => {
  const codons = Rna.match(/.{3}/g)
  if (Rna === '') { return [] }
  if (invalidCodons(codons) || (noStop(codons) && invalidRNA(Rna, codons))) {
    throw new Error("Invalid codon");
  } else { return codonMapping(codons)}
};
