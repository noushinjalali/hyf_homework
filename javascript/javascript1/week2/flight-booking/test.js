

function getFullname(firstname, surname, formalName = true, isMale = true){
    return firstname + ' ' + surname;
    if (formalName = true, isMale = true){
        console.log('Lord ' + firstname + surname);
    }else if(formalName = true, isMale = false){
        console.log('Lady ' + firstname + surname);
    } else(formalName = false){
        console.log(firstname + surname)
    }
}
const fullName1 = getFullname('Benjamin', 'Hughes', true);
const fullName2 = getFullname('Noushin', 'Golverdi', false)

console.log(fullName1);
console.log(fullName2);