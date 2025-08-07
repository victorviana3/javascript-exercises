const findTheOldest = function (people) {
  let maxAge = 0;
  const thisYear = new Date().getFullYear();
  people.forEach((person) => {
    if (
      maxAge <
      (person.yearOfDeath ? person.yearOfDeath : thisYear) - person.yearOfBirth
    )
      maxAge =
        (person.yearOfDeath ? person.yearOfDeath : thisYear) -
        person.yearOfBirth;
  });
  return people.find(
    (person) =>
      (person.yearOfDeath ? person.yearOfDeath : thisYear) -
        person.yearOfBirth ===
      maxAge
  );
};

// Do not edit below this line
module.exports = findTheOldest;
