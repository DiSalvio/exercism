allergens = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']
class Allergies:
    def __init__(self, score):
        self.score = score


    def allergic(self, allergen):
        return 2**allergens.index(allergen) & self.score


    def allergic_to(self, item):
        return item in self.lst()

    @property
    def lst(self):
        return filter(lambda x: self.allergic(self, x), allergens)
