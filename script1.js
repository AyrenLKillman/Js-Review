/*let boo = "cheese";
console.log(6 + 3);
multii line
comment
let firstName = "bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Dishwasher";
let myFavorieClass = "Coding";

let favNumber = 12; // Number
let lastName = "Joe"; //String
let cannedBeans = true; //boolean
let cheese //undefined / null

*/

// let isCheeseGood = true;
// console.log(typeof (true));
// console.log(typeof (isCheeseGood));
// // console.log(typeof (21));
// // console.log(typeof ("aaaa"));
// isCheeseGood = "aaaa"
// console.log(typeof (isCheeseGood));
// let bruhMans;
// console.log(bruhMans)
// console.log(typeof (bruhMans));

// bruhMans = "asdf"
// console.log(typeof (bruhMans));
// console.log(typeof (null));

// let pizza = "sausagerz" //let can be changed
// console.log(pizza)
// pizza = "peperz"
// console.log(pizza)
// const burger = 3 //const Cannot be changed
// var dude = 8 //dont use var, same as let but more buggy

// let currentYear = 2024
// const ageBob = currentYear - 1950;
// const ageJoe = currentYear - 1998;
// console.log(ageBob, ageJoe);

// console.log(ageBob * 2, ageJoe / 2, 2 ** 3)   // ** is used to make something to the power to something, so 2^3

// const nameOne = "bob";
// const nameTwo = "joe";
// console.log(nameOne + " " + nameTwo);

// console.log(ageBob > ageJoe);

//im doing a bunch of simlifying here cuz i wanna speed up watching the video and i wanna get this completed

//challenge 1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

//challenge 2
function whoisBigger() {
    if (markHigherBMI === true) {
        console.log("Mark's BMI is higher than John's");
    } else if (markHigherBMI === false) {
        console.log("John's BMI is higher than Mark's");
    }
}

whoisBigger();


//wont be doing challenge 3 or 4 for fundamentals 1 so i can go quicker in the assignment