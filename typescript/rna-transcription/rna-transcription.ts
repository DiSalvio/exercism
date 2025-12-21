type DnaBase = 'G' | 'C' | 'A' | 'T'
type RnaBase = 'G' | 'C' | 'A' | 'U'

const DNA_TO_RNA: Record<DnaBase, RnaBase> = {
  'G': 'C',
  'C': 'G',
  'A': 'U',
  'T': 'A'
}

function isDnaBase(base: string): base is DnaBase {
  return base in DNA_TO_RNA;
}

export function toRna(dna: string): string {
  return Array.from(dna, dna_base => {
    if (!isDnaBase(dna_base)) {
      throw new Error('Invalid input DNA.');
    }
    return DNA_TO_RNA[dna_base];
  }).join('');
}
