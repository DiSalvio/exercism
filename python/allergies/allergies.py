ALLERGENS = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

class Allergies:
    def __init__(self, score):
        self.allergies = [allergy for allergy in ALLERGENS if score & 2**ALLERGENS.index(allergy)]

    def allergic_to(self, item):
        return item in self.allergies

    @property
    def lst(self):
        return self.allergies
