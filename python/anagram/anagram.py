from collections import Counter

def find_anagrams(w, candidates):
    return filter(lambda c: c.lower() != w.lower() and Counter(c.lower()) == Counter(w.lower()), candidates)
