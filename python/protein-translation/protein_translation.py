def proteins(strand):
    codons = [strand[i*3:(i+1)*3] for i in range(0, int(len(strand)/3))]
    amino_acids = {
        "Methionine": ["AUG"],
        "Phenylalanine": ["UUU", "UUC"],
        "Leucine": ["UUA", "UUG"],
        "Serine": ["UCU", "UCC", "UCA", "UCG"],
        "Tyrosine": ["UAU", "UAC"],
        "Cysteine": ["UGU", "UGC"],
        "Tryptophan": ["UGG"],
        "STOP": ["UAA", "UGA", "UAG"]
        }
    primary = [amino_acid for codon in codons for amino_acid in amino_acids if codon in amino_acids[amino_acid]]
    if "STOP" in primary:
        return primary[0:primary.index("STOP")]
    else:
        return primary
