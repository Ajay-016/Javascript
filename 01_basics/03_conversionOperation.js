let score = "20"
// console.log(typeof score);
let numberInScore = Number(score) // type conversion of a string to a number
// console.log(typeof numberInScore);


let str = "20abc"
let numberInStr = Number(str)
// console.log(numberInStr);

// "33" => 33
// "20abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true, 0 => false
// "" => false
// "ajay" => true

let someNumber = 22
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *****************************  Operations  *********************************************

let value = 5
let negValue = -value
// console.log(negValue);
 let str1 = "hello "
 let str2 = "ajay"
 let str3 = str1 + str2
//  console.log(str3);
 
//  console.log("1" + 2);  // 12
//  console.log(1 + "2");  // 12
//  console.log("1" + 2 + 2); // 122
//  console.log(1 + 2 + "2"); // 32
 

// console.log(true);
// console.log(+true); // true is considered as 1 here.

let counter = 100;
++counter // counter++, both gives the same output as 101
console.log(counter);
