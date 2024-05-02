function getEventWeekday(daysFromToday) {
    let today = new Date();

    let futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysFromToday);

    let weekdayIndex = futureDate.getDay();

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return weekdays[weekdayIndex];
}

console.log(getEventWeekday(10)); 
console.log(getEventWeekday(45)); 