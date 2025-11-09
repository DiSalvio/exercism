EXPECTED_BAKE_TIME = 40


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers):
    """Calculates the prep time in minutes by the number of layers

    :param number_of_layers: int - how much lasagna you want
    :return - int - total prep time in minutes
    """
    return number_of_layers * 2

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculates the elapsed time in minutes

    :param number_of_layers: int - how much lasagna you want
           elapsed_bake_teim: int - how long it has been baking
    :return - int elapsed_time_in_minutes
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
