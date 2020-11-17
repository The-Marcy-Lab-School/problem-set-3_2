// First, filter the movie objects so that you have an array of only movies that have an id and title
// Then, map the movie objects into an array of simpler objects with only an id and title
function processReleaseData(newReleases) {
  return newReleases.filter(release => release.id && release.title)
    .map(release => ({ id: release.id, title: release.title }));
}

// The input number is actually a string, you can iterate through the string backwards
// Use parseInt() to convert a string digit into a number value
// Think about what variables you need to establsh outside the loop
// Each iteration, you should be multiplying a digit with 8 to some power and add that to a running sum
function octalToDecimal(numberString) {
  let value = 0;
  let place = 0;
  for (let i = numberString.length - 1; i >= 0; i--) {
    value += parseInt(numberString[i], 10) * (8 ** place);
    place += 1;
  }
  return value;
}

// One cool trick is to sort all the letters in two arrays
// If the arrays have the same data in the same order, they are anagrams
// Use filter to create a new array containing only anagrams
function anagram(word, array) {
  const sortedLetters = word.split("").sort().join();
  const anagrams = array.filter(string => string.split("").sort().join() === sortedLetters);
  return anagrams;
}

// Create an if statment for every possible use case
function triangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "invalid";
  }
  if (a + b + c !== 180) {
    return "invalid";
  }
  if (a === 90 || b === 90 || c === 90) {
    return "right";
  }
  if (a > 90 || b > 90 || c > 90) {
    return "obtuse";
  }
  return "acute";
}

// There are only 12 13th's a year
// For the input yet, loop through each of the 12 13th's of the month and check if it falls on a Friday
// If so, add that to a running counter variable
function fridayThe13ths(year) {
  let counter = 0;
  for (let i = 0; i < 12; i++) {
    const day = new Date(year, i, 13);
    if (day.getDay() === 5) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = {
  processReleaseData,
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
