// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane= Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

 */

// Primitives vs objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

var age =27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(a, obj);

console.log(age);
console.log(obj.city);

 */

// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(array, fn) {
//     var arrRes = [];
//     array.forEach(item => arrRes.push(fn(item)));
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2016 - el;
// }
//
// function isFullAge(el) {
//     return el >= 18;
// }
//
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var fullAges = arrayCalc(years, isFullAge);
// console.log(fullAges);

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what is UX?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');

//IIFE
//
// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
//
// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1998);

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentleman! I\'m ' + this.name + ' ' + this.job + ' ' + this.age);
        } else if (style === 'friendly') {
            console.log('Hey! ' + ' I\'m ' + this.name + ' ' + this.job + ' ' + this.age);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly', 'morning');

johnFriendly();