#def convert(number):
#    result = ""
#    if (number % 3 == 0):
#        result = result + "Pling"
#    if (number % 5 == 0):
#        result = result + "Plang"
#    if (number % 7 == 0):
#        result = result + "Plong"
#    if result == "":
#        return str(number)
#    else:
#        return result
#
def convert(number):
    return ''.join({ key:value for (key,value) in 
        {3:"Pling", 5:"Plang", 7:"Plong"}.items()
        if number % key == 0 }.values()) or str(number)

