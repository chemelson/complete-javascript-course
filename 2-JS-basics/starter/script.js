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