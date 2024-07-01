// function in javascript

// resuse, parameters, result

// function printname(name, age) {
//   // argument
//   console.log(`my name is ${name} and my age is ${age}`);
// }

// printname("karan", 22); // parameter

// function multiplicationtwo(p1, p2) {
//   return p1 * p2;
// }

// let result = multiplicationtwo(30, 10);
// console.log(result);

// function addnume(p1,p2,p3){
//     return p1+p2+p3;
// }
// let result=addnume(20,40,80);
// console.log(result);

// function subtract(p1, p2, p3) {
//   return p1 - p2 - p3;
// }
// let result = subtract(30, 20, 20);
// console.log(result);

// function phoneName(name, price) {
//   console.log(`the name of your phone is ${name} and the price is ${price}`);
// }

// phoneName("redmi", 2000);

// es6

// const phoneName = (name, price) =>
//   console.log(`the phone name is ${name} and the price is ${price} `);
// console.log("the phone name is ", name);

// phoneName("redmi", "20000");
// const add = (a, b) => console.log(a + b);
// add(2, 3);

// function sayHello(name, age) {
//   console.log(`hello from ${name} side and lm,,,,,my age is ${age} `);
// }

// sayHello("function", "21");

// const sayname = (name, age) => {
//   console.log(`hello from ${name} side and lm,,,,,my age is ${age} `);
// };

// sayname("aman", 2);

// const printName = function (name, age) {
//   console.log(`hello from ${name} side and lm,,,,,my age is ${age} `);
// };

// printName("karan", 21);

// function printName(name) {
//   console.log("my name is", name);
// }

// function printAge(age) {
//   console.log("my age is ", age);
// }

// function qualification(deg) {
//   console.log("my degree is", deg);
// }

// function displayData() {
//   printName("akash");
//   printAge(22);
//   qualification("BCA");
// }

// displayData();

// function AddthreeNum(num1, num2, num3) {
//   console.log(`the sum of a+b+c`, num1 + num2 + num3);
// }

// AddthreeNum(10, 10, 20);

function vowels(vol1, vol2, vol3, vol4, vol5) {
  console.log("the vowels are", vol1, vol2, vol3, vol4, vol5);
}

vowels("a", "e", "i", "o", "u");

// create a two function the first function will print name and the second function will print sirName and create the third function which call the
// function one and function two

function printName(name) {
  console.log(name);
}

function printSirName(sirname) {
  console.log(sirname);
}

function callTwoFunction() {
  printName("karan");
  printSirName("pandey");
}

callTwoFunction();
