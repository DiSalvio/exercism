export const meetup = (year, month, nth, day) => {
  const weekdays = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(',');
  const startRange = {
    first: 1,
    second: 8,
    teenth: 13,
    third: 15,
    fourth: 22,
    last: new Date(year, month, 0).getDate()-6 
  };

  return [...Array(7).keys()]
    .map(i => new Date(year, month-1, i+startRange[nth]))
    .filter(date => date.getDay() === weekdays.indexOf(day))[0]
};
