function jumpToCloths(temperature) {
  if (temperature <= -10) {
    return "It's too cold to be pretty. Jump up to an Eskimo dress.";
  } else if (temperature <= 0) {
    return "How to dress for this weather: 1. Take your pants off 2. Get back into bed.";
  } else if (temperature <= 10) {
    return "The winter fat is gone, it's time to have a Spring rolls.";
  } else if (temperature <= 20) {
    return "Do you miss complaining about the cold? Now you need a lightweight shirt/dress.";
  } else temperature <= 30;
  return "No more cloths, just wear a swimsuit and jump up to a swim pool.";
}

const randomNumber = Math.floor(Math.random() * (40 - -20 + 1)) + -20;

console.log(jumpToCloths(randomNumber));
