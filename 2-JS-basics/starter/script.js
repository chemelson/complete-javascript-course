/*
* This lecture and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Just my comment
var _3years = 3;
var myAge = 23;

/*
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
 * Basic Operators

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark bla bla bla');
var x;
console.log(typeof x);
 */

/*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark =35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x = x * 2;
x *= 2;
x += 10;
console.log(x);

*/

// Challenge
/*
var heightJohn, heightMark, weightJohn, weightMark, bmiJohn, bmiMark;
heightJohn = 1.95;
heightMark = 1.69;
weightJohn = 92;
weightMark = 78;

bmiJohn = weightJohn / heightJohn**2;
console.log('John: ' + bmiJohn);
bmiMark = weightMark / heightMark**2;
console.log('Mark: ' + bmiMark);

var isMarkBMIHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI is higher: ' + isMarkBMIHigher);
*/

/*
If else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else  {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else  {
    console.log(firstName + ' will hopefully marry soon');
}
 */
/*
var heightJohn, heightMark, weightJohn, weightMark, bmiJohn, bmiMark;
heightJohn = 1.95;
heightMark = 1.69;
weightJohn = 92;
weightMark = 78;

bmiJohn = weightJohn / heightJohn**2;
bmiMark = weightMark / heightMark**2;

var isMarkBMIHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI is higher: ' + isMarkBMIHigher);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher');
} else {
    console.log('John\'s BMI is higher');
}

*/

/*
 Boolean logic

var firstName = 'John';
var age = 16;
if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}
 */

// Ternary operator
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log("Can drink") : console.log("Drink cola");
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs');
        break;
    default:
        console.log(firstName + ' do smth else');
}
*/
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

if (height === '23') {
    console.log('The === does not type coercion');
}
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1986);
var ageMike = calculateAge(1948);
var ageMJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageMJane);
*/

// Arrays
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1998, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.shift();
john.indexOf(1998);
console.log(john.indexOf(1998));
console.log(john.indexOf('designer'));
 */

// Objects and properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
 */

// Methods
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log('John age: ' + john.age);
*/

// Loops and iteration
for (var i = 1; i <= 10; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1998, 'teacher', false];
john.forEach();


















