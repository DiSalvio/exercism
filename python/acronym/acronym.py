def abbreviate(words):
    return ''.join(
            map(lambda word: word[0], 
                ''.join(filter(lambda char: char.isalpha() or char == ' ',
                      list(words.replace('-', ' ')))
                    )
                .split()
                )
            ).upper()
