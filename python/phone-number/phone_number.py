class PhoneNumber:
    def __init__(self, number):
        self.number = ''.join([num for num in number if num.isdigit()])
        if self.number[0]=='1' and len(self.number) == 11:
            self.number = self.number[1:]
        if len(self.number) < 9 or len(self.number) > 10:
            raise ValueError("Phone numbers are 10-11 digits long")
        if self.number[0] == '0' or self.number[0] == '1':
            raise ValueError("Invalid area code")
        if self.number[3] == '0' or self.number[3] == '1':
            raise ValueError("Invalid exchange code")
        self.area_code = self.number[0:3]


    def pretty(self):
        return f"({self.number[0:3]})-{self.number[3:6]}-{self.number[6:]}"


