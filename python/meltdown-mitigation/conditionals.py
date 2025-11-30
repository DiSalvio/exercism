"""Functions to prevent a nuclear meltdown."""
from typing import Literal


def is_criticality_balanced(temperature: float, neutrons_emitted: float) -> bool:
    """Verify criticality is balanced.

    A reactor is said to be balanced in criticality if it satisfies the following conditions:
    - The temperature is less than 800 K.
    - The number of neutrons emitted per second is greater than 500.
    - The product of temperature and neutrons emitted per second is less than 500000.
    """

    return temperature < 800 and neutrons_emitted > 500 and temperature * neutrons_emitted < 500000


def reactor_efficiency(
    voltage: float,
    current: float,
    theoretical_max_power: float
) -> Literal['green', 'orange', 'red', 'black']:
    """Assess reactor efficiency zone.

    Efficiency can be grouped into 4 bands:

    1. green -> efficiency of 80% or more,
    2. orange -> efficiency of less than 80% but at least 60%,
    3. red -> efficiency below 60%, but still 30% or more,
    4. black ->  less than 30% efficient.
    """

    generated_power = voltage * current
    efficiency = (generated_power / theoretical_max_power) * 100

    if efficiency >= 80:
        return 'green'
    elif efficiency >= 60:
        return 'orange'
    elif efficiency >= 30:
        return 'red'
    else:
        return 'black'



def fail_safe(
    temperature: float,
    neutrons_produced_per_second: float,
    threshold: float
) -> Literal['LOW', 'NORMAL', 'DANGER']:
    """Assess and return status code for the reactor."""

    risk_indicator = temperature * neutrons_produced_per_second

    if risk_indicator < threshold * 0.9:
        return 'LOW'
    elif threshold * 0.9 <= risk_indicator <= threshold * 1.1:
        return 'NORMAL'
    else:
        return 'DANGER'

