// Let and const
// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);
 */

// // ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now a driver');
// }
//
// driversLicense5(true);
//
// // ES6
// function driversLicense6(passedTest) {
//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//         firstName = 'John';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now a driver');
// }
//
// driversLicense6(true);
//
// let i = 23;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// Blocks and IIEFI
// ES6;
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// console.log(a + b);

// ES5
// (function () {
//     var c = 3;
// })();
//
// console.log(c);

//

// Strings
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2016 - year;
// }
//
// // ES5
// console.log('This is ' + firstName + ' ' + lastName + ' and he was born in ' + yearOfBirth);
// // ES6
// console.log(`This is ${firstName} ${lastName} and he was born in ${yearOfBirth}`);
//
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));

// // Arrow functions
// const years = [1990, 1965, 1982, 1937];
// // ES5
// var ages5 = years.map(function (item) {
//     return 2016 - item;
// });
// console.log(ages5);
//
// // ES6
// let ages6 = years.map(year => 2016 - year);
// console.log(ages6);
// ages6 = years.map((year, i) => `${year} - ${i}`);
// console.log(ages6);

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function () {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };
// box5.clickMe();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             const str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };
// box6.clickMe();
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe:  () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             const str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };
// box66.clickMe();

// function Person(name) {
//     this.name = name;
// }
// // ES5
// Person.prototype.myFriends5 = function (friends) {
//     var arr = friends.map(function (el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// };
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);
//
// // ES6
// Person.prototype.myFriends6 = function (friends) {
//     var arr = friends.map(item => `${this.name} s friends with ${item}`);
//     console.log(arr);
// };
//
// var friends6 = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends6(friends6);

// Destructuring
// ES5
var john = ['John', 26];
var name = john[0];
// var age = john[1];

// ES6
// const [name6, year6] = ['John', 26];
// console.log(name6);
// console.log(year6);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };
//
// const { firstName, lastName } = obj;
//
// const { firstName: a, lastName: b } = obj;
//
//
// function calcAgeOfRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }
//
// const [age, retirement] = calcAgeOfRetirement(1990);
// console.log(age);
// console.log(retirement);

// Arrays
const boxes = document.querySelectorAll('.box');
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

// // ES6
const boxesArr6 = Array.from(boxes);
//     .forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//
// // ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//        continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue';
// }

// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//    continue;
//   }
//   cur.textContent = 'I changed!!';
// }

// ES5
// var ages = [12, 17, 8, 21, 14, 11];
// // var full = ages.map(function (cur) {
// //   return cur >= 18;
// // });
// //
// // console.log(full);
//
// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
//
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
//
// var sum1 = addFourAges(18, 30, 12, 21);
// // console.log(sum1);
//
// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// // console.log(sum2);
//
// // ES6
// const max3 = addFourAges(...ages);
// console.log(max3);

// Rest parameters
// // ES5
// function isFullAge5(limit) {
// 	var argsArray = Array.prototype.slice.call(arguments, 1);
// 	argsArray.forEach(cur => console.log((2016 - cur) >= limit));
// }
//
// // isFullAge5(18, 1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2016, 1987);
//
// // ES6
// function isFullAge6(limit, ...years) {
// 	years.forEach(cur => console.log((2016 - cur) >= limit));
// }
//
// isFullAge6(16, 1999, 1965, 2016, 1987);


// Default parameters
// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
// 	lastName === undefined ? lastName = 'Smith' : lastName;
// 	nationality === undefined ? nationality = 'American' : nationality;
//
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;
// }
//
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	this.yearOfBirth = yearOfBirth;
// // 	this.nationality = nationality;
// // }
// // var john = new SmithPerson('John', 1990);

// Maps
// const question = new Map();
// question.set('question', 'What is your official name of bla bla bla');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, fuck off');
//
// console.log(question.get('question'));
// console.log(question.size);
//
// // question.forEach((value, key) => console.log(`Key: ${key}, value: ${value}`));
// for (const [key, value] of question.entries()) {
// 	if (typeof(key) === 'number') {
// 		console.log(value);
// 	}
// }
//
// const ans = parseInt(prompt('Write the correct answer'));

// Classes
// ES5
// var Person5 = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };
// Person5.prototype.calculateAge = function () {
// 	var age = new Date().getFullYear() - this.yearOfBirth;
// 	console.log(age);
// };
//
// var john5 = new Person5('John', 1990, 'teacher');
//
// // ES6
// class Person6 {
// 	constructor(name, yearOfBirth, job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}
//
// 	calculateAge() {
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}
//
// 	static greeting() {
// 		console.log('Hey there!')
// 	}
// }
//
// var john6 = new Person6('John', 1990, 'teacher');
// john6.calculateAge();

// ES5
// var Person5 = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };
// Person5.prototype.calculateAge = function () {
// 	var age = new Date().getFullYear() - this.yearOfBirth;
// 	console.log(age);
// };
//
// var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
// 	Person5.call(this, name, yearOfBirth, job);
// 	this.olympicGames = olympicGames;
// 	this.medals = medals;
// };
//
// Athlete5.prototype = Object.create(Person5.prototype);
// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//
// // ES6
// class Person6 {
// 	constructor(name, yearOfBirth, job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}
//
// 	calculateAge() {
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}
// }
//
// class Athlete6 extends Person6 {
// 	constructor(name, yearOfBirth, job, olympicGames, medals) {
// 		super(name, yearOfBirth, job);
// 		this.olympicGames = olympicGames;
// 		this.medals = medals;
// 	}
// }