const findTheOldest = function (people) {
  let maxAge = 0;
  const thisYear = new Date().getFullYear();
  let oldestPerson;
  people.forEach((person) => {
    let finalYear = person.yearOfDeath || thisYear;
    let age = finalYear - person.yearOfBirth;
    if (maxAge < age) {
      maxAge = age;
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
