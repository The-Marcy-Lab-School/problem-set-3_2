// First, filter the movie objects so that you have an array of only movies that have an id and title
// Then, map the movie objects into an array of simpler objects with only an id and title
function processReleaseData(newReleases) {
  return newReleases.filter(release => release.id && release.title)
    .map(release => ({ id: release.id, title: release.title }));
}

// The input number is actually a string, you can iterate through the string backwards
// Use parseInt() to convert a string digit into a number value
// Outside the loop, you might need to create a varible to keep track of what 8's digit you're on.
// Each iteration, you should be multiplying the digit by 8 to some power and add that to a running sum
/*
Example: "624"
Iterate through this number 3 times (one for each digit), starting with the last digit and moving left
Loop 1: "4" should be converted to 4. Mulitple 4 with 8 to the 0 power: (4 * 8^0 = 4)
Loop 2: "2" should be converted to 2. Multiple 2 with 8 to the 1 power: (2 * 8^1 = 16)
Loop 3: "6" should be converted to 6. Multiple 6 with 8 to the 2 power: (6 * 8^2 = 384)
The answer is 4 + 16 + 384 = 404
*/
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
