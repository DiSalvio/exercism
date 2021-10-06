def abbreviate(words):
    return ''.join([c for c in words.replace('\'', '').title() if c.isupper()])
