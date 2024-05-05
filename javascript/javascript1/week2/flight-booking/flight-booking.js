function getFullName(firstName, surName, formalName = false, isMale = true) {
  if (!firstName || !surName) {
    return "!!!Both first name and last name must be provided";
  }
  if (!formalName) {
    return `${firstName} ${surName}`;
  } else if (formalName === true && isMale === true) {
    return `Lord ${firstName} ${surName}`;
  } else if (formalName === true && isMale === false) {
    return `Lady ${firstName} ${surName}`;
  }
}

const fullName1 = getFullName("Benjamin", "Hughes", true, true);
const fullName2 = getFullName("Noushin", "Golverdikhan", false, false);
const fullName3 = getFullName("", "", false, false); // The empty firstName and sureName throws an error

console.log(fullName1);
console.log(fullName2);
console.error(fullName3);
