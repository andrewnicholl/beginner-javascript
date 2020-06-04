// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Anon Function
// // function (firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Function Expression
// // const doctorize = function(firstName) {
// //   return `Dr. ${firstName}`;
// // };

// /* eslint-disable */
// const inchToCM = inches => inches * 2.54;

// // function add(a, b = 3) {
// //   const total = a + b;
// //   return total;
// // }

// // const add = (a, b = 3) => a + b;

// // returning an object

// // function makeABaby(first, last) {
// //   const baby = {
// //     name: `${first} ${last}`,
// //     age: 0
// //   }
// //   return baby;
// // }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// // IIFE
// // Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// // Methods!!!
// const wes = {
//   name: 'Westopher Bos',
//   // Method!
//   sayHi: function() {
//     console.log(`Hey ${this.name}`);
//     return 'Hey Wes';
//   },
//   // Short hand Method
//   yellHi() {
//     console.log('HEY WESSSSS');
//   },
//   // Arrow function
//   wisperHi: () => {
//     console.log('hii wesss im a mouse');
//   }
// }

// // Callback Functions
// // Click Callback
// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('Great Clicking!!');
// }

// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// // Timer Callback
// setTimeout(() => {
//   console.log('DONE! Time to eat!');
// }, 1000);

// work along here

// function
// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

// anon function
// function (firstName) {
//   return `Dr ${firstName}`;
// }

// function expression
// const doctorize = function(firstName) {
//   return `Dr ${firstName}`;
// };

/* eslint-disable */
// arrow functions
const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => a + b;

// // returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
(function(age) {
  console.log('running anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
  name: 'Wes Bos',
  sayHi: function(){
    console.log('hi wes');
    return 'Hey Wes';
  },
  // Shorthand
  yellHi(){
    console.log('HI WESSS');
  },
  // arrow
  wisperHi: () => {
    console.log('hii wess im a mouse');
  }
}

// Callback functions
// click

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('great clicking')
}

button.addEventListener('click', function() {
  console.log('nice job')
});

// Timer

setTimeout(() => {
  console.log('time to eat');
}, 1000);