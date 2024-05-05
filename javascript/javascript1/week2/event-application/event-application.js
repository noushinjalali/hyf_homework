function getEventWeekday(daysFromToday) {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysFromToday);

  const weekdayIndex = futureDate.getDay();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[weekdayIndex];
}

console.log(getEventWeekday(10));
console.log(getEventWeekday(45));
