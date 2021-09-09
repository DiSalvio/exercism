import re
import collections

def count_words(sentence):
    return dict(collections.Counter(clean(sentence)))

def clean(sentence):
    return re.findall(r"[a-z0-9]+(?:'[a-z]+)?", sentence.lower())
