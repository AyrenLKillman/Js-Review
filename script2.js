'use Strict';
//iuse this on practically any script

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive :D');


const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = (markWeight / markHeight ** 2).toFixed(1);
const johnBMI = (johnWeight / johnHeight ** 2).toFixed(1);

function BMItest() {
    if (markBMI > johnBMI) {
        console.log("Marks BMI" + "(" + markBMI + ")" + "is higher than John's BMI" + "(" + johnBMI + ")");
    } else if (johnBMI > markBMI) {
        console.log("John's BMI" + "(" + johnBMI + ")" + "is higher than Marks BMI" + "(" + markBMI + ")");
    }
}

BMItest();


