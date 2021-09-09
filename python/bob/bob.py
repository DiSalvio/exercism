def response(prompt):
    if prompt.strip().endswith('?') and prompt.isupper():
        return "Calm down, I know what I'm doing!"
    elif prompt.strip().endswith('?'):
        return "Sure."
    elif prompt.isupper():
        return "Whoa, chill out!"
    elif prompt.strip() == '':
        return "Fine. Be that way!"
    else:
        return "Whatever."
