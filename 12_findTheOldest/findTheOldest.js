const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const prevBirth = oldest.yearOfBirth;
        const prevDeath = oldest.yearOfDeath === undefined ? (new Date()).getFullYear() : oldest.yearOfDeath;
        const currentBirth = person.yearOfBirth;
        const currentDeath = person.yearOfDeath === undefined ? (new Date()).getFullYear() : person.yearOfDeath;
        const prevAge = prevDeath - prevBirth;
        const currentAge = currentDeath - currentBirth
        return prevAge < currentAge ? person
         : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
