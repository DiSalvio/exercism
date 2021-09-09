ordinal = [
    "padding",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth"
]

gifts = [
    "padding",
    "a Partridge in a Pear Tree.",
    "two Turtle Doves, and ",
    "three French Hens, ",
    "four Calling Birds, ",
    "five Gold Rings, ",
    "six Geese-a-Laying, ",
    "seven Swans-a-Swimming, ",
    "eight Maids-a-Milking, ",
    "nine Ladies Dancing, ",
    "ten Lords-a-Leaping, ",
    "eleven Pipers Piping, ",
    "twelve Drummers Drumming, "
]

def recite(start_verse, end_verse):
    return list(map(x_day_of_christmas, range(start_verse, end_verse+1)))

def x_day_of_christmas(day):
    return f"On the {ordinal[day]} day of Christmas my true love gave to me: " + \
           ''.join(map(lambda verse: gifts[verse], range(1, day+1)[::-1]))

