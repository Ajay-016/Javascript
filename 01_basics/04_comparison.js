// console.log("2" > 1);   // true
// console.log("02" > 1);  // true

// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null <= 0); // true
// console.log(null >= 0); // true

// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (null > 0) and (null < 0) are false, and (null >= 0) and (null <= 0) are true.

//          '===' known as strict-check, means it checks value as well as data-type

console.log("2"===2);
console.log("2"==="2");



