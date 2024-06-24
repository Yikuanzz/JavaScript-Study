'use strict';

/*
    Function delcaration
        - function that can be used before it's delcared
    Function expression
        - essentially a function value stored in a variable
    Arrow function
        - Great for a quick one-line functions. Has on this keyword.

*/

// function
function logger(){
    console.log("I'm Yikuanzz!");
}

// arrow function
const age = birthYear => 2024 - birthYear;
const yourAge = age(2003);

const calcAge = function (birthYear) {
    return 2024-birthYear;
}

const yearUntilRetirement = (birthYear, fisrstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${fisrstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(2003, "Yikuanzz"));


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(3, 2));


// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2004, 2016);

// friends.length   friends.indexOf     friends.includes('Steven')
// friends.push('Mike');    friends.pop();
// friends.unshift('John');     fridends.shift();

// Object   key-value
const jonas = {
    firstName : 'Jonas',
    lastNmae : 'Schmedtmann',
    age : 23,
    job: 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    birthYear: 1993,
    calcAge: function (){
        this.age = 2024 - this.birthYear;
        return this.age;
    }
};

// const interestedIn = prompt("something");
// alert(jonas[`${interestedIn}`]);    // logic about the error you can write

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtman';
console.log(jonas.calcAge());

// for










