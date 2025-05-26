// let js = "amazing";
// if (js === "amazing") alert("javascript is FUN!");
// console.log(50 + 34 + 2 - 1 - 4);

// console.log("Nitin");
// console.log(97);

// let firstName = "Nitin";
// console.log(firstName);

// // Assignments
// // Values and Variables
// // Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// // Log their values to the console.

// let country = "India";
// let continent = "Asia";
// let population = "1.46B";

// console.log(country, continent, population);

// let javascriptisFun = true;
// console.log(javascriptisFun);

// console.log(typeof true);
// console.log(typeof javascriptisFun);
// console.log(typeof 23);
// console.log(typeof "nitin");

// javascriptisFun = "yes!";
// console.log(typeof javascriptisFun);

// let year;
// console.log(year, typeof year);

// year = 1847;
// console.log(year, typeof year);

// let age = 27;
// age = 28;

// const birthYear = 1997;
// console.log(age, birthYear);
// // birthYear = 2000;
// console.log(birthYear);
// // const job;
// var job = "software engineer";
// console.log(job);
// job = "sr. software engineer";
// console.log(job);

// lastName = "Singh";
// console.log(lastName);
// const now = 2025;
// const ageNitin = now - 1997;
// const ageVishal = now - 1996;
// console.log(ageNitin, ageVishal);

// console.log(ageNitin * 2, ageVishal / 3, 2 ** 3);

// const firstName = "nitin";
// const lastName = "gaur";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// console.log(x);

// x += 10;
// console.log(x);
// x *= 4;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// console.log(ageNitin > ageVishal);
// console.log(ageNitin < ageVishal);
// console.log(ageNitin >= ageVishal);
// console.log(ageNitin <= ageVishal);

// const isstoreAge = ageNitin <= ageVishal;
// console.log("isstoreAge", isstoreAge);
// console.log(now - 1997 > now - 1996);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
// const now = 2025;
// const ageNitin = now - 1997;
// const ageVishal = now - 1996;
// console.log(ageNitin, ageVishal);

// averageAge = (ageNitin + ageVishal) / 2;
// console.log(ageNitin, ageVishal, averageAge);

// coding test

// let massMark = 78;
// let heightMark = 1.69;

// let massJohn  = 92;
// let heightJohn = 1.95;

// let BMIMark;
// let BMIJohn;

// BMIMark  = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);
// let markHigherBMI;
// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//AOI -  mass and height values should be in const

// const firstName = "nitin";
// const job = "Software Engineer";
// const birthYear = 1997;
// const currentYear = 2025;

// const str =
//   " I'm " +
//   firstName +
//   ", a " +
//   (currentYear - birthYear) +
//   " years old " +
//   job +
//   " ! ";

// console.log(str);

// let str2 = ` I'm ${firstName} , a ${
//   currentYear - birthYear
// } years old ${job} ! `;

// console.log(str2);

// console.log("This is string", `This is also a string`);

// console.log(
//   "string with \n\
// multiple \n\
// new line character hello"ssss
// );

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("User can have a driving License");
// } else {
//   const yearsLeft = 18 - age;

//   console.log("User is Minor!, can't have a driving License");
//   console.log(`Apply after ${yearsLeft} year`);
// }

// const birthYear = 2013;
// let centur;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   // console.log("Mark's BMI is higher than John's!");

//   console.log(`"Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!"`);
// } else {
//   console.log(`"John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!"`);
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(typeof Number(inputYear) + typeof inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// console.log(typeof String(23), typeof 23);

// console.log("I am " + 23 + " year old");
// console.log("I am" + " 23 " + "year old");
// console.log(23);
// console.log("23" * "2");
// console.log("23" / "2");
// console.log("23" - "3" + 4);

// console.log(Boolean(1));
// console.log(Boolean("nitin"));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 10;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("you should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("Height is Undefined");
// }

// const age = 18;
// if (age === 18) console.log("strict equlaity operator");
// if (age == 18) console.log("loose equlaity operator");

// const favourite = Number(prompt("whats your favourite number"));
// console.log(favourite, typeof favourite);

// if (favourite == 23) {
//   console.log("cool! 23 is amazing number");
// // }

// if (favourite === 23) {
//   console.log("cool! 23 is amazing number");
// } else if (favourite === 7) {
//   console.log("cool! 7 is amazing number");
// } else if (favourite === 97) {
//   console.log("cool! 97 is amazing number");
// } else {
//   console.log("Number is not 23, 7 or 97");
// }

// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = true;

// // console.log(hasDriverLicense || hasGoodVision);
// // console.log(hasDriverLicense && hasGoodVision);
// // console.log(!hasGoodVision);

// // const shouldDrive = hasDriverLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("somene else should drive....");
// // }

// // if (hasDriverLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("somene else should drive....");
// // }

// // }

// if (hasDriverLicense && hasGoodVision && isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("somene else should drive.... ");
// }

// let scoreDolphins = (96+108+89)/3;
// let scoreKoalas = (88+91+11)/3;

// if(scoreDolphins>scoreKoalas){
//     console.log("Dolphins win the trophy");
// }
// else if(scoreKoalas>scoreDolphins){
//         console.log("Koalas win the trophy");
// }else
// {
//     console.log("Both win the trophy");

// }

// const day = "wednesday";
// switch (day) {
//   case "monday":
//     console.log("day is monday");
//     break;
//   case "tuesday":
//     console.log("day is tuesday or wednesday ");

//   case "wednesday":
//     console.log("day is tuesday or wednesday");
//     break;
//   case "thursday":
//     console.log("day is thursday");
//     break;
//   case "friday":
//     console.log("day is friday");
//     break;
//   case "saturday":
//     console.log("day is saturday");
//     break;
//   case "sunday":
//     console.log("day is sunday");
//     break;
// }

// const age = 30;
// const results = age >= 18 ? console.log("can drink wine") : console.log("can't drink wine");

// const age = 30;
// const results = age >= 18 ? "can drink wine" : "can't drink wine";
// console.log(results);

// let age = 2;
// if (age >= 18) {
//   drink2 = "drink wine";
// } else {
//   drink2 = "can't drink wine";
// }

// console.log(drink2);

// console.log(`T like to drink ${(results = age >= 18 ? "wine" : "water")}`);

const bill = 275;
let tip;
let total_value;
tip = bill > 50 && bill < 300 ? bill * (10 / 100) : bill * (20 / 100);
total_value = bill + tip;
console.log(
  `The bill was ${bill} the tip was ${tip}, and the total value ${total_value}`
);
