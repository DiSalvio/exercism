from string import ascii_uppercase
from random import randint, choice

class Robot:
    robot_names = set()

    def __init__(self):
        self.name = self.assign_name()

    def assign_name(self):
        self.name = ''
        while not self.name: 
            temp_name = self.generate_name()
            if temp_name not in Robot.robot_names:
                Robot.robot_names.add(temp_name)
                return temp_name

    def generate_name(self):
        return ''.join([choice(ascii_uppercase) for x in range(0,2)]) + str(randint(100,999))

    def reset(self):
        self.name = self.assign_name()

