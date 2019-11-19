# Problem Set 3.2
## Additional Practice with Higher-Order Array Methods and List Processing

1. Write a Function named `processReleaseData` that processes the following movie release data:

      ```javascript
      const newReleases = [
        {
          'id': 70111470,
          'title': 'Die Hard',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [4.0],
          'bookmark': [],
        },
        {
          'id': 654356453,
          'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [5.0],
          'bookmark': [{ id:432534, time:65876586 }],
        },
        {
          'title': 'The Chamber',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [4.0],
          'bookmark': [],
        },
        {
          'id': 675465,
          'title': 'Fracture',
          'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
          'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': [5.0],
          'bookmark': [{ id:432534, time:65876586 }],
        },
      ];
      ```
  The Function should generate an Array of Objects that contain only the `id` and `title` key/value pairs. You may assume that `id`, when existing, is an integer greater than 0. Here are the rules:

  Keep only releases that have both `id` and `title` data present.
  Keep only the `id` and `title` data for each release.

      ```javascript
      processReleaseData(newReleases); // [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
      ```

2. Write a Function named `octalToDecimal` that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you. Check out [this video](https://www.youtube.com/watch?v=YCM2JReWS10)

      Examples:
      ```javascript
      octalToDecimal('1');           // 1
      octalToDecimal('10');          // 8
      octalToDecimal('130');         // 88
      octalToDecimal('17');          // 15
      octalToDecimal('2047');        // 1063
      octalToDecimal('011');         // 9
      ```

3. Write a Function named `anagram` that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

      Examples:
      ```javascript
      anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
      anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
      ```

4. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'. (**Note:** Valid triangles have three angles that sum to 180 degrees.) You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

      Examples:
      ```javascript
      triangle(60, 70, 50);       // "acute"
      triangle(30, 90, 60);       // "right"
      triangle(120, 50, 10);      // "obtuse"
      triangle(0, 90, 90);        // "invalid"
      triangle(50, 50, 50);       // "invalid"
      ```

5. Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future. **Note:** You may need to review [this article](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript) on the `Date` object from [Lesson 2.6](https://github.com/The-Marcy-Lab-School/se-unit-2/tree/master/lesson-6-objects)

      Examples:
      ```javascript
      fridayThe13ths(1986);      // 1
      fridayThe13ths(2015);      // 3
      fridayThe13ths(2017);      // 2
      ```


