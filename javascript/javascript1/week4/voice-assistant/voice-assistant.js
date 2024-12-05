const dayjs = require('dayjs');
const math = require('mathjs');

function getReply(command) {
  const storeName = "Benjamin";
  const toDo = ["fishing", "singing in the shower"];
  const myDate = dayjs();
  const formatOfDate = myDate.format("dddd DD of MMMM YYYY, hh:mm A");
  
  switch (command) {
    case `Hello my name is ${storeName}`:
      return `Nice to meet you ${storeName}`;

    case "What is my name?":
      if (storeName.toLowerCase) {
        return `Your name is ${storeName}`;
      } else {
        return "Your name has not been set yet";
      }

    case "What day is it today?":
      return `Today is ${formatOfDate}`;

    default:
      if (command.startsWith("Add ")) {
        const task = command.replace("Add ", "").replace(" to my todo", "");
        toDo.push(task);
        return `${task} added to your todo`;
      }

      if (command.startsWith("Remove ")) {
        const task = command
          .replace("Remove ", "")
          .replace(" from my todo", "");
        const index = toDo.indexOf(task);
        if (index > -1) {
          toDo.splice(index, 1);
          return `Removed ${task} from your todo`;
        } else {
          return `${task} not found in your todo`;
        }
      }

      if (command === "What is on my todo?") {
        if (toDo.length === 0) {
          return "Your todo list is empty";
        } else {
            return `You have ${toDo.length} todos on your list`
        }
      }
      
      if (command.startsWith("Calculate ")) {
        const calculate = command.replace("Calculate ", "");
        try {
          const result = math.evaluate(calculate);
          return `The result of ${calculate} is ${result}`;
        } catch (error) {
          return "Sorry, I didn't catch that";
        }
      }

      if (command.startsWith("Set a timer for ")) {
        const timeString = command.replace("Set a timer for ", "");
        const timeInMinutes = parseFloat(timeString);
        if (!isNaN(timeInMinutes) && timeInMinutes > 0) {
          setTimeout(() => {
            console.log("Timer done");
          }, timeInMinutes * 60 * 1000); // Convert minutes to milliseconds
          return `Timer set for ${timeInMinutes} minutes`;
        } else {
          return "Sorry, I catch catch that";
        }
      }

return "Invalid command";
  }
};

console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("What is my name?"));
console.log(getReply("Your name has not been set yet"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?")); 
console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("What is on my todo?")); 
console.log(getReply("What day is it today?")); 
console.log(getReply("Calculate 3 + 3")); 
console.log(getReply("Calculate 12 * 4")); 
console.log(getReply("Calculate 2 * (3 + 4)"));
console.log(getReply("Calculate 67 **")); 
console.log(getReply("Set a timer for 1 minutes")); 

