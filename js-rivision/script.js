//! PREREQUISITES OF REACT JS

//! 1) ARROW FUNCTION AND TRADITIONAL FUNCTIONS
// function demo() {
//   console.log("I am Demo, Named Function");
// }
// demo();

// const fun = function () {
//   console.log("Function Expression");
// };
// fun();

// const sum = function (a = 0, b = 0) {
//   let result = a + b;
//   return result;
// };
// console.log(sum(80, 10));
// console.log(sum(5));

// const a1 = () => {
//   console.log("Hii");
// };
// console.log(a1); // () => {console.log("Hii");};
// a1();

// const a2 = username => {
//   console.log(username);
// };
// a2("John");

// // returns -> 1) implicit  2) explicit
// const a3 = () => {return "Explicit"}
// console.log(a3());

// const a4 = () => "Implicit"
// console.log(a4());

// const a5 = () => {
//     return {data : "Hello World"}
// }
// console.log(a5());

// const a6 = () => ({data : "Hello World"})
// console.log(a6());

//! 2) DESTRUCTURING
// let arr1 = [10, 20, 30, 40];
// let [a1, a2, a3, a4] = arr1;
// console.log(a1, a4);

// let obj1 = { id: 1, ename: "John", age: 20 };
// let { age, salary = "NA", ename: username } = obj1;
// console.log(age, salary, username);

//! 3) REST AND SPREAD
// for packing and unpacking of an array
// used to copy array elements and object's property
// syntax = ...variableName

// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1); // [10, 20, 30, 40, 50]
// console.log(...arr1); // spread --> 10 20 30 40 50 (unpack)

// let arr2 = [...arr1]; // <-- rest (pack)
// console.log(arr2); //  [10, 20, 30, 40, 50]

// let obj1 = { id: 1, ename: "John" };
// let obj2 = { ...obj1, salary: 50000 };
// console.log(obj2);

// let name = "username";
// let value = "John";
// let salary = 90000;

// let formData = {
//   [name]: value,
//   email: "john@gmail.com",
//   password: "123456",
//   salary
// };

// console.log(formData);// {username : "John" ,email :"john@gmail.com", password:"123456"}

//! 4) ARRAY METHODS :- map() , forEach(), filter(), find(), findIndex() ,reduce()

// let arr = [10, 20, 30, 40, 50];

// //! map : returns a new array
// let val1 = arr.map((element, index, array) => {
//   // console.log(element, index, array);
//   return element + 5;
// });
// console.log(val1);

// console.log("==============================");

// //! forEach : returns undefined
// let val2 = arr.forEach((element, index, array) => {
//   // console.log(element, index, array);
//   return element + 5;
// });
// console.log(val2);

// let arr2 = [60, 20, 10, 30, 50, 80];

// //! filter : used to filter out the array which satisfy the condition, returns new filtered array
// let val3 = arr2.filter((ele) => {
//   return ele > 25;
// });
// console.log(val3);

// //! find : used to find first occurance of the element which satisfy the condition, returns single value
// let val4 = arr2.find((ele) => {
//   return ele > 25;
// });
// console.log(val4); // 60

// //! findIndex : Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let val5 = arr2.findIndex((ele) => {
//   return ele > 25;
// });
// console.log(val5); // 0

// //! reduce(callback , accumulatorValue)
// // in callback function we are having 4 parameters
// // 1)accumulator 2)element 3)index 4)array

// let arr3 = [10, 20, 30, 40, 50];

// let val6 = arr3.reduce((acc, ele, idx, arr) => {
//   return acc + ele;
// }, 0);
// console.log(val6);

//! 5) MODULES :
//! 1)Named
// import { greet, demo } from "./utilities.js";
// greet();

// import * as utilities from "./utilities.js"
// utilities.greet()
// utilities.demo()

// import { greet as welcome, demo } from "./utilities.js";
// welcome();

//! 2) Default
// import Addition from "./utilities.js";

// let val = Addition(10, 20);
// console.log(val);

//! REACT EXAMPLE
import { useState, useRef } from "./utilities.js";

let [state, setState] = useState(0);
console.log(state);
console.log(setState);

let ref = useRef();
console.log(ref); // {current : ud}
