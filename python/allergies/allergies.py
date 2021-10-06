ALLERGENS = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

class Allergies:
    def __init__(self, score):
        self.score = score

    def allergic_to(self, item):
        return bool(self.score & 2**ALLERGENS.index(item))

    @property
    def lst(self):
        return [allergen for allergen in ALLERGENS if self.allergic_to(allergen)]
