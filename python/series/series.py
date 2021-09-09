def slices(series, length):
    if series and length > 0 and length <= len(series):
        return [series[start:start+length] for start in range(0,len(series)-length+1)]
    else:
        raise ValueError("Series must include at least 1 digit. Length must be greater than 0")

