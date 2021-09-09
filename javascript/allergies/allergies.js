const allergens = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

export class Allergies {
  constructor(score) {
    this.allergies = allergens.filter((_, i) => 2**i & score)
    this.list = () => this.allergies
    this.allergicTo = (allergen) => this.allergies.includes(allergen);
  }
}
