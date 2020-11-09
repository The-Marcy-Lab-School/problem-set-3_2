const exercises = require('./exercises');

// Question 1
test('Question 1: processReleaseData', () => {
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
    expect(exercises.processReleaseData(newReleases)).toEqual([{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }]);
});

// Question 1
test('Question 1: processReleaseData again', () => {
    const newReleases = [
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
            'id': 70111471,
            'title': 'Die Hard',
            'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
            'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
            'rating': [4.0],
            'bookmark': [],
        },
        {
            'id': 675466,
            'title': 'Fracture',
            'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
            'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
            'rating': [5.0],
            'bookmark': [{ id:432534, time:65876586 }],
        },
    ];
    expect(exercises.processReleaseData(newReleases)).toEqual([{ id: 70111471, title: 'Die Hard'}, { id: 675466, title: 'Fracture' }]);
});

// Question 2
test('Question 2: octalToDecimal', () => {
    expect(exercises.octalToDecimal('1')).toEqual(1);
    expect(exercises.octalToDecimal('10')).toEqual(8);
    expect(exercises.octalToDecimal('130')).toEqual(88);
    expect(exercises.octalToDecimal('17')).toEqual(15);
    expect(exercises.octalToDecimal('2047')).toEqual(1063);
    expect(exercises.octalToDecimal('11')).toEqual(9);
});

// Question 3
test('Question 3: anagram', () => {
  expect(exercises.anagram('listen', ['enlists', 'google', 'inlets', 'banana'])).toEqual([ "inlets" ]);
  expect(exercises.anagram('listen', ['enlist', 'google', 'inlets', 'banana'])).toEqual([ "enlist", "inlets" ]);
});

// Question 4
test('Question 4: triangle', () => {
  expect(exercises.triangle(60, 70, 50)).toBe("acute");
  expect(exercises.triangle(30, 90, 60)).toBe("right");
  expect(exercises.triangle(120, 50, 10)).toBe("obtuse");
  expect(exercises.triangle(0, 90, 90)).toBe("invalid");
  expect(exercises.triangle(50, 50, 50)).toBe("invalid");
});

// Question 5
test('Question 5: fridayThe13ths', () => {
  expect(exercises.fridayThe13ths(1986)).toBe(1);
  expect(exercises.fridayThe13ths(2015)).toBe(3);
  expect(exercises.fridayThe13ths(2017)).toBe(2);
});

