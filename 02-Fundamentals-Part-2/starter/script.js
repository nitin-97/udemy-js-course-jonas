"use strict";
// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDrierLicense = true;
// if (hasDriverLicense) console.log("I can drive");

// const interface = "Audio";
// const if = 234;

// function logger() {
//   console.log("My name is Nitin");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apple, oranges) {
//   console.log(apple, oranges);
//   const juice = `juice with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const apple0Juice = fruitProcessor(3, 4);
// console.log(appleJuice);
// console.log(fruitProcessor(9, 0));
// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }
// const age1 = calcAge1(1997);
// console.log(age1);

//Function declaration

// console.log(calcAge2(1947));

// // let result = ;
// function calcAge2(birthYear) {
//   return 2025 - birthYear;
// }

// //Function expression
// const Age2 = calcAge2(1997);
// console.log(Age2);

// const Age2 = calcAge2(1997);
// console.log(Age2);

// const calcAge1 = (birthyear) => 2025 - birthyear;
// const result = calcAge1(1997);
// console.log(result);

// const yearsUntilRetirement = (birthyear) => {
//   const age = 2025 - birthyear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1997));

const yearsUntilRetirement = (birthyear, firstname) => {
  const age = 2025 - birthyear;
  const retirement = 65 - age;

  return `${firstname} is retiring after ${retirement} years;`;
};

console.log(yearsUntilRetirement(1997, "Nitin"));
