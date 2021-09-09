def is_isogram(string):
    string_only_az = ''.join(filter(str.isalpha, string)).lower()
    return len(string_only_az) == len(set(string_only_az))
