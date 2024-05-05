function getFullname(firstname, surname, formalName = false, isMale = true) {
  if (!firstname || !surname) {
    return "!!!Both first name and last name must be provided";
  }
  if (!formalName) {
    return firstname + " " + surname;
  } else if (formalName === true && isMale === true) {
    return "Lord" + " " + firstname + " " + surname;
  } else if (formalName === true && isMale === false) {
    return "Lady" + firstname + " " + surname;
  }
}

const fullName1 = getFullname("Benjamin", "Hughes", true, true);
const fullName2 = getFullname("Noushin", "Golverdikhan", false, false);
const fullName3 = getFullname("", "", false, false); // The empty firstname and surename throws an error

console.log(fullName1);
console.log(fullName2);
console.error(fullName3);
