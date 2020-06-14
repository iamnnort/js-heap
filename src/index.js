// The Execution Context

// var a = 'Helo, World';

// function b() {
//   console.log('Called b');
// }

// b();
// console.log(a);

// var a;
// console.log(a);

// Single Threded: one command at a time

// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// Event Loop

// function waitTheeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
//   console.log('finished function');
// }

// function clickHandler() {
//   console.log('click event!');
// }

// document.addEventListener('click', clickHandler);

// waitTheeSeconds();
// console.log('finished execution');

// Types

// var a = 1 + '2';
// console.log(a);
// var a = '1' + 2;
// console.log(a);

// console.log(3 < 2 < 1); // true

// var a;

// a = 0;

// if (a || a === 0) {
//   console.log('Nothing is there');
// }

// function hello(name) {
//   name = name || 'Default name';
//   console.log('Hello', tony);
// }

// hello();
// hello('Tony');

// console.log(libName);

var person = new Object();

person['firsName'] = 'Tony';

var firstNameProp = 'firstName';

console.log(person[firstNameProp]);
