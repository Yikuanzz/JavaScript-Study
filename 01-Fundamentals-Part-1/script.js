/* 
    [JavaScript is dynamic type language]
    7 Primitive Data Types
    - 1. Number
    - 2. String
    - 3. Boolean
    - 4. Undefined
    - 5. NUll
    - 6. Symbol(ES2015): Value that is unique and cannot be changed
    - 7.BigInt(ES2020): Lager integers than the Number type can hold

    We can use `typeof`
*/

let lastName = "John";

const birthYear = 2000;

var job = 'programmer';


/*
    Coding Challenge #1
    Mark and John are trying to compare their BMI
    BMI = mass / height**2  = mass / (height * height)
*/
let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / (markHeight**2);

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / (johnHeight**2);

const markHigherBMI = markBMI > johnBMI;

/*
    Template String
*/

const firstName = "Lisa";
const nowYear = 2024;
const newMyself = `I'm ${firstName}, a ${nowYear - birthYear} year old ${job}.`;

/*
    Coding Challenge #2
    1.Print a nice output to the console, saying who has the higher BMI.
    2.User a template string to inlude the BMI values is the outputs.
*/
const op1 = `Mark's BMI is ${markBMI}, John's BMI is ${johnBMI}.`;
if (johnBMI > markBMI){
    const res1 = "Mark's BMI is higher than John's!";
} else{
    const res2 = "John's BMI is higher than Mark's!";
}

/*
    Type change
*/
const inputYear = '1991';
const outputYear = Number(inputYear) + 33;

 /*
    5 falsy values: 0, '', undefined, null, NaN
 */

    
/*
    Coding Challenge #3
    There are two gymnastics teams, Dolphins and Koalas.
    They compete against each other 3 tiems.
    The winner with tehe highest average score with a trophy!
*/    



