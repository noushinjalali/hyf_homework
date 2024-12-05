const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const timeOfTrip = (obj) => {
  const timeToReach = obj.destinationDistance / obj.speed;
  const timeInHour = Math.floor(timeToReach);
  const timeInMinutes = Math.floor((timeToReach - timeInHour) * 60);
  return `${timeInHour} hours and ${timeInMinutes} minutes`;
};
const travelTime = timeOfTrip(travelInformation);
console.log(travelTime);
