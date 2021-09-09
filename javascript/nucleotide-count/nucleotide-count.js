export class NucleotideCounts {
  static parse(strand) {
    if (strand.match(/[^ACGT]/g)) { throw new Error('Invalid nucleotide in strand') }
    return ['A', 'C', 'G', 'T'].map(n => (strand.match(new RegExp(n, 'g')) || []).length).join(' ')
  }
}
