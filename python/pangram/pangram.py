import string
az = string.ascii_lowercase

def is_pangram(sentence):
    for char in az:
        if (char not in sentence.lower()):
            return False
    return True
            

