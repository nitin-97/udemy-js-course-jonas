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

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = 2025 - birthyear;
//   const retirement = 65 - age;

//   return `${firstname} is retiring after ${retirement} years;`;
// };

// console.log(yearsUntilRetirement(1997, "Nitin"));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };
// function fruitProcessor(apple, oranges) {
//   const applePieces = cutPieces(apple);
//   const ornagePieces = cutPieces(oranges);
//   const juice = `juice with ${applePieces} Pieces of apple and ${ornagePieces} pieces of Oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstname} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstname} retires has already retired `);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1947, "nitin"));

// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins  win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(576, 111);
// const freind1 = "Nitin";
// const freind2 = "vishal";
// const freind3 = "vivek";
// const freinds = ["Nitin", "vishal", "vivek"];
// console.log(freinds);

// const years = new Array(1997, 1998, 2000, 2001);
// console.log(years);
// console.log(freinds[0], freinds[1], freinds[2]);
// console.log(years[0], years[1], years[2]);
// console.log(years.length);
// console.log(freinds.length);
// console.log(freinds[freinds.length - 1]);
// freinds[2] = "happy";
// console.log(freinds);

// const name1 = "nitin";
// const newArr = [name1, "singh", 460 - 3, freinds];
// console.log(newArr);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1997, 1998, 1999, 2000];
// console.log(calcAge(years));

// console.log(years + 10);
// console.log(years - 10);
// const age1 = calcAge(years[0]);
// const Age2 = calcAge(years[1]);
// const Age3 = calcAge(years[years.length - 1]);
// console.log(age1, Age2, Age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const freinds = ["Nitin", "vishal", "vivek"];
// const newLength = freinds.push("Happy");
// console.log(freinds);
// // console.log(newLength);

// const unshiftLength = freinds.unshift("Rahul");
// console.log(freinds);
// // console.log(unshiftLength);

// const poppedElement = freinds.pop();
// console.log(freinds);
// console.log(poppedElement);

// const shiftedElement = freinds.shift();
// console.log(freinds);
// console.log(shiftedElement);

// console.log(freinds.indexOf("vishal"));
// console.log(freinds.includes("Happy"));
// console.log(freinds.includes("dom"));

// const bill = 275;
// let tip;
// let total_value;
// tip = bill > 50 && bill < 300 ? bill * (10 / 100) : bill * (20 / 100);
// total_value = bill + tip;
// console.log(
//   `The bill was ${bill} the tip was ${tip}, and the total value ${total_value}`
// );

// const bills = [125, 555, 44];

// const calcTip = function (bills[0]) {
//   let tips[0] = 1;

//   tips[0] = bills[0] > 50 && bills[0] < 300 ? bills[0] * (10 / 100) : bills[0] * (20 / 100);

//   const totals[0] = bills[0] + tips[0];
// };

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips);
// console.log(total);

// const nitin = {
//   firstName: "nitin",
//   lastName: "singh",
//   age: 2025 - 1997,
//   job: "Software Engineer",
//   codingLanguages: ["HTML", "CSS", "Bootstrap5", "Javascript", "GIT"],
// };

// dot operator

// console.log(nitin);
// console.log(
//   nitin.firstName,
//   nitin.lastName,
//   nitin.age,
//   nitin.job,
//   nitin.codingLanguages
// );

//bracket

// console.log(
//   nitin["firstName"],
//   nitin["lastName"],
//   nitin["job"],
//   nitin["age"],
//   nitin["codingLanguages"]
// );

// const namekey = "Name";
// console.log(nitin["first" + namekey]);
// console.log(nitin["last" + namekey]);

// in bracket we can have the expression , like the first and namekey is addingup and forming the key

// console.log(nitin.'last'+namekey) this is wrong

// const intrestedIn = prompt(
//   "what do you want to know about Nitin? choose between firstName , lastName, age, job, and codingLanguages"
// );
// // console.log(nitin[intrestedIn]);
// if (nitin[intrestedIn]) {
//   console.log(nitin[intrestedIn]);
// } else {
//   console.log(
//     "wrong request",
//     "what do you want to know about Nitin? choose between firstName , lastName, age, job, and codingLanguages"
//   );
// }

// nitin.location = "Gr. Noida";
// nitin["course"] = "udemy";
// console.log(nitin);

// console.log(
//   `${nitin.firstName} has ${nitin.codingLanguages.length} coding skills and his best is ${nitin.codingLanguages[3]}`
// );

// const nitin = {
//   firstName: "nitin",
//   lastName: "singh",
//   birthYear: 1997,
//   job: "Software Engineer",
//   codingLanguages: ["HTML", "CSS", "Bootstrap5", "Javascript", "GIT"],
//   calcAge: function () {
//     console.log(this);
//     return 2025 - this.birthYear;
//   },
// };

// console.log(nitin.calcAge());

const nitin = {
  firstName: "nitin",
  lastName: "singh",
  birthYear: 1997,
  job: "Software Engineer",
  hasDriversLicense: true,
  codingLanguages: ["HTML", "CSS", "Bootstrap5", "Javascript", "GIT"],
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  checKDriverLicense: function () {
    if (this.hasDriversLicense) {
      console.log(
        `${this.firstName} is a ${this.calcAge()} year's old ${
          this.job
        }, and he has a driver's license`
      );
    } else {
      console.log(
        `${this.firstName} is a ${this.calcAge()} year's old ${
          this.job
        }, and he has no driver's license`
      );
    }
  },
  checKDriverLicense: function () {
    return `${this.firstName} is a ${this.calcAge()} year's old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a " : "no"}driver's license`;
  },
};

// console.log(nitin.calcAge());
console.log(nitin.checKDriverLicense());

// challenge 3
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

console.log(
  mark.calcBMI() > john.calcBMI()
    ? ` "${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!"`
    : ` "${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!"`
);
