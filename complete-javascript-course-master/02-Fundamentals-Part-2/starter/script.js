'use strict';

//fuction declaration

/** function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4, 8);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
    return 2037 - birthYear;
}


const age1 = calcAge1(1991);
console.log(age1);

//function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);

//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// function name: calcAge
// parameter: birthYear (placeholders  to receive the value when the function is called)
// fuction body: block of code that we want to reuse, Process the input data and return output data
// return: output data and terminate the function execution

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


// function name: yearsUntilRetirement
// parameters: birthYear, firstName (placeholders  to receive the value when the function is called)
// fuction body: block of code that we want to reuse, Process the input data and return output data
// return: output data and terminate the function execution

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
//calling,running,invoking a function
// arguments: actual value that we pass into the function when calling it
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;

console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(400, 157);

//test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);**/

//Data Structure: Array
//Array is a special variable, which can hold more than one value at a time
//We can store different types of data in an array
//We can use an array to store a collection of data

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//array literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//another way to create an array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); //first element
console.log(friends[2]); //third element

console.log(friends.length); //number of elements in the array
console.log(friends[friends.length - 1]);//last element

friends[2] = 'Jay';
console.log(friends);

//friends = ['Bob', 'Alice']; //error because we cannot reassign an array declared with const

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
function calcAge(birthYear) {
    return 2037 - birthYear;
}
const years1 = [1990, 1967, 2002, 2010, 2018];

for (let y = 0; y < years1.length; y++) {
    console.log({ y, age: calcAge(years1[y]) });
}

// Basic Array Operations (Methods)
const friends1 = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends1.push('Jay'); //add element to the end of the array
console.log(friends1);
console.log(newLength);

friends1.unshift('John'); //add element to the beginning of the array
console.log(friends1);

//Remove elements
friends1.pop(); //remove last element
const popped = friends1.pop(); //remove last element and store it in a variable
console.log(popped);
console.log(friends1);

friends1.shift(); //remove first element
console.log(friends1);

console.log(friends1.indexOf('Steven')); //return the index of the element, if not found return -1
console.log(friends1.indexOf('Bob'));

console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));
friends1.push(23);
console.log(friends1.includes('23')); //false because '23' is a string and 23 is a number
console.log(friends1.includes(23)); //true

if (friends1.includes('Steven')) {
    console.log('You have a friend called Steven');
}

// coding challenge
/*
Steven is still building his tip calculator,
using the same rules as before: Tip 15% of the bill
if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out
the code from first tip calculator challenge if you
need to). Use the function type you like the most.
Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills'
containing the test data below.
3. Create an array 'tips' containing the tip value for
each bill, calculated from the function you created
before.
4. Bonus: Create an array 'total' containing the total
values, so the bill + tip.

Test data: 125, 555 and 44

Hints: Remember that an array needs a value in each position,
and that value can actually be the returned value of a
function! So you can just call a function as array
values (so don't store the tip values in separate
variables first, but right in the new array)
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Arrow function version
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = new Array();
const total = new Array();

for (let bill = 0; bill < bills.length; bill++) {
    const tip = calcTip(bills[bill])
    tips.push(tip);
    total.push(bills[bill] + tip);
    console.log(`The bill was ${bills[bill]}, the tip was ${tip}, and the total value ${bills[bill] + tip}`);
}

console.log(bills, tips, total);


// Objects

const ComfortArray = [
    'Comfort',
    'Shingange',
    2037 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const comfortObject = {
    firstName: 'Comfort',
    lastName: 'Shingange',
    age: 2037 - 1999,
    job: 'Software Engineer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(comfortObject);

console.log(comfortObject.lastName);
console.log(comfortObject['lastName']);

const nameKey = 'Name';
console.log(comfortObject['first' + nameKey]);
console.log(comfortObject['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Comfort? Choose between firstName, lastName, age, job and friends');

if (comfortObject[interestedIn]) {
    console.log(comfortObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

comfortObject.location = 'South Africa';
comfortObject['twitter'] = '@comfortshingange';
console.log(comfortObject);

// Challenge
// '' Comfort has 3 friends, and his best friend is called Michael

console.log(`${comfortObject.firstName} has ${comfortObject.friends.length} friends, and his best friend is called ${comfortObject.friends[0]}`)


// Object Methods

const james = {
    firstName: 'James',
    lastName: 'Bond',
    birthYear: 1978,
    job: 'Secret Agent',
    friends: ['Michael', 'double07', 'Steven'],
    hasDriversLicense: true,
    // function expression inside an object is called a method
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
}

console.log(james.calcAge(1998));
console.log(james['calcAge'](1998));

// this keyword
const james1 = {
    firstName: 'James',
    lastName: 'Bond',
    birthYear: 1978,
    job: 'Secret Agent',
    friends: ['Michael', 'double07', 'Steven'],
    hasDriversLicense: true,
    // function expression inside an object is called a method
    calcAge: function () {
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

console.log(james1.calcAge());

//  Challenge: "James is a 59-year old secret agent, and he has a driver's license"

console.log(james1.getSummary());


/* code challenge
1. For each of them, create an object with properties for their full name, mass, and height
(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (Body Mass Index), 
and also a property to store the BMI value. BMI is calculated as mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

/*
this keyword is used to access the properties and methods of the object that is calling the method.
*/
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}


// The for loop keeps running while the condition is TRUE. So if we want to loop through an array, we can use the length property of the array to determine the number of iterations of the loop. We can also use the continue and break statements to control the flow of the loop. The continue statement skips the current iteration and continues with the next one, while the break statement terminates the loop entirely.
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}

const types = new Array();

for (let i = 0; i < jonasArray.length; i++) {
    //Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    //Filling types array
    types.push(typeof jonasArray[i]);
}

console.log(types);

// continue and break statements

console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}


// looping backwards and loops in loops

const jamesArray = [
    'James',
    'Bond',
    2037 - 1978,
    'Secret Agent',
    ['Michael', 'double07', 'Steven']
];

for (let i = jamesArray.length - 1; i >= 0; i--) {
    console.log(i, jamesArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}

//while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

/*
Code Challenge #4
    
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and 'totals').
3. Use the 'calcTip' function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together.
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
4.3. Call the function with the 'totals' array.
*/
const bill = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips1 = new Array();
const totals1 = new Array();


for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips1.push(tip);
    totals1.push(bill[i] + tip);
    console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value ${bill[i] + tip}`);
}


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals1));

